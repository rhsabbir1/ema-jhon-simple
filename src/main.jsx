import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import cardProductLoader from './Loader/CardProductLoader';
import ProcieedCheekout from './components/ProcieedCheekout/ProcieedCheekout';
import SingUp from './components/SingUp/SingUp';
import AuthProvider from './components/Provider/AuthProvider';
import Privaterouters from './routers/Privaterouters';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cardProductLoader
      },
      {
        path: 'proccedCheekout',
        element: <Privaterouters><ProcieedCheekout></ProcieedCheekout></Privaterouters>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'singUp',
        element: <SingUp></SingUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
