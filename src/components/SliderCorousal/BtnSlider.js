import React from "react"
import "./style.css"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn_slide next" : "btn_slide prev"}>
      {direction === "next" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </button>
  )
}
export default BtnSlider
