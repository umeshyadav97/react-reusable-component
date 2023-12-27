import React from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import styles from "./Counter.module.css"
import { Typography } from "@mui/material"

const Counter = (props) => {
  const { backgroundImage, imageUrl, counterOn, setCounterOn, countData } = props

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      {backgroundImage ? (
        <div className={styles.imgContainer} style={{ "--bg-image": `url(${imageUrl})` }}>
          {countData.map((data) => (
            <h1 style={{ textAlign: "center" }} key={data.id}>
              {counterOn && (
                <div>
                  <CountUp
                    start={data?.start}
                    end={data?.end}
                    duration={data?.duration}
                    delay={data?.delay}
                  />
                  <Typography variant="h5">{data?.title}</Typography>
                </div>
              )}
            </h1>
          ))}
        </div>
      ) : (
        <div className={styles.counterBox}>
          {countData.map((data) => (
            <h1 style={{ textAlign: "center" }} key={data.id}>
              {counterOn && (
                <div className={styles.counterInnerBox}>
                  <div>{data?.icon ? data?.icon : ""}</div>
                  <CountUp
                    start={data?.start}
                    end={data?.end}
                    duration={data?.duration}
                    delay={data?.delay}
                  />
                  <Typography variant="h5">{data?.title}</Typography>
                </div>
              )}
            </h1>
          ))}
        </div>
      )}
    </ScrollTrigger>
  )
}
export default Counter
