import { useState, useEffect } from "react"
import { useSliderCorousalModal } from "./slider.model"
export const useSliderController = () => {
  const [slideIndex, setSlideIndex] = useState(1)

  // autoPlay slider

  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const sliderData = useSliderCorousalModal()
  const dataSlider = sliderData.dataSlider
  const images = sliderData.images

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }
  const moveDot = (index) => {
    setSlideIndex(index)
  }

  // autoPlay slider

  let timeOut = null

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight()
      }, 2500)
  })

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }
  return {
    sliderData,
    images,
    slideIndex,
    dataSlider,
    nextSlide,
    prevSlide,
    moveDot,
    timeOut,
    slideRight,
    slideLeft,
    setAutoPlay,
    current,
    setCurrent
  }
}
