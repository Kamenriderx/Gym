import Option from "./components/Option";

function Settings() {
  return (
    <div className="flex items-center justify-center w-full h-full p-8">
      <div className="flex flex-col items-center w-3/12 h-full p-8 bg-white border">
        <Option text="Mi cuenta" />
        <Option text="Apariencia" />
        <Option text="Privacidad y seguridad" />
        <Option text="Facturación" />
        <Option text="Notificaciones" />
        <Option text="Ajustes avanzados" />
      </div>


      <div className="flex flex-col w-9/12 h-full bg-white border">
        <div className="flex items-center w-full pl-8 h-[10%] pt-8 ">
          <p className="text-2xl font-semibold ">Mi cuenta</p>
        </div>
        <div className="w-full h-4/6">
          <div className="w-full h-full p-8 ">
            <div className="h-1/4">
              <p className="font-semibold">Nombre de Usuario</p>
              <div className="w-1/2 p-1 border-2 rounded-md h-1/2 active:border-slate-400 bg-slate-200">
                <input
                  type="text"
                  className="w-9/12 outline-none bg-slate-200"
                  placeholder="M.Arguijo"
                />
                <button className="w-3/12 h-full font-bold text-white bg-black rounded-md">
                  Editar
                </button>
              </div>
            </div>

            <div className="h-1/4">
              <p className="font-semibold">Correo electronico</p>
              <div className="w-1/2 p-1 border-2 rounded-md h-1/2 active:border-slate-400 bg-slate-200">
                <input
                  type="text"
                  className="w-9/12 outline-none bg-slate-200"
                  placeholder="maverick.arguijo@unah.hn"
                />
                <button className="w-3/12 h-full font-bold text-white bg-black rounded-md">
                  Editar
                </button>
              </div>
            </div>

            <div className="h-1/4 ">
              <p className="font-semibold">Rol</p>
              <div className="w-1/2 p-1 border-2 rounded-md h-1/2 active:border-slate-400 bg-slate-200">
                <input
                  type="text"
                  className="w-4/6 outline-none bg-slate-200"
                  placeholder="Administrador"
                />
              </div>
            </div>

            <div className=" h-1/4">
              <button className="w-1/2 font-bold text-white bg-black rounded-md h-1/2">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-8 h-1/6 ">
          <h3 className="font-semibold">Autenticacion en dos factores</h3>
          <p className="mt-3 text-sm text-slate-400">
            La autenticacion en dos factores agrega una capa adicional de
            seguridad a su cuenta, garantizando que solo usted tenga derechos
            para iniciar sesión
          </p>
          <button className="px-8 py-2 mt-3 border rounded-lg cursor-pointer">
            {" "}
            Habilitar 2FA
          </button>
        </div>
      </div>

    </div>
  );
}

export default Settings;
