import { useState } from "react";

function Product(props) {
  const [hide, setHide] = useState(true);
  return (
    <div
      className="border h-4/4 w-[200px] overflow-hidden hover:shadow-lg relative hover:bottom-1 rounded-md cursor-pointer  mr-6 "
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
    >
      <div className=" flex items-center overflow-hidden  h-full w-[198px] ">
        <img src={props.image} className="object-contain" />
      </div>
      <div
        className={`relative w-full h-full text-white bg-slate-900 ${
          !hide ? "bottom-full" : "-bottom-20"
        } flex justify-center items-center `}
      >
        <div>
          <p className="mt-1 font-bold">{props.productName}</p>
          <p className="text-center">{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
