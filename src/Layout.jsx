import { useContext, useEffect, useState } from "react";
import AsideBar from "./interface/AsideBar/AsideBar";
import NavBar from "./interface/NavBar/NavBar";
import ShopingCart from "./views/ShopingCart/ShopingCart";
import Products from "./views/Products/Products";
import Settings from "./views/Settigns/Settings";
import { Route, Routes, useNavigate } from "react-router-dom";
import Context from "./context/Context";
import Help from "./views/Help/Help";
import Contact from "./views/Contact/Contact";
import Users from "./views/Users/Users";
import Routines from "./views/Routines/Routines";
import Coaches from "./views/Coaches/Coaches";
import CoachesProfile from "./views/Coaches/CoachesProfile";

const Layout =() => {
    
  const [hide, setHide] = useState(false);
  const { globalState } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!globalState.session) {
        navigate("/");
    }

  }, [])
  
  return (
    <div className="flex flex-row w-screen h-screen">
      <div
        className={hide ? "absolute -left-72 h-screen " : "  h-screen w-2/12"}
      >
        <AsideBar setHide={setHide} hide={hide}></AsideBar>
      </div>
      <div className={hide ? "w-screen h-screen pl-7" : "w-10/12 h-screen "}>
        <div className="w-full h-1/6">
          <NavBar></NavBar>
        </div>
        <div className="w-full overflow-hidden h-5/6 bg-slate-100">
          <Routes>
            <Route path="/" element={<ShopingCart></ShopingCart>} />
            <Route path="/products" element={<Products></Products>} />
            <Route path="/settings" element={<Settings></Settings>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/users" element={<Users></Users>} />
            <Route path="/routines" element={<Routines></Routines>} />
            <Route path="/coaches" element={<Coaches></Coaches>} />
            <Route path="/coaches/profile" element={<CoachesProfile></CoachesProfile>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
