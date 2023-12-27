import React from "react"
import { Divider } from "@mui/material"

import MultiSelectchip from "components/MultiSelectchip"

const names = [
  "Olivia H",
  "Henry cook",
  "jim sel",
  "selena v",
  "alexa",
  "acole",
  "MirWag",
  "Bradson",
  "Kate"
]
const initialSelected = ["alexa"]

function SubAdmins() {
  return (
    <div>
      <h2>Sub Admins</h2>

      <Divider />

      <MultiSelectchip names={names} initialSelected={initialSelected} />
    </div>
  )
}

export default SubAdmins
