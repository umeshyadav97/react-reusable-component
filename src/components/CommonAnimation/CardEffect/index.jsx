import React from "react"
import "./style.css"

const CardEffect = ({ data }) => {
  return (
    <div className="container">
      {data.map((data) => (
        <a key={data.id} className="card1" href="#">
          <h3>{data?.title ? data?.title : ""}</h3>
          <p className="small">{data?.para ? data?.para : ""}</p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      ))}
      {data.map((data) => (
        <a key={data.id} className="card2" href="#">
          <h3>{data?.title ? data?.title : ""}</h3>
          <p className="small">{data?.para ? data?.para : ""}</p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      ))}
      {data.map((data) => (
        <a key={data.id} className="card3" href="#">
          <h3>{data?.title ? data?.title : ""}</h3>
          <p className="small">{data?.para ? data?.para : ""}</p>
          <div className="dimmer"></div>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      ))}
    </div>
  )
}
export default CardEffect
