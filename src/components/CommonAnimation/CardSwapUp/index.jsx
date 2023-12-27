import React from "react"
import "./style.css"
import { Link } from "react-router-dom"

const CardSwapUp = ({ data }) => {
  return (
    <div className="wrapper">
      {data.map((data) => (
        <div className="card" key={data.id}>
          <div className="fon"></div>
          <div className="text">
            <h2>{data?.heading ? data?.heading : ""}</h2>
            <p>{data?.para ? data?.para : ""}</p>
            <div className="triangle"></div>
          </div>
          <Link to={data?.link}>
            <div className="btn">View</div>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default CardSwapUp
