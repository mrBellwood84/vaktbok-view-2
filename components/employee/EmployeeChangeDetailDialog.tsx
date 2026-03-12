import { Button, Dialog, DialogContent, DialogActions, DialogTitle, Table, TableHead, TableBody, TableRow, TableCell,
  Box, Typography, Divider,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { employeeViewSlice } from "@/store/slices/employeeViewSlice";
import { WEEKDAYS_NO } from "@/utils/constants/days";

export const EmployeeChangeDetailDialog = () => {
  const dispatch = useAppDispatch();
  const { setChangeShiftSelected } = employeeViewSlice.actions;
  const data = useAppSelector(state => state.employeeView.changedShiftSelected);

  const open = data !== undefined;

  const handleDialogClose = () => dispatch(setChangeShiftSelected(undefined));

  if (!open) return null;

  return (
    <Dialog open={open}  onClose={handleDialogClose} maxWidth>
      <DialogTitle>
        Endring: <i>{data!.shifts[0].Workday.Date.split(" ")[0]}</i>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "" }}>
          <Typography variant="subtitle2" color="textSecondary" component="div" sx={{ mx:1 }}>{WEEKDAYS_NO[data!.shifts[0].Workday.Day]}</Typography> |
          <Typography variant="subtitle2" color="textSecondary" component="div" sx={{ mx:1 }}>Uke {data!.shifts[0].Workday.Week}</Typography>
        </Box>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ cursor: "default", userSelect: "none" }}>
              <TableCell>#</TableCell>
              <TableCell align="center">Kode</TableCell>
              <TableCell align="center">Tid</TableCell>
              <TableCell align="center">Merknad</TableCell>
              <TableCell align="center">Datostempel</TableCell>
              <TableCell align="center">Filnavn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.shifts.map((x, i) => (
              <TableRow key={i} hover sx={{ cursor: "default", userSelect: "none" }} >
                <TableCell align="center" sx={{ fontWeight: 600 }}>{i+1}</TableCell>
                <TableCell align="center">{x.ShiftCode!.Code}</TableCell>
                <TableCell align="center">{x.Time}</TableCell>
                <TableCell align="center">{x.ShiftRemark!.Remark}</TableCell>
                <TableCell align="center" sx={{ fontStyle: "italic" }}>{x.CreatedAt.split(" ")[0]}</TableCell>
                <TableCell align="center">{x.FilePath.Path.split("/").at(-1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Lukk</Button>
      </DialogActions>
    </Dialog>
  );


};