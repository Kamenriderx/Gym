const ListImage = (props) =>{

    return(
        <div
            style = {{
                width:"350px",
                height:"250px",
                overflow:"hidden",
                borderRadius:"10px",
                marginBottom:"20px"
                
            }}
        >

            <img  style={{
                width:"100%",
                height:"100%",
                objectFit:"cover"
            }} src={props.url} alt="" />

        </div>

    );


}


export default ListImage;