import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Root/Roots.jsx';
import Home from './Components/Home/Home.jsx';
import Books from './Components/Books/Books.jsx';
import Read from './Components/Read/Read.jsx';
import Jobs from './Components/Jobs/Jobs.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,

    children :[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/listedBooks',
        element: <Books></Books>
      },
      {
        path:'/PagesToRead',
        element: <Read></Read>
      },
      {
        path:'/Jobs',
        element: <Jobs></Jobs>
      },
      {
        path:'/Blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
