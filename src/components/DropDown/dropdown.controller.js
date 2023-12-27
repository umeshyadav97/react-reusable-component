import { useEffect, useState } from "react"

export const useDropDownController = (props) => {
  const { selectedItem, options = [], handleChange = () => {}, multiSelect = false } = props
  const [defaultSearch, setDefaultSearch] = useState("")
  const [defaultOptions, setDefaultOptions] = useState(options)
  const [anchorEl, setAnchorE1] = useState(null)
  const open = Boolean(anchorEl)

  const handleDefaultSearch = (e) => {
    if (e.target.value) {
      const SearchedItems = options.filter((el) =>
        el.label.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setDefaultOptions(SearchedItems)
    } else {
      setDefaultOptions(options)
    }
    setDefaultSearch(e.target.value)
  }

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorE1(null)
  }

  const defaultHandleChange = (obj) => {
    if (selectedItem.indexOf(obj.value) === -1) {
      if (multiSelect) {
        handleChange([...selectedItem, obj.value])
      } else {
        handleChange([obj.value])
        setAnchorE1(null)
      }
    } else {
      const selectedValue = selectedItem.filter((el) => el !== obj.value)
      handleChange([...selectedValue])
    }
  }

  const handleClearSelectedItem = () => {
    handleChange([])
  }

  const renderValue = (selectedItem) => {
    const selectedOption = options.filter((el) => selectedItem.indexOf(el.value) > -1)
    return selectedOption.map((el) => el.label).join(",")
  }

  useEffect(() => {
    setDefaultOptions(options)
  }, [options])

  return {
    open,
    defaultOptions,
    renderValue,
    anchorEl,
    handleClick,
    handleClose,
    defaultHandleChange,
    defaultSearch,
    handleDefaultSearch,
    handleClearSelectedItem
  }
}
