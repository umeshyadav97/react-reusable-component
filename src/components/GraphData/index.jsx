import React from "react"
import styles from "./graphdata.module.scss"
import { Bar, Doughnut, Line } from "react-chartjs-2"
import { Grid, Paper, Typography } from "@mui/material"
import { Chart, registerables } from "chart.js"
import { graphController } from "./graphdata.controller"
Chart.register(...registerables)

const GraphCard = (props) => {
  const atc = graphController(props)

  return (
    <React.Fragment>
      <Paper className={styles.allcontainers}>
        <Grid container>
          <Grid container className={styles.headingBox}>
            <Grid item>
              <Typography variant="h5">{atc.header}</Typography>
            </Grid>
          </Grid>
          <Grid container className={styles.totalRevenue}>
            <Grid item>
              <Typography className={styles.totalRevenueText1}>{atc.Total}</Typography>
            </Grid>
          </Grid>
          <Grid className={styles.graph}>
            {atc.graphType === "Line" ? (
              <Line
                data={atc.Data}
                className={styles.detailGraph}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }}
              />
            ) : atc.graphType === "Donought" ? (
              <Doughnut data={atc.Data} />
            ) : (
              <Bar data={atc.Data} />
            )}
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

export default GraphCard
