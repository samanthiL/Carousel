import "./App.css";

import React from 'react';
import axios from 'axios';
import Slider from "./components/Slider.js";


export default class App extends React.Component {

  state = {
    index: 0,
    persons:[],
    person:[]
  }

  componentDidMount = () =>{         
        axios.get('http://localhost:3600/details')
          .then(res => {
    
           console.log("ss",res.data);
    
           this.setState({
             person: res.data.food,
           })})
         }
        
render() {


  return (

<Slider slides={this.state.person} />

  )
}
}

