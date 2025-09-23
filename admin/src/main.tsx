import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import AppRouter from './router/AppRouter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>,
  </StrictMode>,
);
