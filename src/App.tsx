/*eslint-disable jsx-a11y/anchor-is-valid*/
//import { Button } from "./components/Button";
//import { auth, firebase } from './services/firebase';
//import { createContext, useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthContextProvider>
              <Home />
            </AuthContextProvider>
          }
        />

        <Route
          path="/rooms/new"
          element={
            <AuthContextProvider>
              <NewRoom />
            </AuthContextProvider>
          }
        />

        <Route
          path="/rooms/:id"
          element={
            <AuthContextProvider>
              <Room />
            </AuthContextProvider>
          }
        />

        <Route
          path="/admin/rooms/:id"
          element={
            <AuthContextProvider>
              <AdminRoom />
            </AuthContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
