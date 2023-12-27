import { API, NetworkManager } from "./core"

export class ListingService {
  static async getListing(page, rowsPerPage) {
    const instance = NetworkManager(API.LISTING.LIST)
    return await instance.request({}, { seconds: 20, page: page, rowsPerPage: rowsPerPage })
  }

  static async getUser(payload) {
    const instance = NetworkManager(API.LISTING.USER)
    return await instance.request(payload, { seconds: 20 })
  }
}
