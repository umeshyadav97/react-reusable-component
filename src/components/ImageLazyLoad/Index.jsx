import { Grid } from "@mui/material"
import React from "react"
import {
  LazyLoadComponent,
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import styles from "./imageloader.module.scss"

const ImagelazyLoad = (props) => {
  return (
    <React.Fragment>
      <LazyLoadComponent>
        <Grid container spacing={2}>
          {props.image.map((item, index) => {
            return (
              <Grid key={index} item xs={6} sm={6} md={4} lg={3} xl={3}>
                <Grid container direction="column">
                  <div className={styles.containerCard}>
                    <LazyLoadImage
                      key={item.id}
                      alt={item.alt}
                      effect="blur"
                      src={item.image}
                      threshold={10}
                      width="100%"
                      height="100%"
                      className={styles.image_card}
                    />
                  </div>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </LazyLoadComponent>
    </React.Fragment>
  )
}

export default trackWindowScroll(ImagelazyLoad)
