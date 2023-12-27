import React from "react"
import "./style.css"

const StepCard = ({ data }) => {
  return (
    <div className="outer-container">
      <div className="container-box">
        {data.map((data) => (
          <div key={data.id} className="cards">
            <div className="boxes">
              <div className="contents-box">
                <h2>{data?.step ? data?.step : ""}</h2>
                <h3>{data?.title ? data?.title : ""}</h3>
                <p>{data?.para ? data?.para : ""}</p>
                <a href={data?.link}>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default StepCard
