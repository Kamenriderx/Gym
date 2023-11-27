import { useState } from "react";

const Goal = (props) => {
    const [hover,setHover] = useState(false);
  return (
    <li style={{
        display:"flex",
        
        backgroundColor:!hover?"#333":"#555",
        color:"white",
        width:"100%",
        alignItems:"center",
        justifyContent:"space-around",
        cursor:"pointer",
        marginBottom:"15px",
        paddingLeft:"20px"
    }}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        onClick={()=>props.setGoalList(props.options?props.options:[])}
    >
      <div style={{
        width:"400px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}>
            <p style={{
                fontWeight:"bolder"
            }}>{props.goalName}</p>
            <p>{props.info}</p>
      </div>

      <div style={{
        height:"200px",
        overflow:"hidden",
      }}>
        <img src={props.goalImage} alt="" />
      </div>
    </li>
  );
};

export default Goal;
