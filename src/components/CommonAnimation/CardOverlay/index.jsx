import React from "react"
import "./style.css"

const CardOverlay = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((data) => (
        <div key={data.id} className="card-effect">
          <img
            src={
              data?.img
                ? data?.img
                : "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg"
            }
          />
          <div className="info">
            <h1>{data?.title ? data?.title : ""}</h1>
            <p>{data?.para ? data?.para : ""}</p>
            <button onClick={data.link}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default CardOverlay
