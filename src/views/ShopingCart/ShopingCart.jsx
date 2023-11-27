import { LiaCartPlusSolid } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaWeightHanging } from "react-icons/fa";
import DoughnutGraphic from "./DoughnutGraphic";
import Logo from "../../assets/Image.jpeg";
import Product from "./Product";
function ShopingCart() {
  return (
    <div className="box-border flex w-full h-full p-8 pb-14 bg-slate-100">
      <div className="w-2/3 h-full px-3">
        <div className="box-border relative w-full p-8 bg-gray-900 shadow-lg h-2/5 rounded-3xl hover:shadow-2xl hover:bottom-1">
          <div className="flex h-1/2">
            <div className="flex items-center w-4/12">
              <div className="w-[50px] h-[50px] bg-slate-400 rounded-full mr-3 flex justify-center items-center">
                <LiaCartPlusSolid className="text-white w-[35px] h-[35px]" />
              </div>
              <div className="text-white ">
                <div className="flex items-end text-2xl font-semibold">
                  Total de{" "}
                </div>
                <div className="flex items-end text-slate-400">1 orden</div>
              </div>
            </div>
            <div className="flex items-start justify-end w-8/12">
              <div className=" w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-slate-400 cursor-pointer">
                <MdKeyboardArrowDown className="text-white w-[35px] h-[35px] -rotate-90 hover:text-black" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-3xl font-bold text-white">L.1,500</p>
          </div>
        </div>
        <div className="box-border relative w-full p-8 bg-white shadow-lg h-3/5 rounded-3xl mt-7 hover:shadow-2xl ">
          <div className="flex">
            <div className="w-1/2">
              <p className="text-2xl font-bold">Carrito de compras</p>
            </div>
            <div className="w-1/2 text-right h-1/6">
              <select className="p-3 font-bold border rounded-full outline-none cursor-pointer hover:shadow-md text-slate-500">
                <option className="cursor-pointer ">
                  Articulos por comprar
                </option>
                <option className="cursor-pointer ">
                  Articulos por comprar
                </option>
              </select>
            </div>
          </div>
          <div className="flex h-5/6">
            <Product image={Logo} price={"L.1,500.00"} productName={"SIMPLY ISOLATE HYDRO"}></Product>
            <Product image={Logo} price={"L.1,500.00"} productName={"SIMPLY ISOLATE HYDRO"}></Product>
            <Product image={Logo} price={"L.1,500.00"} productName={"SIMPLY ISOLATE HYDRO"}></Product>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full px-3 ">
        <div className="box-border relative w-full p-8 bg-white shadow-lg h-2/5 rounded-3xl hover:shadow-2xl hover:bottom-1">
          <div className="flex">
            <div className="flex items-center w-2/3">
              <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-2xl bg-slate-400">
                <FaWeightHanging className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">Total a pagar</p>
                <p className="text-slate-400">3 Elementos</p>
              </div>
            </div>
            <div className="flex justify-end w-1/3 ">
              <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-slate-400 cursor-pointer">
                <MdKeyboardArrowDown className="-rotate-90 w-[35px] h-[35px] hover:text-white" />
              </div>
            </div>
          </div>
          <div className="flex w-full mt-3 text-lg font-normal">
            <div className="w-1/2">
              <div>Proteina</div>
              <div>Plan mensual</div>
              <div>Entrenador</div>
            </div>
            <div className="w-1/2">
              <div>L. 1,500</div>
              <div>L. 500</div>
              <div>L. 500</div>
            </div>
          </div>

          <div>
            <div className="w-5/6 h-0 my-2 border border-t-0 border-gray-700"></div>
            <div className="flex w-full text-lg font-medium">
              <div className="w-1/2">Total </div>
              <div className="w-1/2 text-2xl">L. 2,500 </div>
            </div>
          </div>
        </div>
        <div className="box-border relative w-full p-8 bg-white shadow-lg h-3/5 rounded-3xl mt-7 hover:shadow-2xl hover:bottom-1">
          <div className="flex">
            <div className="w-11/12 text-2xl font-bold text-center">
              <p>Cuenta</p>
            </div>
            <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-slate-400 cursor-pointer">
              <MdKeyboardArrowDown className="-rotate-90 w-[35px] h-[35px] hover:text-white" />
            </div>
          </div>
          <DoughnutGraphic />
        </div>
      </div>
    </div>
  );
}

export default ShopingCart;
