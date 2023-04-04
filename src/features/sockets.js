import { io } from 'socket.io-client'
import config from '../config'

// export function connectToNS(ns) {
//   return io(config.baseURL + ns.endpoint)
// }

export const namespace = {
  io: null,
  connect(ns) {
    this.io = io(config.baseURL + ns.endpoint)
  }
}
