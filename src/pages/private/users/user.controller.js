import { useState, useEffect } from "react"

import { getUser } from "./user.model"

export const useUserController = () => {
  const [UserData, setUserData] = useState([])
  const [showLoader, setShowLoader] = useState(false)
  const rowsPerPageOptions = [5, 10, 20, 30]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])
  const [headers, setHeaders] = useState([])

  useEffect(() => {
    handleUserData()
  }, [page, rowsPerPage])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value))
    setPage(0)
  }

  const handleTableAction = () => {
    alert("Working")
    //You need to define here required custom functions.
  }

  const model = getUser()

  const handleUserData = async () => {
    setShowLoader(true)
    const response = await model.getUserData()
    if (response.success) {
      setUserData(response.data.resp)
      if (Array.isArray(response.data.resp)) {
        response?.data?.resp[0]
      }
      //To remove a key that is not required in the table

      var newObj = Object.assign({}, response?.data?.resp[0])
      delete newObj.address

      // change value of key to string whose value is in object.

      response?.data?.resp.forEach(function (item) {
        if (typeof item.company === "object") {
          item.company = item.company.name
        }
      })
      setHeaders(Object.keys(newObj))
    }

    setShowLoader(false)
  }

  return {
    handleUserData,
    UserData,
    showLoader,
    handleChangePage,
    handleTableAction,
    handleChangeRowsPerPage,
    headers,
    rowsPerPageOptions,
    rowsPerPage,
    page
  }
}
