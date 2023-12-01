import { BrowserRouter, Route,Routes, useNavigate } from "react-router-dom";
import Auth from "../views/Auth/Auth";
import LandingPage from "../views/LandingPage/LandingPage";
import Products from "../views/Products/Products";
import Layout from "../Layout";



function Routess() {

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/"  element={<LandingPage/>} />
          <Route path="/login"  element={<Auth/>} />
          <Route path="/home/*"  element={<Layout/>} />

        </Routes>
    </BrowserRouter>
  );
}

export default Routess;