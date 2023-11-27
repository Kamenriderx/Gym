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
import { useState } from "react";
const options = [
  {
    icon: LiaCartPlusSolid,
    text: "Carrito de compras",
  },
  {
    icon: FaWeightHanging,
    text: "Productos",
  },
  {
    icon: BiMessageRounded,
    text: "Mensajes",
  },
  {
    icon: GiWeightLiftingUp,
    text: "Entrenadores",
  },
  {
    icon: MdOutlineFastfood,
    text: "Dietas",
  },
  {
    icon: FaUserFriends,
    text: "Usuarios",
  },
];
export default function AsideBar(props) {
  const [selected, setSelected] = useState("Productos");

  return (
    <div className="flex  justify-center w-full h-full bg-gray-900 ">
      <div className="w-11/12">
        <div className="flex items-center overflow-hidden rounded-md  box-border h-1/6 w-72">
          <img src={Logo} className="object-contain" />
        </div>
        <div className="h-5/6">
          <div className="flex flex-col w-full justify-evenly h-[55%] pt-11">
            {options.map((option) => (
              <Option
                key={option.text}
                {...option}
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
                icon={MdSettingsApplications}
                setSelected={setSelected}
                selected={selected}
              ></Option>
            </div>
            <div className="flex flex-col mb-7 justify-evenly h-1/2">
              <Option
                text="Ayuda"
                selected={selected}
                setSelected={setSelected}
              ></Option>
              <Option
                text="Contactanos"
                selected={selected}
                setSelected={setSelected}
              ></Option>
              <Option
                text="Cerrar seción"
                selected={selected}
                icon={MdOutlineLogout}
                setSelected={setSelected}
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
