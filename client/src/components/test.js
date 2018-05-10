import React, { Component } from 'react';
//this is allowing any computer to talk to your server // big development risk 
import axios from 'axios';


 
class Test extends Component{
    componentDidMount() {
        this.getUserData();
    }

    async getUserData(){
        const response =  await axios.get('http://localhost:9000/user-data');


        console.log('User data response:',response)
    }

    render(){
        return(
            <h1>This is a drill</h1>
        )
    };
}

export default Test;

