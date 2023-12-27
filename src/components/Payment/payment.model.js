import { NetworkManager, API } from "network/core"

export const paymentData = () => {
  // Api for make a payment
  const makePayment = async (values) => {
    const instance = NetworkManager(API.SETTING.STRIPE)
    return await instance.request(values)
  }

  return {
    makePayment
  }
}
