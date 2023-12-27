import { styled } from "@mui/system"
import MuiButton from "@mui/material/Button"

export const Button = styled(MuiButton)(({ transParent, sizeFlag, minWidth, minHeight }) => ({
  color: transParent ? "#c5001a" : "white",
  background: transParent ? "white" : "#c5001a",
  borderRadius: 8,
  fontFamily: "Inter SemiBold",
  fontWeight: 600,
  fontSize: sizeFlag ? "18px" : "16px",
  minWidth: minWidth,
  minHeight: minHeight,
  "&:hover": {
    background: transParent ? "#F55393" : "#F55393",
    color: transParent ? "white" : "white",
    boxShadow: "0 0 15px 0 rgba(0,0,0,0.22)",
    border: "#F55393"
  }
}))
