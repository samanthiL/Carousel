import React, { useState, useEffect, useRef, useCallback } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

const getWidth = () => window.innerWidth

const Slider = props => {
  const { slides} = props
  
console.log("slider",slides[0].name);

  const firstSlide = slides[0].image
const secondSlide = slides[1].image
const lastSlide = slides[slides.length - 1]

const [state, setState] = useState({
  activeSlide: 0,
  translate: getWidth(),
  transition: 0.45,
  transitioning: false,
  _slides: [lastSlide, firstSlide, secondSlide]
})

const { activeSlide, translate, _slides, transitioning } = state

const sliderRef = useRef()

const nextSlide = () => {
  if(transitioning) return

  setState({
    ...state,
    translate: translate + getWidth(),
    activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
  })
}

const prevSlide = () => {
  if(transitioning) return

  setState({
    ...state,
    translate: 0,
    activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
  })
}


  return (
    <div  ref={sliderRef}>
    <SliderContent
      translate={
        translate}
      width={getWidth() * _slides.length}
    >
      {_slides.map((_slide, i) => (
        <Slide width={getWidth()} key={_slide + i} content={_slide} />
      ))}
    </SliderContent>
    
    <Arrow direction="left" handleClick={prevSlide} />
    <Arrow direction="right" handleClick={nextSlide} />

    <Dots slides={slides} activeSlide={activeSlide} />
  </div>
  )
}

export default Slider

