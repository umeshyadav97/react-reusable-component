import * as React from "react"
import Dialog from "@mui/material/Dialog"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import { Button, DialogContent, Grid, Typography } from "@mui/material"
import styles from "./payment.module.scss"
import { Box } from "@mui/system"
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const PaymentFailure = (props) => {
  const { open, handleClose, TotalAmount, errorMessage } = props

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative", background: "#FFFFFF" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon className={styles.closeIcon} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent className={styles.DialogCont}>
          <Grid container justifyContent="center" className={styles.gridHeight}>
            <Grid item alignItems="center" alignSelf="center">
              <Grid item>
                <Grid container justifyContent="center">
                  <DoDisturbAltIcon className={styles.doDisturbIcon} />
                </Grid>
              </Grid>
              <Grid item className={styles.gridWidth}>
                <Grid container justifyContent="center">
                  <Box mb={1}>
                    <Typography className={styles.ConfirmationText}>
                      {errorMessage ? errorMessage : "Payment Not Successful"}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent="center">
                  <Box mb={2}>
                    <Typography className={styles.payment_failure_text}>
                      Payment of ${TotalAmount} has not been successful
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item display="flex" justifyContent="center">
                <Button>
                  <Typography variant="h6">Go Back</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PaymentFailure
