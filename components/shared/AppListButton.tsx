import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { Employee } from "@/models/entities/Employee";

type AllowedData = Employee

interface Props {
  label: string
  data: AllowedData
  onClick: (data: AllowedData) => void;
}

export const AppListButton = ({ label, data, onClick }: Props) => {
  return (
    <ListItem disableGutters disablePadding>
      <ListItemButton onClick={() => onClick(data)}>
        <ListItemText primary={label}/>
      </ListItemButton>
    </ListItem>
  );
};