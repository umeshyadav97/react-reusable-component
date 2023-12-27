const useAddRoleModal = () => {
  const saveDataToLocalStorage = (key, payload) => {
    const stringifyData = JSON.stringify(payload)
    localStorage.setItem(key, stringifyData)
  }

  return {
    saveDataToLocalStorage
  }
}

export default useAddRoleModal
