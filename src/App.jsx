import './css/tailwind.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Skills from './Components/Skills/Skills.jsx';

function App() {
  return (
    <div className="border-box m-auto h-[100vh] flex flex-row items-center justify-center bg-gradient-to-r from-gray-600 to-gray-200 gap-10">
      <div className="w-[20vw] border border-amber-100 border-solid rounded-2xl flex-col h-[70vh] bg-white"></div>

      <div className={'w-full border border-amber-100 border-solid rounded-2xl max-w-[50rem] h-[70vh] bg-white'}>
        <Navbar />

        <div>

            <Routes>
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
