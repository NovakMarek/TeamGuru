import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Contexts from './contexts/Contexts.tsx';
import AppRoutes from './routes/Routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Contexts>
      <AppRoutes />
    </Contexts>
  </StrictMode>,
);
