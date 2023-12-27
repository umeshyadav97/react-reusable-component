import React from "react"
import "./style.css"
import BtnSlider from "./BtnSlider"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const SliderCorousal = (props) => {
  const {
    dataSlider,
    prevSlide,
    nextSlide,
    moveDot,
    slideIndex,
    showDot,
    autoPlay,
    images,
    timeOut,
    slideLeft,
    slideRight,
    setAutoPlay,
    current,
    setCurrent,
    showArrow
  } = props
  return (
    <div>
      {autoPlay ? (
        <div
          className="carousel"
          onMouseEnter={() => {
            setAutoPlay(false)
            clearTimeout(timeOut)
          }}
          onMouseLeave={() => {
            setAutoPlay(true)
          }}>
          <div className="carousel_wrapper">
            {images.map((image) => {
              return (
                <div
                  key={image.id}
                  className={
                    image.id == current ? "carousel_card carousel_card-active" : "carousel_card"
                  }>
                  <img
                    className="card_image"
                    src={
                      image?.image
                        ? image?.image
                        : "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"
                    }
                    alt=""
                  />
                  <div className="card_overlay">
                    <div className="text_box">
                      <h2 className="card_title">{image?.title ? image?.title : ""}</h2>
                      <h4 className="card_para">{image?.para ? image?.para : ""}</h4>
                    </div>
                  </div>
                </div>
              )
            })}
            {showArrow ? (
              <>
                {" "}
                <div className="carousel_arrow_left" onClick={slideLeft}>
                  <ChevronLeftIcon className="icon_box" />
                </div>
                <div className="carousel_arrow_right" onClick={slideRight}>
                  <ChevronRightIcon className="icon_box" />
                </div>
              </>
            ) : (
              ""
            )}
            {showDot ? (
              <div className="carousel_pagination">
                {images.map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        index == current ? "pagination_dot pagination_dot-active" : "pagination_dot"
                      }
                      onClick={() => setCurrent(index)}></div>
                  )
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="container_slider">
          <div className="overlay_slider">
            {dataSlider.map((obj, index) => {
              return (
                <div
                  key={obj.id}
                  className={slideIndex === index + 1 ? "slide active_anim" : "slide"}>
                  <div className="text_container">
                    <div className="title_container">{obj?.title ? obj?.title : ""}</div>
                    <div className="para_container">{obj?.subTitle ? obj?.subTitle : ""}</div>
                  </div>
                  <img
                    src={
                      obj?.img
                        ? obj?.img
                        : "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"
                    }
                  />
                </div>
              )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            {showDot ? (
              <div className="container_dots">
                {Array.from({ length: 5 }).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default SliderCorousal
