import { useState } from "react";

const ListItem = (props) =>{
    const [isHovered, setIsHovered] = useState(false);
    const liStyles = {
        width: "200px",
        height: "200px",
        cursor: isHovered ? "pointer" : "default", 
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none", 
        transition: "transform 0.3s, box-shadow 0.3s", 
        marginRight:"20px"

    }

      const imgStyles = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      };

      return (
        <li
        style={liStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          width: "200px",
          height: "120px",
          overflow: "hidden",
          borderRadius: "10px",
          objectFit: "cover",
        }}>
          <img
            src={props.url}
            style={imgStyles}
            alt=""
          />
        </div>
        <h6>{props.title}</h6>
        <p>Programa gratuito</p>
      </li>

      );
}

export default ListItem;