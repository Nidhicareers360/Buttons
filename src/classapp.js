import React,{ Component } from "react";

class NewApp extends Component{
    constructor(){
        super();
        this.state = {color:"red"};
    }
    componentWillMount(){
        console.log('.......1component will mount')
        this.setState({message:'component will mount'})
    }

    componentDidMount(){
        console.log('.......1component did mount')
        this.setState({message:'component did mount'})
    }

    render(){
        return (
        <h1>{this.state.message}</h1>
        )
    }
}

export default NewApp;