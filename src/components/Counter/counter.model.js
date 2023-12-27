import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"

const counterData = [
  {
    id: 0,
    start: 0,
    end: 100,
    duration: 2,
    delay: 0,
    title: "Facebook",
    icon: <FacebookIcon />
  },
  {
    id: 1,
    start: 0,
    end: 120,
    duration: 2,
    delay: 0,
    title: "Instagram",
    icon: <InstagramIcon />
  },
  {
    id: 2,
    start: 0,
    end: 150,
    duration: 2,
    delay: 0,
    title: "Twitter",
    icon: <TwitterIcon />
  },
  {
    id: 3,
    start: 0,
    end: 180,
    duration: 2,
    delay: 0,
    title: "Youtube",
    icon: <YouTubeIcon />
  }
]

export const useCounterModel = () => {
  return {
    counterData
  }
}
