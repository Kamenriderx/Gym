export default function Option(props) {
  return (
    <div className="flex flex-row w-full text-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring">
      <div
        className={`w-2 ${
          props.selected == props.text ? "bg-white" : ""
        } rounded-e-md justify-self-start`}
      ></div>
      <div className="flex flex-row justify-center w-full">
        <div
          className="flex w-full p-1 rounded-md hover:bg-gray-700"
          onClick={() => props.setSelected(props.text)}
        >
          {props.icon ? (
            <div className="flex justify-center items-center h-full w-3/12 ">
              <props.icon className="h-3/4 w-2/5" />
            </div>
          ) : (
            <div className="flex justify-center w-3/12 "></div>
          )}
          <div className="w-9/12  ">
            <p className="inline ">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
