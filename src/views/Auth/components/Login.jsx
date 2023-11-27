import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import logo from "./../../../assets/logo.png";


const LoginForm = () => {
  return (
    <form className="flex justify-center flex-col w-2/5 bg-[#222] pl-5">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-[250px] h-[250px]">
          <img className="object-cover w-full h-full" src={logo} />
        </div>
        <div className="w-4/5 h-[70%] bg-[#222]">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5  w-60 flex flex-col justify-center items-center bg-none h-[50px]"></div>
            <div className="w-1/2">
              <div className="mb-[30px] flex  h-11 w-full ">
                <div className="flex items-center justify-center h-full w-[30px]  text-white rounded-l-lg bg-[#444] ">
                  <AiOutlineUser />
                </div>
                <input
                  placeholder="Usuario"
                  className="w-full h-full rounded-r-lg outline-none"
                  required
                />
              </div>

              <div className="mb-[30px] flex  h-11 w-full ">
                <div className="flex items-center justify-center h-full w-[30px]  text-white rounded-l-lg bg-[#444] ">
                  <MdPassword />
                </div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="PV_PASS"
                  className="w-full h-full rounded-r-lg outline-none"
                  required
                />
              </div>

            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <a href="#" className="mb-[10px] mr-5 text-white hover:underline">
                Olvide mi contraseña
              </a>
              <a className="mb-[10px] mr-5 text-white hover:underline cursor-pointer">Iniciar sesion</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
