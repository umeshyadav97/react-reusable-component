import React from "react"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { useStyles } from "./styles"

function Accordions(props) {
  const { options, accordionDetails, handleChange } = props

  const styles = useStyles()
  return (
    <Box sx={styles.outer_box}>
      {options.map((data) => (
        <Box key={data?.id}>
          <Accordion
            expanded={accordionDetails.expanded === `panel${data.id}`}
            onChange={handleChange(`panel${data.id}`)}
            sx={styles.accord_wrapper}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: (t) => `${t.palette.background.default}` }} />
              }
              aria-controls={`panel${data.id}bh-content`}
              sx={styles.accord_collapse_box}
              id={`panel${data.id}bh-header`}>
              <Typography component={"span"} variant="h5" sx={styles.accord_collapse}>
                <div dangerouslySetInnerHTML={{ __html: data?.ques }}></div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordionDetailBox}>
              <Typography component={"span"} sx={styles.accord_expand}>
                <div dangerouslySetInnerHTML={{ __html: data?.ans }}></div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  )
}
export default Accordions
