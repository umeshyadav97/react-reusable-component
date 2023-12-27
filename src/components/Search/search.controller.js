import { useState, useCallback, useEffect } from "react"
import { debounce } from "lodash"

export const useSearchController = (props) => {
  const { onChange, handleSearchOnTabChange, activeTab } = props
  const [searchValue, setSearchValue] = useState("")
  const handler = useCallback(debounce(onChange, 500), [])

  useEffect(() => {
    if (handleSearchOnTabChange) handleSearchOnTabChange(closeBox)
  }, [activeTab])

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    e.persist()
    handler(e)
  }

  const closeBox = () => {
    setSearchValue("")
  }

  return {
    searchValue,
    handleChange,
    closeBox
  }
}
