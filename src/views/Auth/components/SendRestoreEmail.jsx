import { CiMail } from "react-icons/ci";
import logo from "./../../../assets/logo.png";
import { useState } from "react";
import { httpRequests } from "../../../utils/httpRequest";
import { Link } from "react-router-dom";
function SendRestoreEmail() {
  const [email, setEmail] = useState("");

  const handdleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    console.log(email);
  };

  const handdleConnection = (e) => {
    e.preventDefault();
    httpRequests()["post"]("http://backend-cqre.onrender.com/mastergym/security/sendRestoreEmail", {
        body: { CORREO:email },
      })
      .then((res) => {
        setEmail("");
        console.log(res.data.message);
      });
  };

  return (
    <form className="flex justify-center flex-col w-2/5 bg-[#222] pl-5">
      <div className="flex flex-col items-center justify-center w-full">
        <Link to="/home" className="w-[250px] h-[250px]">
          <img className="object-cover w-full h-full" src={logo} />
        </Link>
        <div className="w-4/5">
          <p className="font-bold text-center text-white">
            Por favor, ingrese su correo electronico para realizar su cambio de
            contraseña
          </p>
        </div>
        <div className="w-4/5 h-[70%] bg-[#222]">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5  w-60 flex flex-col justify-center items-center bg-none h-[50px]"></div>
            <div className="w-full px-14">
              <div className="mb-[30px] flex  h-11 w-full ">
                <div className="flex items-center justify-center h-full w-[30px] bg-[#444]  text-white rounded-l-lg      ">
                  <CiMail />
                </div>
                <input
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => handdleChange(e)}
                  className="w-full h-full rounded-r-lg outline-none"
                  required
                />
              </div>    
            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <button onClick={(e)=>handdleConnection(e)} className="w-full text-white hover:text-black bg- px-8 py-2 rounded-md cursor-pointer bg-[#444] hover:bg-slate-200 font-bold">
                Solicitar cambio de contraseña
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SendRestoreEmail;
