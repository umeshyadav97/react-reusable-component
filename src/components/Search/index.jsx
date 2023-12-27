import TextField from "@mui/material/TextField"
import SearchIcon from "../../assets/icons/search.svg"
import { useSearchController } from "./search.controller"

const SearchInput = (props) => {
  const smc = useSearchController(props)

  return (
    <div>
      <div>
        <img src={SearchIcon} style={{ marginLeft: 10, marginRight: 10 }} alt="search" />
        <TextField
          style={{ margin: "10px 10px 10px auto" }}
          label="Search"
          value={smc.searchValue}
          onChange={(e) => smc.handleChange(e)}
          variant="outlined"
        />
      </div>
    </div>
  )
}

export default SearchInput
