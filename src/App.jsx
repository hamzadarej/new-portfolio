import './css/tailwind.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Skills from './components/Skills/Skills.jsx';
import NotFoundPage from './components/NotFoundPage/index.jsx';

function App() {
  return (
    <div className="border-box sm:flex-row m-auto h-auto sm:h-[100vh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-600 to-gray-200 gap-10">
      <Contact />
      <div className="w-full border border-amber-100 border-solid border-box rounded-2xl sm:max-w-[50rem] sm:px-0 px-3 max-w-[20rem] sm:h-[68vh] bg-white">
        <Navbar />
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="" element={<Navigate to="/AboutMe" />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
