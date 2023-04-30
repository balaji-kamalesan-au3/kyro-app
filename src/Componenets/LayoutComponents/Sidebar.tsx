import { Grid, List } from "@mui/material";
import ModuleListItem from "../Elements/ListItem";

 const SideBar = (props : {menuKeys : string[], menuData : any}) => {
    return (
        <Grid container item xs = {2} sx={{backgroundColor: "#F5F5F5"}} display={"block"}>  
        <Grid item display ={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
          <img alt ="Logo" src ="https://www.thinkpowersolutions.com/images/kyro/kyro-logo.png" style={{height : "50px", width:"125px"}} />
        </Grid>
        <Grid container item >
        <List>
          {props.menuKeys.map((item) => {
            // @ts-ignore
            const menuItem = props.menuData[item];
            return (
              <ModuleListItem
                key = {item}
                label={menuItem.label}
                icon={menuItem.icon}
              />
            )
          })}
        </List>
        </Grid>

      </Grid>
    )
}

export default SideBar