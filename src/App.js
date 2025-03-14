import logo from './logo.svg';
import './App.css';
import MailDashboard from './Components/MailPage';
import { Box } from '@mui/material';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router';
import PatientList from './Components/PatientList';

function App() {
  return (
    <Box display="flex" height="100vh" bgcolor="#f8e8e8" padding={2}>
      <Sidebar/>
      <BrowserRouter>
          <Routes>
            <Route path="/mail" element={<MailDashboard/>} />
            <Route path="/patient-list" element={<PatientList/>} />

          </Routes>
        </BrowserRouter>
    </Box>
  );
}

export default App;
