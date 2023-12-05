import { MdOutlinePassword } from "react-icons/md";
import logo from "./../../../assets/logo.png";
import { useState } from "react";
import { httpRequests } from "../../../utils/httpRequest";
import { Link } from "react-router-dom";
function UpdatePassword() {
    const [passwords, setPasswords] = useState({
        passwordA: "",
        passwordB: "",
      });
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value.trim(),
    });
  };

  const handdleConnection = (e) => {
    e.preventDefault();
    httpRequests()["put"](`http://localhost:3000/mastergym/security/${token}`, {body:{
        USER_PASSWORD:passwords.passwordA
    }})
      .then((res) => {
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
            Por favor, ingrese su nueva contraseña
          </p>
        </div>
        <div className="w-4/5 h-[70%] bg-[#222]">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5  w-60 flex flex-col justify-center items-center bg-none h-[50px]"></div>
            <div className="w-full px-14">
              <div className="mb-[30px] flex  h-11 w-full ">
                <div className="flex items-center justify-center h-full w-[30px] bg-[#444]  text-white rounded-l-lg      ">
                  <MdOutlinePassword />
                </div>
                <input
                  placeholder="Contraseña"
                  name="passwordA"
                  value={passwords.passwordA}
                  onChange={(e) => handleChange(e)}
                  className="w-full h-full rounded-r-lg outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full px-14">
              <div className="mb-[30px] flex  h-11 w-full ">
                <div className="flex items-center justify-center h-full w-[30px] bg-[#444]  text-white rounded-l-lg      ">
                  <MdOutlinePassword />
                </div>
                <input
                  placeholder="Repita su Contraseña"
                  name="passwordB"
                  value={passwords.passwordB}
                  onChange={(e) => handleChange(e)}
                  className="w-full h-full rounded-r-lg outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-4/5 p-3">
              <button
                onClick={(e) => handdleConnection(e)}
                className="w-full text-white hover:text-black bg- px-8 py-2 rounded-md cursor-pointer bg-[#444] hover:bg-slate-200 font-bold"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdatePassword;
