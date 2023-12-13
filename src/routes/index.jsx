import { BrowserRouter } from "react-router-dom";




import { AppRoutes } from "./app.routes";
import { AppAdmRoutes } from "./appAdm.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {


  const { user, admin } = useAuth()
  
  
  return (
    <BrowserRouter>


      { user ? <AppRoutes /> : admin ? <AppAdmRoutes /> :  <AuthRoutes />}


      
      
    </BrowserRouter>
  )
}