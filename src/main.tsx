import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Shop from './Components/Shop';
import './Styles/styles.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { index: true, element: <Home />},
      {
    path: "shop",
    element: <Shop />
  }
    ]
  },
  {
    path: "home",
    element: <Home />
  },
  
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
