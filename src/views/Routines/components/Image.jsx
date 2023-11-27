import { useState } from "react";

const Image = (props) => {

    const [hover,setHover] = useState(false);
  return (
    <li style={{width: "250px",margin:"20px"}} onClick={()=>props.setSelected(true)}>
      <div
        style={{
          backgroundColor: !hover?"#333":"#777",
          width: "250px",
          display: "flex",
          justifyContent: "center",
          height: "150px",
          cursor:"pointer"
        }}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
      >
        <img
          src={props.url}
          alt=""
          style={{
            objectFit: "cover",
            width: "50%",
            
          }}
        />
      </div>
      <footer style={{
        width:"100%",
        textAlign:"center",
        height:"30px",
        backgroundColor:"#444",
        color:"white",
        fontWeight:"bolder"
      }}>{props.info}</footer>
    </li>
  );
};

export default Image;
