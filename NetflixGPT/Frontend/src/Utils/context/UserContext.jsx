/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../UserSlice";
import { useSelector } from "react-redux";

const UserContext = createContext("");

export const UserContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  // Declare all state first (before useEffect)
  const [isLoginForm, setisLoginForm] = useState(false);
  const [isUserLogedIn, setisUserLogedIn] = useState(false);
  const [showGPTSearch, setshowGPTSearch] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const user = useSelector((state) => state.user);

  // Check localStorage on mount - ONLY ONCE
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch(addUser(parsedUser));
        setisUserLogedIn(true);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsInitialized(true);
  }, []);

  // Sync isUserLogedIn with Redux user state
  useEffect(() => {
    if (isInitialized) {
      if (user) {
        setisUserLogedIn(true);
        // Don't reset GPT search here - let user control it
      } else {
        setisUserLogedIn(false);
        setshowGPTSearch(false);
      }
    }
  }, [user, isInitialized]);

  const value = {
    isLoginForm,
    setisLoginForm,
    isUserLogedIn,
    setisUserLogedIn,
    showGPTSearch,
    setshowGPTSearch,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
