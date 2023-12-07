//import { Link } from "react-router-dom";

function Contact(){
    
    return(
        <div className="items-center   bg-white border justify-center " >
       <div className="flex items-center w-full pl-8 h-[10%] pt-8">
        <div>
    <p className="text-2xl font-semibold">Contáctanos</p>
    <p className="whitespace-pre-line">Deja un mensaje y en breve te contestaremos.</p>
         </div>
        </div>

        <div className="w-full h-4/6">
          <div className="w-full h-full p-8 ">
            <div className="h-1/4">
              <p className="font-semibold">Nombre de Usuario</p>
              <div className="w-1/2 p-1 border-2 rounded-md h-1/2 active:border-slate-400 bg-slate-200">
                <input
                  type="text"
                  className="w-9/12 outline-none bg-slate-200"
                  placeholder=""
                />
              </div>
            </div>

            <div className="h-1/4">
              <p className="font-semibold">Correo electronico</p>
              <div className="w-1/2 p-1 border-2 rounded-md h-1/2 active:border-slate-400 bg-slate-200">
                <input
                  type="text"
                  className="w-9/12 outline-none bg-slate-200"
                  placeholder=""
                />
                
              </div>
            </div>

            <div className="h-1/4 ">
              <p className="font-semibold">Mensaje</p>
              <div className="w-1/2 p-1 border-2 rounded-md h-1/2 active:border-slate-400 bg-slate-200">
                <input
                  type="text"
                  className="w-4/6 h-1/5 outline-none bg-slate-200"
                  placeholder=""
                />
              </div>
            </div>

            <div className=" h-3/4">
              <button className="mt-5 w-1/2 font-bold text-white bg-black rounded-md h-1/2">
                Contactanos
              </button>
            </div>
          </div>
        </div>
        
      </div>
    )
}

export default Contact;