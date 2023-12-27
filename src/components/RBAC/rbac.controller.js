import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const useRoleBaseAccessController = (props) => {
  const { role = "ADMIN", modules = [] } = props

  const [permission, setPermission] = useState({})
  const navigation = useNavigate()

  //Change in keyarr strings will change the Header of permisssion checkbox
  const keyarr = ["view", "create", "update", "delete"]
  const crudStatus = (create, read, update, del) => ({
    [keyarr[0]]: read,
    [keyarr[1]]: create,
    [keyarr[2]]: update,
    [keyarr[3]]: del
  })

  const createPermission = (modules) => {
    const permission = {}
    modules.forEach((element) => {
      permission[element?.title] = crudStatus(true, true, true, true)
    })
    setPermission({
      role: "ADMIN",
      description: "This ia Admin",
      permission
    })
  }

  const getPagesWithPermission = (permission) => {
    const menuPath = modules.find(
      (obj) =>
        permission &&
        Object.keys(permission).indexOf(obj.title) !== -1 &&
        permission[obj.title]?.view
    )
    return menuPath?.route
  }

  useEffect(() => {
    navigation(getPagesWithPermission(permission.permission), { replace: true })
  }, [permission])

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem("RoleListingData"))
    if (role === "ADMIN") {
      createPermission(modules)
    } else {
      const grabRole = parsedData && parsedData.find((obj) => obj.role === role)
      setPermission(grabRole)
    }
  }, [role])

  return {
    permission
  }
}

export default useRoleBaseAccessController
