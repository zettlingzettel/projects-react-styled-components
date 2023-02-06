import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

// import RouterComponent from "./components/RouterComponent"

function App() {
  return (
    <Routes>
          <Route exact path ="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
