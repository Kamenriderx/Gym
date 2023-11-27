function Option(props){
    return (
        <div className="w-full">
            <div className="w-full px-8 py-2 rounded-md cursor-pointer hover:bg-slate-200 hover:font-bold ">
                {props.text}
            </div>
        </div>
    );
}

export default Option;