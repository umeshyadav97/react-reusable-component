import React from "react"
import { Box, Typography } from "@mui/material"
import { useSliderController } from "components/SliderCorousal/slider.controller"
import SingleCheckbox from "components/Checkbox"
import { useCheckboxController } from "components/Checkbox/checkbox.controller"
import Accordions from "components/Accordion"
import { useAccordionController } from "components/Accordion/accordion.controller"
import SliderCorousal from "components/SliderCorousal"
import Counter from "components/Counter"
import { useCounterController } from "components/Counter/counter.controller"
import ImageAllRoundViewer from "components/ImageAllRoundViewer"
import { useImageAllRoundViewer } from "components/ImageAllRoundViewer/imageallround.controller"

const ComponentDisplay = () => {
  const corousalData = useSliderController()
  const checkboxData = useCheckboxController()
  const accordionData = useAccordionController()
  const counterData = useCounterController()
  const image360DegreeData = useImageAllRoundViewer()

  return (
    <>
      <Box>
        <ImageAllRoundViewer
          click={image360DegreeData.click}
          config={image360DegreeData.config}
          viewerStyle={image360DegreeData.viewerStyle}
          imageSource={image360DegreeData.get360ImageViewData.allroundImageData}
        />
      </Box>
      <Box>
        <Counter
          counterOn={counterData.counterOn}
          setCounterOn={counterData.setCounterOn}
          countData={counterData.countData.counterData}
        />
        <Counter
          counterOn={counterData.counterOn}
          setCounterOn={counterData.setCounterOn}
          countData={counterData.countData.counterData}
          backgroundImage
          imageUrl="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg"
        />
      </Box>
      <Box>
        <Typography variant="h2">SLIDER COROUSAL</Typography>
        <SliderCorousal
          dataSlider={corousalData.dataSlider}
          prevSlide={corousalData.prevSlide}
          nextSlide={corousalData.nextSlide}
          moveDot={corousalData.moveDot}
          slideIndex={corousalData.slideIndex}
          showDot
        />
      </Box>
      <Box>
        <Typography variant="h2">AUTOPLAY SLIDER COROUSAL</Typography>
        <SliderCorousal
          images={corousalData.images}
          timeOut={corousalData.timeOut}
          slideRight={corousalData.slideRight}
          slideLeft={corousalData.slideLeft}
          setAutoPlay={corousalData.setAutoPlay}
          current={corousalData.current}
          setCurrent={corousalData.setCurrent}
          autoPlay
          showDot
          showArrow
        />
      </Box>
      <Box>
        <Typography variant="h2">ACCORDION</Typography>
        <Accordions
          options={accordionData.accordionDataSet.accordionData}
          accordionDetails={accordionData}
          handleChange={accordionData.handleChange}
        />
      </Box>
      <Box>
        <Typography variant="h2">SELECT ALL CHECKBOX</Typography>
        <SingleCheckbox
          options={checkboxData.modelData.items1}
          handleChange={checkboxData.handleChange1}
          isAllSelected={checkboxData.isAllSelected}
          multiSelect
          selected={checkboxData.selected}
          boxSize="large"
        />
      </Box>
      <Box>
        <Typography variant="h2">SINGLE CHECKBOX</Typography>
        <Box width={200}>
          <SingleCheckbox
            options={checkboxData.modelData.items}
            handleChange={checkboxData.handleChange}
            boxSize="large"
          />
        </Box>
      </Box>
    </>
  )
}

export default ComponentDisplay
