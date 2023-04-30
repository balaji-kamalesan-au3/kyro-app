import { Grid } from "@mui/material";

export default function UserProfileComponent(props : {dname : string, email : string, mobile : string, location : string}){
    return (
        <Grid container item xs = {3} display={"flex"} justifyContent={"center"} sx={{backgroundColor:"#F5F5F5"}} >
        <Grid item display ={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <img alt="Avatar" src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png" style={{height: "150px", width: "150px", borderRadius: "30px 0 30px 0"}} />
          <p>{props.dname}</p>
          <p>{props.email}</p>
          <p>{props.mobile}</p>
          <p>{props.location}</p>
        </Grid>
       
      </Grid>
    )
}