import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomeComponent from './components/Home'
import Dashboard from './components/Dashboard'
import AcademicMain from './components/dashboardComponents/AcademicMain'
import ProfileMain from './components/dashboardComponents/ProfileMain'
import CoursePlanningAssistant from './components/dashboardComponents/CoursePlanningAssistant'
import FacultyPage from './components/facultyPage'
import AdminPage from './components/admin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/faculty" element={<FacultyPage />}/>
            <Route path="/admin" element={<AdminPage />}/>
            <Route path="/academics" element={<AcademicMain />}/>
            <Route path="/profile" element={<ProfileMain />}/>
            <Route path="/cpa" element={<CoursePlanningAssistant />}/>
            <Route path="/profile" element={<ProfileMain />}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
