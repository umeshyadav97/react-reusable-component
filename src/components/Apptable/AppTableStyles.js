import { useTheme } from "@mui/system"

export const useStyles = () => {
  const theme = useTheme()
  return {
    textColor: { color: theme?.palette?.text?.main },
    tableBackground: {
      backgroundColor: "#ebedf0"
    },
    filterText: {
      fontWeight: theme?.typography?.s1?.fontWeight,
      fontSize: theme?.typography?.s1?.fontSize,
      lineHeight: theme?.typography?.s1?.lineHeight
    },
    filterType: {
      fontWeight: theme?.typography?.p1?.fontWeight,
      fontSize: theme?.typography?.p1?.fontSize,
      lineHeight: theme?.typography?.p1?.lineHeight
    },
    drawer: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end"
    },

    PaperWrapper: {
      maxWidth: "100%"
    },
    searchStyle: {
      margin: "10px 10px 10px auto"
    }
  }
}
