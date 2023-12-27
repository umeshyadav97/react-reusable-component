import React from "react"
import ReactPannellum from "react-pannellum"
import styles from "./ImageAllRound.module.css"
const ImageAllRoundViewer = (props) => {
  const { click, config, viewerStyle, imageSource } = props

  return (
    <div>
      <div className={styles.imageAllroundBox}>
        {imageSource.map((data) => (
          <ReactPannellum
            key={data.id}
            id={`image-${data.id}`}
            sceneId={`scene-${data.id}`}
            style={viewerStyle}
            imageSource={data.img}
            config={config}
          />
        ))}
      </div>
      <div onClick={click}>Click me</div>
    </div>
  )
}
export default ImageAllRoundViewer
