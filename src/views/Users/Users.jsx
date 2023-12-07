import { HiOutlineSearch } from "react-icons/hi";
import Row from "./components/Row";
import Pagination from "../../components/Pagination";

function Users() {
  return (
    <div className="w-full h-full p-7">
      <div className="box-border w-full h-full p-8 bg-white shadow-lg rounded-3xl">
        <div className="flex pt-2 h-1/6">
          <div className="w-1/4 ">
            <div className="flex items-center justify-center w-3/4 px-3 text-white rounded-full cursor-pointer bg-slate-900 h-1/2 hover:bg-slate-800 active:bg-slate-950">
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
            <Row name={"Nombre"} state={"Estado"} category={"Categoria"} price={"Precio"} date={"Fecha"} id={"ID"} weight={"Peso"} header={true}/>
        </div>
        <div className=" h-1/6">
            <Pagination/>
        </div>
      </div>
    </div>
  );
}

export default Users;