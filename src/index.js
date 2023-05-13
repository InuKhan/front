import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import theme from "./theme";
import { ThemeProvider } from '@mui/material';
import Home from './Home';
import StudentLogin from './Student/login';
import Instructions from './Student/instructions';
import StudentDashboard from './Student/dashboard';
import StudentStatus from './Student/status';
import AdminLogin from './Admin/adminlogin';
import AdminDashboard from './Admin/adminDashboard';
import AdminIMCA from './Admin/adminIMCA';
import ApprovedDashboard from './Admin/approvedDashboard';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    <Router>
         <Route exact path="/" component={Home} />
         <Route exact path="/studentLogin" component={StudentLogin} />
         <Route exact path="/instructions" component={Instructions} />
         <Route exact path="/dashboard" component={StudentDashboard} />
         <Route exact path="/status" component={StudentStatus} />
         <Route exact path="/adminLogin" component={AdminLogin} />
         <Route exact path="/adminDashboard" component={AdminDashboard} />
         <Route exact path="/adminImca" component={AdminIMCA} />
         <Route exact path="/approvedDashboard" component={ApprovedDashboard} />
         
  </Router>
  </ThemeProvider>
);
