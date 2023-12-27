import { useEffect, useState } from "react"

const useRoleListingController = (props) => {
  const { listData, tableHeading = false } = props
  const [defaultHeading, setDefaultHeading] = useState(["Roles", "Description", "Actions"])
  const [defaultlistData, setDefaultListData] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const handleActionBtnClick = (event, index) => {
    setAnchorEl(event.currentTarget)
    setOpen(index)
  }

  const handleActionBtnClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  useEffect(() => {
    if (tableHeading) {
      setDefaultHeading(tableHeading)
    }
  }, [])

  useEffect(() => {
    setDefaultListData(listData)
  }, [listData])

  return {
    defaultHeading,
    defaultlistData,
    open,
    anchorEl,
    handleActionBtnClick,
    handleActionBtnClose
  }
}

export default useRoleListingController
