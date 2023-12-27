import React from "react"
import "./style.css"

const FlipCard = ({ data }) => {
  return (
    <div className="outer-box">
      <div className="scene">
        {data.map((data) => (
          <div className="flipcard" key={data.id}>
            <div className="flipcard__face flipcard__face--front">
              {data?.title ? data?.title : ""}
            </div>
            <div className="flipcard__face flipcard__face--back">
              {data?.title2 ? data?.title2 : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default FlipCard
