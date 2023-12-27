import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid
} from "@mui/material"
import React from "react"
import styles from "./popup.module.css"
import warnIcon from "./assets/icons/popup-warn.svg"
import errorIcon from "./assets/icons/popup-error.svg"
import deleteIcon from "./assets/icons/popup-delete.svg"
import successIcon from "./assets/icons/popup-success.svg"

const PopUp = (props) => {
  const {
    open,
    handleClose,
    handleSubmit,
    maxWidth,
    title,
    variant,
    description,
    isAction = true,
    ButtonVariant = "text",
    ButtonColor = "primary",
    proceedButton = "Confirm",
    cancelButton = "Cancel",
    component
  } = props
  return (
    <React.Fragment>
      <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogTitle className={styles.header}>{title}</DialogTitle>
        <DialogContent>
          {variant !== "Form" ? (
            <>
              <Grid item className={styles.ImgContainer}>
                <img
                  src={
                    variant === "Warning"
                      ? warnIcon
                      : variant === "Error"
                      ? errorIcon
                      : variant === "Delete"
                      ? deleteIcon
                      : successIcon
                  }
                  alt="error"
                  className={styles.image}
                />
              </Grid>
              <DialogContentText className={styles.alignTextC}>{description}</DialogContentText>
            </>
          ) : (
            <div className={styles.ImgContainer}>{component}</div>
          )}
        </DialogContent>
        {isAction && (
          <DialogActions>
            <Grid container xs={12} justifyContent="space-around">
              <Grid
                container
                xs={maxWidth === "xs" || maxWidth === "sm" ? 12 : 6}
                justifyContent="space-around"
                className={styles.actionBtnGrid}>
                <Button
                  variant={ButtonVariant}
                  color={ButtonColor}
                  onClick={handleClose}
                  className={styles.actionBtn}>
                  {cancelButton}
                </Button>
                <Button
                  variant={ButtonVariant}
                  color={ButtonColor}
                  onClick={handleSubmit}
                  className={styles.actionBtn}>
                  {proceedButton}
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  )
}

export default PopUp
