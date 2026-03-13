"use client";

import { useMemo } from "react";

import { Box, Divider, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";

import { Shift } from "@/models/entities/Shift";
import { useAppSelector } from "@/store/hooks";

const HomeOverview = () => {
  const { shifts, shiftsLoading, shiftsLoadError } = useAppSelector(state => state.shifts);

  // Vi bruker useMemo for å unngå infinite loop og spare ytelse
  const stats = useMemo(() => {
    // 1. Definer lokale tellere inne i memoen
    const employees = new Set<string>();
    const employeeShifts = new Map<string, Shift[]>();
    let shiftCount = 0;

    // 2. Kjør igjennom dataene én gang
    for (const shift of shifts ?? []) {
      const employeeId = shift.Employee.Id;
      const workdayId = shift.Workday.Id;
      const employeeWorkdayId = `${employeeId}_${workdayId}`;

      employees.add(employeeId);

      // Tell vakter med tid
      if (shift.Time) shiftCount++;

      // Grupper for å finne endringer senere
      const group = employeeShifts.get(employeeWorkdayId) || [];
      group.push(shift);
      employeeShifts.set(employeeWorkdayId, group);
    }

    // 3. Regn ut endrings-statistikk basert på grupperingen
    let changedShiftCount = 0;
    let noRemarkCount = 0;

    for (const [_, value] of employeeShifts) {
      if (value.length > 1) {
        changedShiftCount++;

        // Sjekk siste vakt i historikken for merknad
        const lastRemark = value.at(-1)?.ShiftRemark?.Remark;
        if (!lastRemark) {
          noRemarkCount++;
        }
      }
    }

    // 4. Returner alt som ett objekt
    return {
      employeeCount: employees.size,
      shiftCount,
      changedShiftCount,
      noRemarkCount,
    };
  }, [shifts]); // Denne kjører kun når 'shifts' endres i Redux

  if (shiftsLoading) return <div>DEV :: Loading</div>;
  if (shiftsLoadError) return <div>DEV :: Data load error!</div>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "max-content" }}>
      <Typography variant="h6">Oversikt</Typography>
      <Divider />
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "600" }}>Antall Ansatte</TableCell>
            <TableCell align="right">{stats.employeeCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "600" }}>Antall skift</TableCell>
            <TableCell align="right">{stats.shiftCount}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell align="left" sx={{ fontWeight: "600" }}>Antall Endringer</TableCell>
              <TableCell align="right">{stats.changedShiftCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "600" }}>*Uten merknad</TableCell>
            <TableCell align="right">{stats.noRemarkCount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default HomeOverview;