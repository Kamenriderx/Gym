import { useState } from "react";
import Logo from "../../../assets/logo.png";
import { httpRequests } from "../../../utils/httpRequest";

function Modal(props) {
  const [productData, setProductData] = useState({
    cod_producto:"",
    nom_producto:"",
    des_producto:"",
    cod_tipo_producto:"",
    imagen_producto:"",
    precio_producto:"",
    ind_producto:"",
    enlace_producto:"",
    fecha_registro:"",
    estado:""
  })
  const handdleChange = (e) => {
    const { value, name } = e.target;
    setProductData({ ...productData, [name]: value });
  };


  /* const handleClick = () =>{
    httpRequests()["post"]("https://localhost:3000/mastergym/register/addUser",{headers:{authorization:localStorage.getItem("token")},body:{
    "codRol":1,
    "userName":ProductData.name,
    "password":ProductData.password,
    "email":"alejandro.reyes95@yahoo.com"
    }}).then(res=>{
      console.log(res);  
    })

  } */

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
              name="nom_producto"
              onChange={handdleChange}
              placeholder="Nombre producto"
              value={productData.nom_producto}
            />
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="text"
              name="des_producto"
              onChange={handdleChange}
              placeholder="Descripcion"
              value={productData.des_producto}
            />
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="number"
              name="cod_tipo_producto"
              onChange={handdleChange}
              placeholder="Tipo"
              value={productData.cod_tipo_producto}
            />
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="number"
              name="imagen_producto"
              onChange={handdleChange}
              placeholder="Imagen"
              value={productData.imagen_producto}
            />
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="number"
              name="precio_producto"
              onChange={handdleChange}
              placeholder="Precio"
              value={productData.precio_producto}
            />
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="number"
              name="ind_producto"
              onChange={handdleChange}
              placeholder="Índice producto"
              value={productData.ind_producto}
            />
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="text"
              name="enlace_producto"
              onChange={handdleChange}
              placeholder="Enlace producto"
              value={productData.enlace_producto}
            />
            <input
              className="w-full mb-4 outline-none rounded-lg h-[40px] text-black font-semibold pl-3"
              type="text"
              name="estado"
              onChange={handdleChange}
              placeholder="Estado"
              value={productData.estado}
            />
           
            <button className="w-full h-[40px] bg-black rounded-lg" >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;