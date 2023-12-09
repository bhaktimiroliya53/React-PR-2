import { Component } from "react";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            cnt: 0
        }
    }

    Increment = () => {
        this.setState({ cnt: this.state.cnt + 1 })
    }

    Decrement = () => {
        if (this.state.cnt > 0) {
            this.setState({ cnt: this.state.cnt - 1 })
        }
    }

    Reset = () => {
        this.setState({ cnt: this.state.cnt = 0 })
    }


    render() {

        return (
            <>
                <center>
                    <h1>Counter App </h1>

                    <button onClick={this.Increment} style={{padding : "5px 30px", fontSize : "28px" , borderRadius : "10px", border : "none", backgroundColor : "teal", color : "white"}}>+</button>
                    <button style={{display : "inline-block", margin : "10px", padding : "5px 30px", fontSize : "28px" , borderRadius : "10px", border : "none", backgroundColor : "lightblue"}}>{this.state.cnt}</button> 
                    <button onClick={this.Decrement} style={{padding : "5px 30px", fontSize : "28px", borderRadius : "10px", border : "none", backgroundColor : "teal", color : "white"}}>-</button>
                    <button onClick={this.Reset} style={{display : "block",margin : "20px 10px", padding : "5px 30px", fontSize : "26px" , borderRadius : "10px", border : "none", backgroundColor : "teal", color : "white"}}>reset</button>
                </center>
            </>
        )
    }
}

export default Counter;