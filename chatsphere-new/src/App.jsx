import React from 'react'
import { useEffect } from "react";
import Navbar from './components/Navbar'
import { Route, Routes , Navigate } from 'react-router-dom'
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from  "./pages/Login"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import { useAuthStore  } from './store/UseAuthStore'
import { useThemeStore } from './store/useThemeStore';
import {  RefreshCw } from "lucide-react";

export default function App() {
  const {authUser,checkAuth,isCheckingAuth,onlineUsers} = useAuthStore ();
  const { theme } = useThemeStore();
console.log("online" ,onlineUsers);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({authUser})
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        < RefreshCw className="size-10 animate-spin" />
      </div>
    );

  return (
    <div  data-theme={theme}>
      <Navbar/>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <Signup/> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
      </Routes>

    </div>
  )
}
