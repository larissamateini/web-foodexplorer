import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewDish } from "../pages/NewDish";
import { Dish } from "../pages/Dish";
import { EditDish } from "../pages/EditDish";

export function UserRoutes({ isAdmin }) {
  return (
    <Routes>
      <Route 
        path="/"
        element={ <Home isAdmin={isAdmin} /> }
      />

      <Route 
        path="/dish/:id" 
        element={<Dish isAdmin={isAdmin} />} 
      />

      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  );
}