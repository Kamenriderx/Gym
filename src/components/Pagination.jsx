function Pagination(props){

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="text-white rounded-lg bg-slate-900 flex justify-center items-center mr-2  w-[30px] h-[30px] cursor-pointer hover:bg-slate-800 active:bg-slate-950">1</div>
            <div className="text-slate-900 rounded-lg bg-slate-100 flex justify-center items-center mr-2  w-[30px] h-[30px]">2</div>
            <div className="text-slate-900 rounded-lg bg-slate-100 flex justify-center items-center mr-2  w-[30px] h-[30px]">3</div>
            <div className="text-slate-900 rounded-lg bg-slate-100 flex justify-center items-center mr-2  w-[30px] h-[30px]">4</div>
        </div>
    )
}


export default Pagination;