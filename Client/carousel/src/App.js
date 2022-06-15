
     import React from 'react';
     import axios from 'axios';
  
export default class App extends React.Component {
       state = {
         id: '',
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
     console.log("ff",this.state.person);
         return (
           
      <div>
{this.state.person.map(id => 
  <div>
<h1>{id.name}</h1>
<img src={id.image} className="App-logo" alt="logo" />
  </div>
)}
      </div>         
          
    
     
         )

       }
      }
