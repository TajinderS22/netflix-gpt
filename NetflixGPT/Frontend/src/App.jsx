import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ← use "react-router-dom"
import './App.css';
import MainContainer from './Components/MainContainer';
import Login from './Components/Login';
import { UserContextProvider } from './Utils/context/UserContext';
import { Provider } from 'react-redux';
import Appstore from './Utils/Appstore';
import Browse from './Components/Browse';
import TestBrowse from'./Components/TestBrowse';
import ProtectedBrowseRoute from './Utils/protected/ProtectBrowseRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: '/auth',
      element: <Login />  // ✅ fixed
    },
    {
      path: '/browse',
      element:
      <ProtectedBrowseRoute>
        <Browse />
      </ProtectedBrowseRoute>
      
    },{
      path:'/testbrowse',
      element:<TestBrowse/>      
    }
  ]);

  return (
    <div className='max-w-[2700px]'>
      <Provider store={Appstore}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
      </Provider>
    </div>
  );
}

export default App;
