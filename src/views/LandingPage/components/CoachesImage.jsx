const CoachesImage = (props) =>{

    return(
        <div style={{
            overflow:"hidden",
            borderRadius:"50%",
            width:"250px",
            height:"250px",

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