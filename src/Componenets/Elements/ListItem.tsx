import { ListItem,ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function ModuleListItem(props: {label: string, icon: React.ReactNode}) {
    return (
      <ListItem disablePadding>
        <ListItemButton>  
          <ListItemIcon>
            {props.icon}
          </ListItemIcon>
          <ListItemText primary={props.label} />
        </ListItemButton>
      </ListItem>
    )
  }