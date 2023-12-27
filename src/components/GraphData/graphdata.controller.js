import { useTheme } from "@mui/system"
export const graphController = (props) => {
  const theme = useTheme()
  const { Total, header, graphLabels, GraphData, graphType, label } = props

  const Data = {
    labels: graphLabels,
    datasets: [
      {
        label: label,
        fill: false,
        lineTension: 0.5,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        borderWidth: 3,
        data: GraphData
      }
    ]
  }

  return {
    Data,
    Total,
    graphType,
    header
  }
}
