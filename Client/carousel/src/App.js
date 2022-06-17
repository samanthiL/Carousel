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
             person: res.data
           })})
         }
        
render() {
  console.log("dsds",this.state.person);
  return (
<div> 
<p>weew</p> 
 <Slider slides={this.state.person} /> 
  </div>
  )
}
}

