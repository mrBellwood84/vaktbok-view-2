"use client";

import { useMemo } from "react";

import { Box, Divider, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";

import AppPageLoading from "@/components/shared/AppPageLoading";
import { Shift } from "@/models/entities/Shift";
import { useAppSelector } from "@/store/hooks";

const HomeOverview = () => {
  const { shifts, shiftsLoading } = useAppSelector(state => state.shifts);

  const stats = useMemo(() => {
    const employees = new Set<string>();
    const employeeShifts = new Map<string, Shift[]>();
    let shiftCount = 0;

    for (const shift of shifts ?? []) {
      const employeeId = shift.Employee.Id;
      const workdayId = shift.Workday.Id;
      const employeeWorkdayId = `${employeeId}_${workdayId}`;

      employees.add(employeeId);

      if (shift.Time) shiftCount++;

      const group = employeeShifts.get(employeeWorkdayId) || [];
      group.push(shift);
      employeeShifts.set(employeeWorkdayId, group);
    }

    let changedShiftCount = 0;
    let noRemarkCount = 0;

    for (const [_, value] of employeeShifts) {
      if (value.length > 1) {
        changedShiftCount++;

        const lastRemark = value.at(-1)?.ShiftRemark?.Remark;
        if (!lastRemark) {
          noRemarkCount++;
        }
      }
    }

    return {
      employeeCount: employees.size,
      shiftCount,
      changedShiftCount,
      noRemarkCount,
    };
  }, [shifts]); // Denne kjører kun når 'shifts' endres i Redux

  if (shiftsLoading) return <AppPageLoading />;

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