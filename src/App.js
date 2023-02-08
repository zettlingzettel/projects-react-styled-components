import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage';
import Project1 from './components/Project1';

// import RouterComponent from "./components/RouterComponent"

function App() {
  return (
    <Routes>
          <Route exact path ="/" element={<LandingPage />} />
          <Route exact path ="/project1" element={<Project1 />} />
    </Routes>
  );
}

export default App;
