function Pagination(props){
    const pages = Array.from({ length: props.pagination.pages }, (_, index) => index + 1);
    console.log("otherpages:",pages)
    return (
        <div className="flex items-center justify-center w-full h-full">
            {
                pages.map(page=><div key ={page} onClick={()=>props.setPagination({...props.pagination,page:page-1})} className="text-white rounded-lg bg-slate-900 flex justify-center items-center mr-2  w-[30px] h-[30px] cursor-pointer hover:bg-slate-800 active:bg-slate-950">{page}</div>)
            }
            

        </div>
    )
}


export default Pagination;