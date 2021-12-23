import React, {useState} from 'react'

export const Left = () => {

    const styleSheet={
        backgroundColor: "blue",
        borderRadius:"15px",
        padding:"20px",
        border:"none"
    }

    const divStyleSheet = {
        borderRadius:"15px",
        backgroundColor:"purple",
        padding:"10px",
        width:"45%",
        marginTop: "30px",
        marginLeft: "25px"
    }
    const [display, setdisplay] = useState("");
    const [flag, setflag] = useState(false)
    const show = () =>{
        if(flag===false){
            setflag(true);
            setdisplay("I'm in Functional Component")
        }
        else{
            setflag(false);
            setdisplay("")
        }
        
    }
        return (
        <>  
        <div style={{marginRight:"30px"}}>
            <button onClick={show} className="leftbutton" style={styleSheet}>Style In Functional Component</button>
            {flag?<div className="content" style={divStyleSheet}>{display}</div>:null}
            </div> 
            
        
        </>
    )
    
    
}
