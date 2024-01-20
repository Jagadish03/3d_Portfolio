import Rreact from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

function App() {
  return (
    <main className='bg-slate-300/20 h-[100vh]'>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App