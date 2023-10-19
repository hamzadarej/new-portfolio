import './css/tailwind.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Skills from './components/Skills/Skills.jsx';

function App() {
  return (
    <div className="border-box m-auto h-[100vh] flex flex-row items-center justify-center bg-gradient-to-r from-gray-600 to-gray-200 gap-10">
      <Contact />
      <div
        className={'w-full border border-amber-100 border-solid border-box rounded-2xl max-w-[50rem] h-[68vh] bg-white'}
      >
        <Navbar />
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
