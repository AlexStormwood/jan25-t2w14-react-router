import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DefaultTemplate from './pages/_layouts/DefaultTemplate'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <Routes>
        <Route element={<DefaultTemplate />} >
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>

      </Routes>
    </BrowserRouter>

    
  </StrictMode>,
)
