import { MdModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
function Row(props) {

  


  return (
    <div
      className={`flex w-full ${
        props.header && "font-bold"
      } border-b-2 py-4 pl-2`}
    >
      <div className="w-1/4 text-left ">
        <p>{props.name}</p>
      </div>
      <div className="w-1/4 text-left">
        <p>{props.state}</p>
      </div>
      <div className="w-1/4 text-left">
        <p>{props.category}</p>
      </div>
      {props.header?
        <div className="w-1/4 text-left">
          <p>Acciones</p>
        </div>:
        <div className="flex ">
          <button className="w-[30px] h-[30px] rounded-full border flex justify-center mr-2 items-center active:bg-slate-900 active:text-white">
            <MdModeEdit></MdModeEdit>
          </button>
          <button className="w-[30px] h-[30px] rounded-full border flex justify-center items-center active:bg-slate-900 active:text-white">
            <FaEye ></FaEye>

          </button>
          
        </div>
      }


    </div>
  );
}

export default Row;
