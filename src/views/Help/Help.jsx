//import Option from "../Settigns/components/Option";

import { Link } from "react-router-dom";

function Help(){
    
    return(
    <div className="flex items-left justify-center w-full h-full">
<div  className="flex flex-col text-center  w-9/12 h-3/12 p-8 bg-white border ">
        <div className=" text-2xl font-semibold ">Centro de ayuda Master Gym</div>
        <div className="mt-4 mr-8  ml-16">En ésta página puedes encontrar información sobre cómo registrarte por Master Gym o por redes sociales, así como suscribirte al Programa de rutinas, restablecer la contraseña o acceder a los ajustes.</div>
        
        <Link to="/home/Contact" className=" justify-center w-5/12 h-1/12 p-8 font-bold text-white bg-black rounded-md">Contactanos</Link>
</div>

    </div>)
}

export default Help;

