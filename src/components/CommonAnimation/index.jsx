import React from "react"
import FlipCard from "./FlipCard"
import CardSwapUp from "./CardSwapUp"
import CardLeftRightScroll from "./CardLeftRightScroll"
import CardEffect from "./CardEffect"
import CardOverlay from "./CardOverlay"
import CardUpScroll from "./CardUpScroll"
import { useCommonAnimationModel } from "./commonAnimation.model"
import StepCard from "./StepCard"
import CardBlur from "./CardBlur"

const cardData = useCommonAnimationModel()

const CardDisplay = () => {
  return (
    <div>
      <FlipCard data={cardData.flipdata} />
      <CardSwapUp data={cardData.cardSwapUpData} />
      <CardLeftRightScroll data={cardData.cardLeftRightScrollData} />
      <CardEffect data={cardData.cardEffectdData} />
      <CardOverlay data={cardData.cardOverlayData} />
      <CardUpScroll data={cardData.cardUpScrolldata} />
      <StepCard data={cardData.stepCardData} />
      <CardBlur data={cardData.cardBlurData} />
    </div>
  )
}
export default CardDisplay
