import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import ErrorPage from './routes/error-page.jsx';
import About from './routes/about.jsx';
import Index from './routes/index.jsx';
import Musings from './routes/musings.jsx';
import Shop from './routes/shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/musings",
        element: <Musings />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/shop",
        element: <Shop />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
