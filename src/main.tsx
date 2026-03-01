import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// import { Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './pages/auth/auth.tsx';
import Home from './pages/home/home.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/register', element: <Auth /> },
  { path: '/login', element: <Auth /> },
  { path: '/home', element: <Home /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
