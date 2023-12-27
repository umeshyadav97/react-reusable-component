import { useContext } from "react"
import { RbacContext } from ".."

const WithPermission = (props) => {
  //fetch all permissions
  const getModuleWisePermission = useContext(RbacContext)

  if (props?.module) {
    if (typeof props.permission === "object") {
      const havePermission = props.permission.some(
        (el) => getModuleWisePermission?.permission?.[props.module]?.[el] === true
      )
      const child = havePermission ? props.children || true : null
      return child
    }
    const child = getModuleWisePermission?.permission?.[props.module]?.[props.permission]
      ? props.children || true
      : null
    return child
  } else {
    return getModuleWisePermission?.permission
  }
}

export default WithPermission
