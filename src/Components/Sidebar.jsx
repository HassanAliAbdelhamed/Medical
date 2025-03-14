import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Avatar, Paper, Button, TextField } from "@mui/material";
import { AdminPanelSettings, Apartment, Call, CreditCard, Feed, Groups, Hub, LiveHelp, LocalGroceryStore, LockPerson, OnlinePrediction, PersonPin, Security, SettingsSuggest } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box width="400px" bgcolor="#fff" padding={2} boxShadow={1} >
    <List  sx={{cursor:"pointer"}}>
        <ListItem button>
          <CreditCard sx={{padding:'5px'}}/>
          <ListItemText primary="Smart Garage System" />
        </ListItem>
        <ListItem button>
          <OnlinePrediction sx={{padding:'5px'}}/>
          <ListItemText primary="Fire Detection System" />
        </ListItem>
        <ListItem button>
          <LockPerson sx={{padding:'5px'}}/>
          <ListItemText primary="Security System" />
        </ListItem>
        <ListItem button>
          <PersonPin sx={{padding:'5px'}}/>
          <ListItemText primary="Patient Appointment System" />
        </ListItem>
        <ListItem button>
          <SettingsSuggest sx={{padding:'5px'}}/>
          <ListItemText primary="EHR System" />
        </ListItem>
        <ListItem button>
          <Hub sx={{padding:'5px'}}/>
          <ListItemText primary="Blockchain Unit" />
        </ListItem>
        <ListItem button>
          <LocalGroceryStore sx={{padding:'5px'}}/>
          <ListItemText primary="Pharmacy Management" />
        </ListItem>
        <ListItem button>
          <Apartment sx={{padding:'5px'}}/>
          <ListItemText primary="Hospital Management System" />
        </ListItem>
        <ListItem button>
          <Groups sx={{padding:'5px'}}/>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button>
          <Call sx={{padding:'5px'}}/>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button>
          <AdminPanelSettings sx={{padding:'5px'}}/>
          <ListItemText primary="Admin Panel" />
        </ListItem>
        <ListItem button>
          <LiveHelp sx={{padding:'5px'}}/>
          <ListItemText primary="FAQ Page" />
        </ListItem>
        <ListItem button>
          <Security sx={{padding:'5px'}}/>
          <ListItemText primary="Privacy Policy & Terms" />
        </ListItem>
        <ListItem button>
          <Feed sx={{padding:'5px'}}/>
          <ListItemText primary="News & Updates" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
