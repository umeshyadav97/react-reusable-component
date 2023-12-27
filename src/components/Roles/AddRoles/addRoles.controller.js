import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"

const useAddRolesController = (props) => {
  const [initialState, setIntialState] = useState({
    role: "",
    description: "",
    checkAtleastOneViewSelected: 0
  })

  const navigation = useNavigate()

  useEffect(() => {
    createPermission(props.modules)
  }, [])

  const validation = Yup.object().shape({
    role: Yup.string().required("*Required").max(100, "Can not add more than 100 character")
  })

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
      permission[element] = crudStatus(false, true, false, false)
    })
    setIntialState({
      role: "",
      description: "",
      modules: props.modules,
      checkAtleastOneViewSelected: 0,
      permission
    })
  }

  const handleCheck = (formik, ele, key) => {
    if (key === keyarr[0]) {
      let count = formik.values?.checkAtleastOneViewSelected
      formik.values.permission[ele][key] ? (count += 1) : (count -= 1)
      formik.setFieldValue(`checkAtleastOneViewSelected`, count)
    }
    if (key === keyarr[0] && formik.values.permission[ele][key] && props.groupedPermission) {
      formik.setFieldValue(`permission[${ele}]`, crudStatus(false, false, false, false))
    }
    formik.setFieldValue(`permission[${ele}][${key}]`, !formik.values.permission[ele][key])
  }

  const handleSave = (val) => {
    props.handleSave(val)
  }

  const handleClose = () => {
    navigation(-1)
  }

  useEffect(() => {
    if (props.setDefaultData) {
      setIntialState((pre) => ({
        ...pre,
        ...props.setDefaultData
      }))
    }
  }, [props.setDefaultData])

  return {
    initialState,
    handleCheck,
    handleClose,
    handleSave,
    validation
  }
}

export default useAddRolesController
