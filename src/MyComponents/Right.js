import React, { Component } from 'react'

export default class Right extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display:"",
             flag:false
        }
    }

    
    show = () => {
        if(this.state.flag===true){
            this.setState({
                flag:false
            })
        }
        else{
            this.setState({
                flag:true,
                display:"I'm In Class Component !!!"
            })
        }
        
        
    }
    
    

    render() {
        const styleSheet={
            backgroundColor: "red",
            borderRadius:"15px",
            padding:"20px",
            border:"none"
        }

        const divStyleSheet={
            width:"45%",
            backgroundColor:"green",
            borderRadius:"15px",
            padding:"20px",
            marginTop: "30px",
            marginLeft:"30px"
        }

        

        return (
            <>
            <div>
                <button onClick={this.show} style={styleSheet}>Style In Class Component</button>
                {this.state.flag?<div className="content" style={divStyleSheet}>{this.state.display}</div>:null}
            </div>
            </>
        )
        }

        
    }


