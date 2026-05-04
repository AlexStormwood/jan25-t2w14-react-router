import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NavBar from './components/NavBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      {/* <App /> */}
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>

    
  </StrictMode>,
)
