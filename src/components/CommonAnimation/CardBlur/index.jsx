import React from "react"
import "./style.css"

const CardBlur = ({ data }) => {
  return (
    <div className="hero-section">
      <div className="card-grid">
        {data.map((data) => (
          <a key={data.id} className="card__box" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage: `url(${
                  data?.img
                    ? data?.img
                    : "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                })`
              }}></div>
            <div className="card__content">
              <p className="card__category">{data?.para ? data?.para : ""}</p>
              <h3 className="card__heading">{data?.heading ? data?.heading : ""}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
export default CardBlur
