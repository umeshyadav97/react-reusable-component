import { NetworkManager, API } from "network/core"

export const getUser = () => {
  const getUserData = async (values) => {
    const instance = NetworkManager(API.LISTING.LIST)
    return await instance.request(values)
  }

  return {
    getUserData
  }
}
