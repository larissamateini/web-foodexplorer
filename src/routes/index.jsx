import { USER_ROLE } from '../utils/roles';

import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user, isUserAuthenticated } =  useAuth();

  const userAuthenticated = isUserAuthenticated();

  const role = user?.role;

  const isAdmin = role === USER_ROLE.ADMIN;

  function AcessRoute(){
    switch(isAdmin){
      case true: 
        return <AdminRoutes isAdmin={isAdmin} />;
      case false: 
        return <UserRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {(user && userAuthenticated) ? 
      <AcessRoute isAdmin={isAdmin} /> : <AuthRoutes />}
    </BrowserRouter>
  );
}