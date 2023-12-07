function Row(props) {
    return (
      <div className={`flex w-full ${props.header && "font-bold"} border-b-2 py-4 pl-2`}>
        <div className="w-1/4 text-left ">
          <p>{props.name}</p>
        </div>
        <div className="flex justify-around w-1/4">
          <div className="w-1/2 text-left">
            <p>{props.state}</p>
          </div>
          <div className="w-1/2 text-left">
            <p>{props.category}</p>
          </div>
        </div>
        <div className="flex justify-around w-1/4">
          <div className="w-1/2 text-left">
            <p>{props.price}</p>
          </div>
          <div className="w-1/2 text-left">
            <p>{props.date}</p>
          </div>
        </div>
        <div className="flex justify-around w-1/4">
          <div className="w-1/2 text-left">
            <p>{props.id}</p>
          </div>
          <div className="w-1/2 text-left">
            <p>{props.weight}</p>
          </div>
        </div>
      </div>
    );
  }
  
export default Row;