import React from "react"
import { Button } from "@mui/material"
import DialogContent from "@mui/material/DialogContent"

import { Box } from "@mui/system"
import { Dialog } from "@mui/material"
import warning from "./popup-warn.svg"
import styles from "./appTable.module.scss"

const ConfrimDialog = ({ title, open, handleClose, confirm }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ style: { borderRadius: 16 } }}
      disableBackdropClick
      maxWidth="sm"
      fullWidth>
      <DialogContent style={{ padding: 0 }}>
        <Box className={styles.imageBox}>
          <img src={warning} alt="." />
        </Box>
        <Box className={styles.content}>{title}</Box>
        <Box className={styles.footer}>
          <Button variant="outlined" onClick={handleClose} style={{ marginRight: 20 }}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={confirm}>
            Confirm
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ConfrimDialog
