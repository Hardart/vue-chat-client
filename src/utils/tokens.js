const LOCAL_ACCESS_NAME = 'auth_accessToken'
import jwt_decode from 'jwt-decode'

export default class JWT {
  static setAccessTokens(access) {
    localStorage.setItem(LOCAL_ACCESS_NAME, access)
  }

  static cleanAccessToken() {
    localStorage.removeItem(LOCAL_ACCESS_NAME)
  }

  static getAccessToken() {
    return localStorage.getItem(LOCAL_ACCESS_NAME)
  }

  static decodeAccessToken() {
    return jwt_decode(this.getAccessToken())
  }
}
