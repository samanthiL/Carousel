import React, { useEffect,useState } from "react";
import { SlideImage, StyledSlider } from "./SlideImage";
import api from './Api.json';

import axios from 'axios';
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlide] = useState([]);
  const length = slides.length;

useEffect =() =>{
  // axios.get('http://localhost:3600/details')
  //     .then(res => {
  //      console.log("ss",res.data);
       setSlide(api.food);
console.log("dd",slides);
      // })
     }

console.log("lll",length);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (

    <StyledSlider>
      <button className="leftArrow" onClick={prevSlide} />
      <button className="rightArrow" onClick={nextSlide} />

      {slides.map((slide, index) => {
        return (

<div key={index}>

            {index === current && <SlideImage src={slide.image} alt="" />} 
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default Slider;



// export class Slider extends Component {


//   state = {
//     index: 1,
//     persons:[],
//     person:[]
//     }

//   render() {
//       return (
//           <>
//               <div>

//                           {/* {api.students.map((item, index) =>  */}
// {this.state.index = 1 ? 
// <p>defffffff</p>

// {api.students.map((item, index) =>


//     <div key={index}>
                                
//                         //           <p>{item.department}</p>
//                         //       </div>
//                         //   :(
//                         //     <div key={index}>
                                
//                         //     <p>{item.name}</p>
//                         // </div>
//                         //   )})}
// :
// <p>dferfrerf4r5t5t</p>                
//   }

                          
//               </div>
//           // </>
//       );
//   }
// }

// export default Slider;