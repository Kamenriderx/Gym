import { LiaCartPlusSolid } from "react-icons/lia";
import { BiMessageRounded } from "react-icons/bi";
import { FaWeightHanging } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineFastfood } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Option from "./Option";
import Logo from "../../assets/Image.jpeg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../context/Context";
const options = [
  {
    icon: LiaCartPlusSolid,
    text: "Carrito de compras",
    link: "/home"
  },
  {
    icon: FaWeightHanging,
    text: "Productos",
    link: "/home/products"
  },
  {
    icon: BiMessageRounded,
    text: "Mensajes",
    link: "/home/messages"

  },
  {
    icon: GiWeightLiftingUp,
    text: "Entrenadores",
    link: "/home/trainers"
  },
  {
    icon: MdOutlineFastfood,
    text: "Dietas",
    link: "/home/diets"
  },
  {
    icon: FaUserFriends,
    text: "Usuarios",
    link: "/home/users"
  },
];
export default function AsideBar(props) {
  
  const navigate =useNavigate();
  const {setGlobalState} = useContext(Context);
  const [selected, setSelected] = useState("Productos");
  const handleLogOut = ()=>{
    localStorage.removeItem('token');
    setGlobalState(prevGlobalState => ({ ...prevGlobalState, token:"",session:false }));
    window.location.reload();
    navigate("/");
  }

  return (
    <div className="flex justify-center w-full h-full bg-gray-900 ">
      <div className="w-11/12">
        <div className="box-border flex items-center overflow-hidden rounded-md h-1/6 w-72">
         <Link to="/home"><img src={Logo} className="object-contain" /></Link> 
        </div>
        <div className="h-5/6">
          <div className="flex flex-col w-full justify-evenly h-[55%] pt-11">
            {options.map((option) => (
              <Option
                key={option.text}
                {...option}
                link={option.link}
                setSelected={setSelected}
                selected={selected}
              ></Option>
            ))}
          </div>
          <div className="flex flex-col justify-between w-full h-[45%] ">
            <div>
              <div className="border border-t-0 bottom-2 w-[100%] mb-5"></div>
              <Option
                text="Configuración"
                link="/home/settings"
                icon={MdSettingsApplications}
                setSelected={setSelected}
                selected={selected}
                onClick={()=>navigate("/home/settings")}
              ></Option>
            </div>
            <div className="flex flex-col mb-7 justify-evenly h-1/2">
              <Option
                text="Ayuda"
                selected={selected}
                setSelected={setSelected}
                link="/home/help"
              ></Option>
              <Option
                text="Contactanos"
                selected={selected}
                setSelected={setSelected}
                link="/home/contact"
              ></Option>
              <Option
                text="Cerrar seción"
                selected={selected}
                link="/"
                icon={MdOutlineLogout}
                setSelected={setSelected}
                onClick={handleLogOut}
              ></Option>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-4/12 cursor-pointer h-full flex items-center rounded-full`}
        onClick={() => props.setHide(!props.hide)}
      >
        <div className={`relative  ${props.hide?"left-0":"left-3"}  bg-gray-900 rounded-full h-40 flex items-center `}>
          <MdKeyboardArrowDown
            className={`${
              props.hide ? "-rotate-90" : "rotate-90"
            } w-7 h-7 text-white`}
          />
        </div>
      </div>
    </div>
  );
}
