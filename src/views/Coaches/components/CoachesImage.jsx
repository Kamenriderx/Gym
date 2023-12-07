import { useNavigate } from "react-router-dom";

const CoachesImage = (props) =>{
    const navigate = useNavigate();
    const handleClick = (id) =>{
        if(props.navigate){
            navigate(`/home/coaches/profile?id=${id}`);
        }

    }
    return(
        <div onClick={()=>handleClick(props.id)} className={props.navigate?"relative hover:bottom-1":""} style={{
            overflow:"hidden",
            borderRadius:"10px",
            width:"250px",
            height:"300px",
            margin:"20px",
            cursor:"pointer"

        }}>

            <img style={{
                width:"100%",
                height:"100%",
                objectFit:"cover"
            }} src={props.url} alt="" />
        </div>


    );
}

export default CoachesImage;