import { Button, Grid } from "@mui/material";

export default function ProfileComponent(props : {renderInputFields(): JSX.Element[],saveChanges(): void,resetChanges(): void}){
    return(
        <Grid container item xs = {7} display={"flex"} justifyContent={"center"} alignItems={"center"} sx= {{backgroundColor:"white"}}>
        <Grid item sx={{height : "10vh"}} justifySelf={"self-start"}>
          <p>Good Morning! Adam</p>
          <p>Aug 28, 2023</p>
        </Grid>
        <Grid container item xs = {12} sx={{ height : "50vh"}} >
          {/* Render Input Fields */}
          {props.renderInputFields()}
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} sx={{height:"15vh"}}> 
          <Button variant="contained" sx={{backgroundColor:"#d32f2f"}} onClick={props.saveChanges} >Save Changes</Button>
          <Button variant="contained" sx={{backgroundColor:"#d32f2f"}} onClick={props.resetChanges}>Reset Changes</Button>
        </Grid>
      </Grid>
    )
}