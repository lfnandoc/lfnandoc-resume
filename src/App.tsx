import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Sidebar from './Components/Sidebar';
import Skills from './Components/Skills';
import UnderConstruction from './Components/UnderConstruction';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <main className="w-screen h-screen flex flex-row bg-slate-700 text-white font-montserrat">        
        <Sidebar />
        <div className="pt-10 px-3 md:px-8 w-screen overflow-x-auto flex flex-col-reverse md:flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path ="/*" element={<UnderConstruction />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
