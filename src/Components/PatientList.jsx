import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button } from "@mui/material";

const patients = [
  { id: 1, name: "Ahmed Maher", age: 21, dob: "May 30, 2003", status: "accepted", email: "olaa@gmail.com" },
  { id: 2, name: "Sara Samir", age: 22, dob: "May 30, 2003", status: "accepted", email: "olaa@gmail.com" },
  { id: 3, name: "Mariam Mohamed", age: 23, dob: "May 30, 2003", status: "pending", email: "olaa@gmail.com" },
  { id: 4, name: "Ali Ahmed", age: 21, dob: "May 30, 2003", status: "accepted", email: "olaa@gmail.com" },
  { id: 5, name: "Omar Ahmed", age: 21, dob: "May 30, 2003", status: "pending", email: "olaa@gmail.com" },
  { id: 6, name: "Gana Ahmed", age: 21, dob: "May 30, 2003", status: "pending", email: "olaa@gmail.com" },
  { id: 7, name: "Sara Mohamed", age: 21, dob: "May 30, 2003", status: "accepted", email: "olaa@gmail.com" },
  { id: 8, name: "Donai Mohamed", age: 21, dob: "May 30, 2003", status: "pending", email: "olaa@gmail.com" },
];

const PatientList = () => {
  return (
    <Box p={3} bgcolor="#f8e8e8" minHeight="100vh" width="100%">
        <div style={{display:"flex" , justifyContent:"space-between"}}>
        <Typography variant="h5" mb={2} fontWeight="bold">
        Patient List
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        + Add Doctors
      </Button>
        </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nu</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={patient.id}>
                <TableCell>{String(index + 1).padStart(2, "0")}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src="https://scontent.fcai19-6.fna.fbcdn.net/v/t39.30808-6/471595050_1902873636903689_4016961964032933083_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGneFMPcaGLRgw5ww6IzhLHeamq4p5xpR15qarinnGlHRvPxOC4Wn-psuh5Cyq2k57Pr7wkCcEh7BWpFd_qz2pz&_nc_ohc=lKS8u9P8zhMQ7kNvgE80qGp&_nc_oc=Adht6wb8V9R9STW8Exfy8mPGH15R3-nDBsUKbAcR0b1XsRrpmWDS5QExj1QJ3xBZJaQ&_nc_zt=23&_nc_ht=scontent.fcai19-6.fna&_nc_gid=A-fKTVYuCL4g06Terh_o3S1&oh=00_AYFe7pAx6m7rW812ZkaXGNrl-5veInOKoC4ddGT3iDYHmw&oe=67DA2789" sx={{ mr: 1 }} />
                    {patient.name}
                  </Box>
                </TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.dob}</TableCell>
                <TableCell>
                  <Box
                    px={1}
                    py={0.5}
                    bgcolor={patient.status === "accepted" ? "#a8f0c6" : "#f8e89c"}
                    borderRadius={1}
                    textAlign="center"
                    width={80}
                  >
                    {patient.status}
                  </Box>
                </TableCell>
                <TableCell>{patient.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PatientList;
