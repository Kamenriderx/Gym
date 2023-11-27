    import { useState } from "react";
    import AsideBar from "./interface/AsideBar/AsideBar";
    import NavBar from "./interface/NavBar/NavBar";
    import ShopingCart from "./views/ShopingCart/ShopingCart";
    import Products from "./views/Products/Products";
    import Settings from "./views/Settigns/Settings";
    import { Route, Routes } from "react-router-dom";

    function Layout(){
        const [hide, setHide] = useState(false);
        return(
            <div className="flex flex-row w-screen h-screen">
                <div className={hide?"absolute -left-72 h-screen ":"  h-screen w-2/12"}>
                    <AsideBar setHide={setHide} hide = {hide}></AsideBar>
                </div>
                <div className={hide?"w-screen h-screen pl-7":"w-10/12 h-screen "}>
                    <div className="w-full h-1/6">
                        <NavBar></NavBar> 
                    </div>
                    <div className="w-full h-5/6 bg-slate-100">
                    <Routes >
                        <Route path="/" element={<ShopingCart></ShopingCart>}/>
                        <Route path="/products" element={<Products></Products>}/>
                        <Route path="/settings" element={<Settings></Settings>}/>
                            
                        
                    </Routes>
                </div>      
            </div>
        </div>
    );
}

export default Layout;