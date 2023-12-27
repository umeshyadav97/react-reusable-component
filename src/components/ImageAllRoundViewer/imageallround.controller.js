import { getConfig } from "react-pannellum"
import { useImageAllRoundModel } from "./imageallround.model"

const config = {
  autoRotate: -2,
  autoLoad: true,
  maxHfov: 120, // Maximum horizontal field of view (zoom level)
  minHfov: 30 // Minimum horizontal field of view (zoom level)
}
// customise style
const viewerStyle = {
  width: "100%",
  height: "500px",
  border: "2px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}
export const useImageAllRoundViewer = () => {
  const click = () => {
    console.log(getConfig()) // getting all available config to control pannellum
  }

  const get360ImageViewData = useImageAllRoundModel()

  return {
    click,
    config,
    viewerStyle,
    get360ImageViewData
  }
}
