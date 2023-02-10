import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage';

import BlogComponent from './components/BlogComponent.js'
import WishListComponent from './components/WishListComponent';

import Project1 from './components/projects/project-1/Project1';

// import Main from './project-1/Main.js';

// import RouterComponent from "./components/RouterComponent"

function App() {
  return (
    <Routes>
          <Route exact path ="/" element={<LandingPage />} />
          <Route exact path ="/project1" element={<Project1 />} />
          {/* <Route exact path ="/project1-app" element={<Main />} /> */}
          <Route exact path ="/blog" element={<BlogComponent />} />
          <Route exact path ="/wishlist" element={<WishListComponent />} />
    </Routes>
  );
}

export default App;
