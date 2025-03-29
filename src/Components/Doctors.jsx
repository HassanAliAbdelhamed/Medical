import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@mui/material";

const appointmentData = [
  { day: "Monday", newPatients: 5, followUp: 7 },
  { day: "Tuesday", newPatients: 6, followUp: 8 },
  { day: "Wednesday", newPatients: 7, followUp: 9 },
  { day: "Thursday", newPatients: 5, followUp: 7 },
  { day: "Friday", newPatients: 6, followUp: 8 },
];

const Doctors = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#F8EDEB", minHeight: "100vh" , width:"100%"}}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
        <Card style={{ width: "30%", padding: "20px", background: "#fff" }}>
          <CardContent>
            <img
              src="https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg"
              alt="Doctor"
              style={{ borderRadius: "50px", display: "block", margin: "auto" ,width:"120px" }}
            />
            <h2 style={{ textAlign: "center" }}>Doctor Sara Mahmoud</h2>
            <p style={{ textAlign: "center", color: "green" }}>Available</p>
            <h4>Specialist: Heart Surgery</h4>
            <h4>Contact:</h4>
            <p>📞 123456789</p>
            <p>📍 Luxor, Egypt</p>
            <p>📧 sara@gmail.com</p>
          </CardContent>
        </Card>
        <Card style={{ flexGrow: 1, padding: "20px", background: "#fff" }}>
          <CardContent>
            <h3>Appointment Stats</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={appointmentData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="newPatients" fill="#82ca9d" />
                <Bar dataKey="followUp" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginTop: "20px", background: "#fff", padding: "20px", borderRadius: "8px" }}>
        <h3>Review List</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          {[...Array(3)].map((_, index) => (
            <Card key={index} style={{ flex: 1, padding: "15px" }}>
              <CardContent>
                <h4>Logina ★★★★★</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
                  nulla et dictum interdum, nisi lorem egestas odio.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;