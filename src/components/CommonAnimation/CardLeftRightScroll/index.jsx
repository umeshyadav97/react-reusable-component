import React from "react"
import "./style.css"

const CardLeftRightScroll = ({ data }) => {
  return (
    <div className="card-container">
      <div className="inner-box">
        <ul className="hover">
          {data.map((data) => (
            <li key={data.id}>
              <img
                className="image"
                src={data?.img ? data?.img : "https://source.unsplash.com/800x600/?flames,fire"}
                alt="fire"
              />
              <h2>{data?.title ? data?.title : ""}</h2>
              <span className="h1"></span>
              <span className="h2"></span>
              <span className="h3"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CardLeftRightScroll
