//import Option from "../Settigns/components/Option";

import { Link } from "react-router-dom";

function Help() {
  return (
    <div className="flex justify-center w-full h-full items-left">
      <div className="flex flex-col w-9/12 p-8 text-center bg-white border h-3/12 ">
        <div className="text-2xl font-semibold ">
          Centro de ayuda Master Gym
        </div>
        <div className="mt-4 ml-16 mr-8">
          En ésta página puedes encontrar información sobre cómo registrarte por
          Master Gym o por redes sociales, así como suscribirte al Programa de
          rutinas, restablecer la contraseña o acceder a los ajustes.
        </div>

        <Link
          to="/home/Contact"
          className="justify-center w-5/12 p-8 font-bold text-white bg-black rounded-md h-1/12"
        >
          Contactanos
        </Link>
      </div>
    </div>
  );
}

export default Help;
