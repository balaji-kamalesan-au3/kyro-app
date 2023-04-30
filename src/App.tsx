import { Grid} from "@mui/material";
import '@fontsource/roboto/500.css';
import { Email, Home, LocationCity, Message, Person, Phone, Settings} from '@mui/icons-material';
import { ModuleInputField } from "./Componenets/Elements/InputField";
import { useState } from "react";
import SideBar from "./Componenets/LayoutComponents/Sidebar";
import ProfileComponent from "./Componenets/LayoutComponents/ProfileComponent";
import UserProfileComponent from "./Componenets/LayoutComponents/UserProfileComponent";



function App() {

  //  Default User Data
  const [user, setUser] = useState({
    fname: "Adam",
    lname: "Smith",
    email: "a.smith@xyz.com",
    phone: "1234567890",
    location: "New York",
    dname: "Adam",
    mobile: "1234567890"
  })

  // Controlled Compoenent Form Data
  const [fname, setFname] = useState<string>(user.fname);
  const [lname, setLname] = useState<string>(user.lname);
  const [email, setEmail] = useState<string>(user.email);
  const [phone, setPhone] = useState<string>(user.phone);
  const [location, setLocation] = useState<string>(user.location);
  const [dname, setDname] = useState<string>(user.dname);
  const [mobile, setMobile] = useState<string>(user.mobile);
 
  // Composing Form Details and Rendering it Dynamically
  const formData = {
    fname: {
      label: "First Name",
      InputProps: <Person />,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setFname(event.target.value),
      value : fname
    },
    lname: {
      label: "Last Name",
      InputProps: <Person />,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setLname(event.target.value),
      value : lname
    },
    email: {
      label: "Email",
      InputProps: <Email />,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value),
      value : email
    },
    phone: {
      label: "Phone",
      InputProps: <Phone />,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value),
      value : phone
    },
    location: {
      label: "Location",
      InputProps: <LocationCity />,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setLocation(event.target.value),
      value : location
    },
    dname: {
      label: "Display Name",
      InputProps: <Person />,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setDname(event.target.value),
      value : dname
    },
    mobile: {
      label: "Mobile",
      InputProps: <Phone />,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => setMobile(event.target.value),
      value : mobile
    }

  }

  // Function to Reset Form Data
  function resetChanges () {
    setFname(user.fname);
    setLname(user.lname);
    setEmail(user.email);
    setPhone(user.phone);
    setLocation(user.location);
    setDname(user.dname);
    setMobile(user.mobile);
  }


  // Function to Save Form Data
  function saveChanges() {
    setUser({
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      location: location,
      dname: dname,
      mobile: mobile
    })
  }

  // Get Form Keys to Iterate
  const formKeys = Object.keys(formData);

  // Compose Sidebar menu data
  const menuData = {
    home : {
      label: "Home",
      icon: <Home />
    },
    profile : {
      label: "Profile",
      icon: <Person />
    },
    settings : {
      label: "Settings",
      icon: <Settings />
    },
    messages : {
      label: "Messages",
      icon: <Message />
    }

  }

  // Get Sidebar Menu Keys to Iterate
  const menuKeys = Object.keys(menuData);
  
  // Function to Render Input Fields Dynamically
  function renderInputFields() {

    return formKeys.map((item) => {
      // @ts-ignore
      const formItem  = formData[item];
      return (
        <Grid container item xs = {6}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <ModuleInputField  
            label={formItem.label}
            InputProps={
              formItem.InputProps
            }
            onChange={formItem.onChange}
            value={formItem.value}
            key={item}
          />
        </Grid>
      )
    })
    
  }


  return (
    // Container Grid 
   <Grid container fontFamily={'Roboto'} sx={{backgroundColor: "#F7F7F7", height : "100vh"}}>
       {/* Side Bar Component */}
      <SideBar menuData={menuData} menuKeys={menuKeys} />
      {/* Profile Component */}
      <ProfileComponent resetChanges={resetChanges} saveChanges={saveChanges} renderInputFields={renderInputFields} />
      {/* User Profile Component */}
      <UserProfileComponent dname={dname} email={email} location={location} mobile = {phone} />
   </Grid>
  );
}

export default App;



