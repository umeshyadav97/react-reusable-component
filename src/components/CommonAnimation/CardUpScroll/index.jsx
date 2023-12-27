import React from "react"
import "./style.css"

const CardUpScroll = ({ data }) => {
  return (
    <div className="box-container">
      {data.map((data) => (
        <div key={data.id} className="box">
          <div className="imgBox">
            <img
              src={
                data?.img
                  ? data?.img
                  : "https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
              }
              alt=""
            />
          </div>
          <div className="content">
            <h2>
              {data?.name ? data?.name : ""}
              <br />
              <span>{data?.profession ? data?.profession : ""}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}
export default CardUpScroll
