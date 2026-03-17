"use client";

import { Box, Divider, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";

import AppPageLoading from "@/components/shared/AppPageLoading";
import { useLoadShifts } from "@/hooks/data/useLoadShifts";
import { useInitializeHomeView } from "@/hooks/ui/useInitializeHomeView";
import { useAppSelector } from "@/store/hooks";

const HomeOverview = () => {

  useLoadShifts();
  useInitializeHomeView();

  const shiftsLoading = useAppSelector(state => state.shifts.shiftsLoading);
  const viewInitializing = useAppSelector(state => state.homeView.loading);

  const { employeeCount, shiftCount, changesCount, noRemarkCount } = useAppSelector(state => state.homeView);

  const loading = shiftsLoading || viewInitializing;

  if (loading) return <AppPageLoading />;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "max-content" }}>
      <Typography variant="h6">Oversikt</Typography>
      <Divider />
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "600" }}>Antall Ansatte</TableCell>
            <TableCell align="right">{employeeCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "600" }}>Antall skift</TableCell>
            <TableCell align="right">{shiftCount}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell align="left" sx={{ fontWeight: "600" }}>Antall Endringer</TableCell>
              <TableCell align="right">{changesCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "600" }}>*Uten merknad</TableCell>
            <TableCell align="right">{noRemarkCount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default HomeOverview;