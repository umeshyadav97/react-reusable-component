import React, { createContext } from "react"
import useRoleBaseAccessController from "./rbac.controller"

export const RbacContext = createContext()

const RBAC = (props) => {
  const rbac = useRoleBaseAccessController(props)

  return (
    <>
      <RbacContext.Provider value={rbac.permission}>{props.children}</RbacContext.Provider>
    </>
  )
}

export default RBAC
