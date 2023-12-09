import { HiOutlineSearch } from "react-icons/hi";
import Row from "./components/Row";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import { httpRequests } from "../../utils/httpRequest";
import Modal from "./components/Modal";


function Users() {

  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page:0,
    pages:0
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    httpRequests()["get"]("http://backend-cqre.onrender.com/mastergym/register/getUsers",{headers:{authorization:localStorage.getItem("token")}}).then(res=>{
    if(res.data.data){
      const subArray = [];
      for(var i= 0; i<5 ; i++){
        subArray.push(res.data.data[i]);
      }
      setUsers(subArray);
      setAllUsers(res.data.data);
      setPagination({pages:Math.ceil(res.data.data.length/5),page:0});
    }  
    })

  }, []);

  useEffect(() => {
    console.log(allUsers)
    const subArray = [];
    for(var i=pagination.page*5; i<(pagination.page+1)*5 ; i++){
      if(allUsers[i]){
        subArray.push(allUsers[i]);
      }
    }
    setUsers(subArray);

  }, [pagination]);
  
  


  return (
    <div className="w-full h-full p-7">
      {showModal&&
        <Modal  setShowModal={setShowModal}></Modal>
      }
      <div className="box-border w-full h-full p-8 bg-white shadow-lg rounded-3xl">
        <div className="flex pt-2 h-1/6">
          <div className="w-1/4 ">
            <div  onClick={()=>setShowModal(true)} className="flex items-center justify-center w-3/4 px-3 text-white rounded-full cursor-pointer bg-slate-900 h-1/2 hover:bg-slate-800 active:bg-slate-950">
                <div className="mr-2 text-xl font-bold">+</div>
                <div className="text-xl font-bold">Añadir Usuario</div>
            </div>
          </div>
          <div className="w-2/4">
            <div className="flex justify-center w-full h-1/2">
              <button className="flex items-center justify-center w-16 bg-gray-100 rounded-l-full active:bg-gray-300">
                <HiOutlineSearch />
              </button>
              <input
                className="w-3/4 bg-gray-100 rounded-r-full outline-none"
                type="text"
                placeholder="Buscar"
              />
            </div>
          </div>
          <div className="flex justify-end w-1/4">
            <select className="p-3 font-bold border rounded-full outline-none cursor-pointer h-1/2 hover:shadow-md text-slate-500">
              <option className="cursor-pointer ">Ordenar por fecha</option>
            </select>
          </div>
        </div>
        <div className="h-4/6">
            <Row name={"Nombre"} state={"Correo"} category={"Contraseña"}  id={"ID"} actions={"actions"} header={true}/>
            
            {
              users.length>0 && 
              users.map((user,index)=>
              <Row key={index} name={user.nom_usuario} state={user.email} category={user.contrasena}  id={"ID"}  header={false}/>
              
              )
            }
        </div>
        <div className=" h-1/6">
            {
              users.length>0 && 
              <Pagination pagination={pagination} setPagination={setPagination}/>
            }
        </div>
      </div>
    </div>
  );
}

export default Users;




