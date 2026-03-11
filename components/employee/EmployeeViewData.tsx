"use client";

import { useState } from "react";

import { ExpandMore } from "@mui/icons-material";
import { Accordion,
  AccordionDetails, AccordionSummary, Box, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import { useAppSelector } from "@/store/hooks";

export const EmployeeViewData = () => {

  const {
    selectedEmployee,
    changedShifts,
    uniqueShiftCount,
    changedShiftCount,
    shiftCodesCount,
    loading,
  } = useAppSelector(state => state.employeeView);

  const [expanded, setExpanded] = useState<string>("p2");

  const handleAccordationOnChange = (panel: string) => {
    setExpanded(panel);
  };

  if (loading) return <div>DEV :: Loading!</div>;

  // no employee or employee failed loading
  if (!selectedEmployee) {
    return (
      <Box sx={{ m: 2, flexGrow: 1 }}>
        <Typography variant="h5" textAlign="center">
          Ingen ansatt valgt!
        </Typography>
      </Box>
    );
  }

  // employee loaded and features calculated
  return (
    <Box sx={{ ml:3, mt: 2, pb:5, flexGrow: 1, height: "100%", overflowX: "scroll" }}>
      <Typography variant="h5" textAlign="center">
        {selectedEmployee.Name}
      </Typography>

      <Divider sx={{ m: 1, flexGrow: 1 }}/>

      <Box sx={{ display: "flex", justifyContent: "center", mb:1 }}>
        <Typography variant="subtitle1" textAlign="center" sx={{ mx: 1 }}>Antall skift: <b>{uniqueShiftCount}</b></Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="subtitle1" textAlign="center" sx={{ mx: 1 }}>Endringer: <b>{changedShiftCount}</b></Typography>
      </Box>

      <Box>
        <Accordion
          expanded={expanded === "p1"}
          onChange={(_, isExpanded) => handleAccordationOnChange(isExpanded ? "p1":"")}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="button">
              Fordeling vakter
            </Typography>
          </AccordionSummary>
            <AccordionDetails>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Vaktkode</TableCell>
                  <TableCell align="center">Orgiginal</TableCell>
                  <TableCell align="center">Siste</TableCell>
                  <TableCell align="center">% Vakter</TableCell>
                  <TableCell align="center">% Globalt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shiftCodesCount.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" sx={{ fontWeight: 600 }}>{item.code}</TableCell>
                    <TableCell align="center">{item.original}</TableCell>
                    <TableCell align="center">{item.latest}</TableCell>
                    <TableCell align="center">{(item.latest / item.totalLatest * 100).toPrecision(2)}%</TableCell>
                    <TableCell align="center">-</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "p2"}
          onChange={(_, isExpanded) => handleAccordationOnChange(isExpanded ? "p2":"")}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="button">
              Fordeling vakter per uke
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Vaktkode</TableCell>
                  <TableCell align="center">Mandag</TableCell>
                  <TableCell align="center">Tirsdag</TableCell>
                  <TableCell align="center">Onsdag</TableCell>
                  <TableCell align="center">Torsdag</TableCell>
                  <TableCell align="center">Fredag</TableCell>
                  <TableCell align="center">Lørdag</TableCell>
                  <TableCell align="center">Søndag</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {shiftCodesCount.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" sx={{ fontWeight: 600 }}>{item.code}</TableCell>
                    <TableCell align="center">{item.weekdayCount[0]}</TableCell>
                    <TableCell align="center">{item.weekdayCount[1]}</TableCell>
                    <TableCell align="center">{item.weekdayCount[2]}</TableCell>
                    <TableCell align="center">{item.weekdayCount[3]}</TableCell>
                    <TableCell align="center">{item.weekdayCount[4]}</TableCell>
                    <TableCell align="center">{item.weekdayCount[5]}</TableCell>
                    <TableCell align="center">{item.weekdayCount[6]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "p3" && changedShifts.length > 0}
          onChange={(_, isExpanded) => handleAccordationOnChange(isExpanded ? "p3":"")}
          disabled={changedShifts.length === 0}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="button">Historikk endringer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Dato</TableCell>
                  <TableCell align="center">Org. Kode</TableCell>
                  <TableCell align="center">Siste Kode</TableCell>
                  <TableCell align="center">Org. Tid</TableCell>
                  <TableCell align="center">Siste Tid</TableCell>
                  <TableCell align="center">Org. Anm.</TableCell>
                  <TableCell align="center">Siste Anm.</TableCell>
                  <TableCell align="center">Detaljer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {changedShifts.map((item, index) => (
                  <TableRow key={index} hover>
                    <TableCell align="center"
                               sx={{ fontWeight: 600, border: "1px solid", borderColor: "divider" }}>{item.shifts.at(0)!.Workday.Date.split(" ")[0]}</TableCell>

                    <TableCell align="center">{item.shifts.at(0)!.ShiftCode!.Code}</TableCell>
                    <TableCell align="center"
                               sx={{ borderRight: "1px solid", borderColor: "divider" }} >{item.shifts.at(-1)!.ShiftCode!.Code}</TableCell>

                    <TableCell align="center">{item.shifts.at(0)!.Time}</TableCell>
                    <TableCell align="center"
                               sx={{ borderRight: "1px solid", borderColor: "divider" }}>{item.shifts.at(-1)!.Time}</TableCell>

                    <TableCell align="center">{item.shifts.at(0)!.ShiftRemark!.Remark}</TableCell>
                    <TableCell align="center"
                               sx={{ borderRight: "1px solid", borderColor: "divider" }}>{item.shifts.at(-1)!.ShiftRemark!.Remark}</TableCell>
                    <TableCell>DEV :: LINK</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>

      </Box>

      <h3>Features</h3>
      <ul>
        <li>Selectbox for endrede vakter</li>
        <li>Se historie for endrede vakter</li>
      </ul>
    </Box>
  );
};