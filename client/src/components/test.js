import React, { Component } from 'react';
//this is allowing any computer to talk to your server // big development risk 
import axios from 'axios';


 
class Test extends Component{
    componentDidMount() {
        this.getUserData();
        this.getArticle();
        this.sendData();
    }
    async sendData() {
        const dataToSend = {
            some: 'this is a message',
            junk: 'this is a spam link',
            malware: "im here to break your computer"
        };
        const response = await axios.post('./api/send-data', dataToSend)


        console.log('Send Data:', response);
    }


    async getArticle(){
        const response = await axios.get('/api/get-article');
        console.log('Artcle DR', response)
    }
    async getUserData(){
        const response =  await axios.get('/api/user-data'); 


        console.log('User data response:',response)
    }

    render(){
        return(
            <h1>This is a drill</h1>
        )
    };
}

export default Test;

