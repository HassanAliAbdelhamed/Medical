import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Avatar, Paper, Button, TextField } from "@mui/material";
import { Reply, Forward } from "@mui/icons-material";

const MailDashboard = () => {
  return (
      <>
      <Box width="30%" bgcolor="#fdd" padding={2} boxShadow={1}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Mail
                </Typography> 
        <Typography variant="h6">Inbox (128)</Typography>
        <TextField fullWidth placeholder="Search Message..." variant="outlined" size="small" margin="normal" />
        <List>
          {["olaa ahmed", "ali ahmed", "ali ahmed"].map((name, index) => (
            <ListItem button key={index}>
              <Avatar sx={{ marginRight: 1 }} />
              <ListItemText
                primary={name}
                secondary="Hi, sozan. Heycak, are you free now? Can you give me an appointment..."
              />
              <Typography variant="caption">12:48 PM</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      
      {/* Mail Content */}
      <Box width="50%" padding={2}>
        <Paper elevation={3} sx={{ padding: 2, bgcolor: "#fdd" }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">Miechal mahmoud</Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">22 Jan, 2025 6:58 AM</Typography>
          <Typography variant="body1" marginTop={2}>
            I am writing to inquire about [specific topic or request]. I would appreciate it if you could provide me with more details regarding [specific details]. Additionally, I would like to know if there are any available resources or further steps I should follow to proceed effectively. Thank you for your time and assistance. I look forward to your response.
          </Typography>
          <Box display="flex" justifyContent="flex-end" marginTop={2}>
            <Button startIcon={<Reply />} variant="contained" sx={{ marginRight: 1 }}>
              Reply
            </Button>
            <Button startIcon={<Forward />} variant="contained" color="secondary">
              Forward
            </Button>
          </Box>
        </Paper>
      </Box>
      </>
  );
};

export default MailDashboard;
