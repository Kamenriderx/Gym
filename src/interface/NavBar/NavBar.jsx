import { HiOutlineSearch } from "react-icons/hi";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";

function NavBar() {
  const {globalState,setGlobalState} = useContext(Context);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      setGlobalState(prevGlobalState => ({ ...prevGlobalState, token,session:true }));
    }
    
  }, [])
  
  useEffect(() => {
    
    
  }, [globalState.session])

  console.log(globalState.session);
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="w-1/3 pl-12">
        <h1 className="mb-4 text-3xl font-semibold">Bienvenido</h1>
        <h3 className="text-lg text-slate-400">
          La mejor plataforma de gimnasio online!
        </h3>
      </div>
      <div className="flex justify-between w-2/3 h-1/3">
        {globalState.session && (
          <>
            <div className="flex justify-center w-1/2">
              <button className="flex items-center justify-center w-16 bg-gray-100 rounded-l-full active:bg-gray-300">
                <HiOutlineSearch />
              </button>
              <input
                className="w-3/4 bg-gray-100 rounded-r-full outline-none"
                type="text"
                placeholder="Buscar"
              />
            </div>

            <div className="flex w-1/2 ">
              <div className="flex items-center justify-center w-2/6 h-full">
                <div className="flex items-center justify-center w-10 h-10 mx-2 rounded-full cursor-pointer hover:bg-slate-100 active:bg-gray-300">
                  <LiaCartPlusSolid className="w-7 h-7 " />
                </div>
                <div className="flex items-center justify-center w-10 h-10 mx-2 rounded-full cursor-pointer hover:bg-slate-100 active:bg-gray-300">
                  <IoMdNotificationsOutline className="mx-2 w-7 h-7" />
                </div>
              </div>
              <div className="flex justify-end w-4/6 h-full mr-4">
                <div className="flex items-center justify-center w-[50px] h-[50px] mr-3 bg-gray-100 rounded-full">
                  <FaUserFriends></FaUserFriends>
                </div>
                <div className="flex items-center w-4/6">
                  <p className="font-semibold">Maverick Arguijo</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-300">
                    <MdKeyboardArrowDown className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!globalState.session && <div className="flex justify-end w-full pr-6" >
            <Link to="/login" className="block hover:font-semibold ">
                <p className=" hover:border-b-black"> 
                  Ingresar
                </p>
            </Link>
        </div>}
      </div>
    </div>
  );
}

export default NavBar;
