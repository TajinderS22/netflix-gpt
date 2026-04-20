import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ← use "react-router-dom"
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import { UserContextProvider } from "./Utils/context/UserContext";
import { Provider } from "react-redux";
import Appstore from "./Utils/Appstore";
import Browse from "./Components/Browse";
import TestBrowse from "./Components/TestBrowse";
import ProtectedBrowseRoute from "./Utils/protected/ProtectBrowseRoute";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <ProtectedBrowseRoute>
          <Browse />
        </ProtectedBrowseRoute>
      ),
    },
    {
      path: "/gptSearch",
      element: (
        <ProtectedBrowseRoute>
          <Browse />
        </ProtectedBrowseRoute>
      ),
    },
    {
      path: "/testbrowse",
      element: <TestBrowse />,
    },
  ]);

  return (
    <div className="max-w-[2700px]">
      <Provider store={Appstore}>
        <UserContextProvider>
          <ErrorBoundary>
            <RouterProvider router={router} />
          </ErrorBoundary>
        </UserContextProvider>
      </Provider>
    </div>
  );
}

export default App;
