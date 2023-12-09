import { useState } from "react";
import Logo from "../../../assets/logo.png";
import { httpRequests } from "../../../utils/httpRequest";

function Modal(props) {
  const [userData, setUserData] = useState({
    password:"",
    name:""
  })
  const handdleChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  const handleClick = () =>{
    httpRequests()["post"]("https://backend-cqre.onrender.com/mastergym/register/addUser",{headers:{authorization:localStorage.getItem("token")},body:{
    "codRol":1,
    "userName":userData.name,
    "password":userData.password,
    "email":"alejandro.reyes95@yahoo.com"
    }}).then(res=>{
      console.log(res);  
    })

  }

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-95 text-white flex items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center w-3/4 h-4/5 bg-slate-100">
        <div className="top-0 flex justify-end w-full p-3 pr-6 h-2/6">
          <button
            onClick={() => props.setShowModal(false)}
            className="w-[30px] h-[30px] bg-black rounded-lg"
          >
            x
          </button>
        </div>
        <div className="h-4/6">
          <div className="box-border flex items-center overflow-hidden rounded-md h-1/6 w-72 ">
            <img src={Logo} className="object-contain" />
          </div>

          <div className="flex flex-col items-center w-full h-5/6 mt-9 " >
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="text"
              name="name"
              onChange={handdleChange}
              placeholder="Nombre de usuario"
              value={userData.name}
            />
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="text"
              name="password"
              placeholder="Contraseña"
              onChange={handdleChange}
              value={userData.password}
            />
            <button className="w-full h-[40px] bg-black rounded-lg" onClick={()=>handleClick()}>
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
