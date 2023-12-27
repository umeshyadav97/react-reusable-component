import * as React from "react"

import FormControlLabel from "@mui/material/FormControlLabel"
import styles from "./notificationHandler.module.scss"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { IOSSwitch } from "./Switch"
import useNotificationController from "./notification.controller"

const NotificationHandler = ({ buttonData = [], header = [] }) => {
  const NC = useNotificationController()

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {header.length &&
                header.map((heading, index) => (
                  <TableCell className={styles.thtitle} key={index}>
                    {heading}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {buttonData.length &&
              buttonData.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell>{ele?.title}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      checked={NC.checked1.includes(index)}
                      onChange={(e) => NC.handleChecked1(e, index, ele?.handleButton1)}
                      control={<IOSSwitch sx={{ m: 1 }} />}
                    />
                  </TableCell>
                  <TableCell>
                    <FormControlLabel
                      checked={NC.checked2.includes(index)}
                      onChange={(e) => NC.handleChecked2(e, index, ele?.handleButton2)}
                      control={<IOSSwitch sx={{ m: 1 }} />}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default NotificationHandler
