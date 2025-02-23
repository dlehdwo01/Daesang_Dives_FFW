import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/common.css';
import { AppRoutes } from './routes.tsx';
import { UIConfirm } from './components/UI/organisms/UIConfirm/index.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <AppRoutes />
    <UIConfirm />
  </BrowserRouter>,
  // </StrictMode>,
);
