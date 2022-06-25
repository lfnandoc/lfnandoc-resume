import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Skills from './Components/Skills';

function App() {
  return (
    <BrowserRouter>
      <main className="w-screen h-screen flex flex-row bg-slate-700 text-white font-montserrat">
        <Sidebar />
        <div className="pt-10 px-5 w-screen overflow-x-auto flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Footer />
        </div>

      </main>
    </BrowserRouter>
  );
}

export default App;
