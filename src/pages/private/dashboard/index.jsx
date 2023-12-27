import { Divider, Grid, Typography } from "@mui/material"
import ComponentGuide from "components/ComponentGuide"
import PopUp from "components/PopUp"
import WithPermission from "components/RBAC/permissionHoc"
import React from "react"
import { useDashBoardController } from "./dashboard.controller"
import {
  convertLocalToUTC,
  convertToSpecificTimeZone,
  convertUTCToLocal
} from "helpers/time-conversion"
import CardDisplay from "components/CommonAnimation"
import GraphCard from "components/GraphData"
import { Yearly } from "components/GraphData/graphUtils"
import ComponentDisplay from "components/ComponentDisplay"
import { Button } from "components/Button"
import PrimaryHeader from "components/primaryHeader"
import ImagelazyLoad from "components/ImageLazyLoad/Index"

function Dashboard() {
  const dbc = useDashBoardController()
  React.useEffect(() => {
    console.log(convertUTCToLocal({ dateTimeStamp: new Date(), outputFormat: "hh:mm:ss" }))
    console.log(
      convertLocalToUTC({
        date: "20-05-2020 10:12:44 PM",
        inputDateFormat: "DD-MM-YYYY hh:mm:ss A"
      })
    )
    console.log(
      convertToSpecificTimeZone({
        timeZone: "PST",
        date: "20-05-2020 10:12:44 PM",
        inputDateFormat: "DD-MM-YYYY hh:mm:ss A"
      })
    )
  }, [])

  return (
    <div>
      <h2>Dashboard</h2>
      <Divider />
      <Grid container mt={2} ml={1} xs={12} spacing={2}>
        <Grid item>
          {" "}
          <Button
            variant="outlined"
            onClick={dbc.handleOpen}
            mid
            transParent
            minWidth="100px"
            minHeight="48px">
            <Typography variant="h5">Graph Pop-Up</Typography>
          </Button>
        </Grid>
      </Grid>

      <div style={{ position: "relative", margin: "20px 0px" }}>
        <PrimaryHeader title="Responsive Navbar With Hamburger" />
      </div>
      <PopUp
        open={dbc.open}
        handleClose={dbc.handleClose}
        handleSubmit={dbc.handleSubmit}
        maxWidth="sm"
        variant="Form"
        title="Warning"
        description="Are you sure ......?"
        isAction={true}
        ButtonVariant="contained"
        ButtonColor="secondary"
        proceedButton="Confirm"
        cancelButton="Cancel"
        component={
          <GraphCard
            header="Graph"
            label="xyz"
            Total={100}
            GraphData={dbc.graphData}
            graphLabels={Yearly}
            graphType={"Bar"}
          />
        }
      />

      <WithPermission module="Dashboard" permission="create">
        <ComponentGuide />
      </WithPermission>

      <CardDisplay />
      <Divider />
      <ComponentDisplay />
      <Divider />
      <Typography variant="h4">Image Lazy Loading........</Typography>
      <ImagelazyLoad image={dbc.ImageListings} />
    </div>
  )
}

export default Dashboard
