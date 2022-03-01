import React,{Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'welcome visitor',
            subscribeB:'subscribe'
        }
    }

    changeMessage(){
        this.setState({
            message:'thank you for subscribing',
            subscribeB:'subscribed'

        })
    }




    render() {
        return(
            <div>
<h1>{this.state.message}</h1>
<button onClick={()=>this.changeMessage()}>{this.state.subscribeB}</button>
</div>


        )
    }
}

export default Message