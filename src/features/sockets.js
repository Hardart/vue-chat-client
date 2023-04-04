import { io } from 'socket.io-client'
import config from '../config'

// export function connectToNS(ns) {
//   return io(config.baseURL + ns.endpoint)
// }

export const namespace = {
  io: null,
  room: null,
  connect(ns, id) {
    this.io = io(config.baseURL + ns.endpoint, { auth: { id } })
  },

  onDisconnect(store) {
    this.io.on('exit', users => {
      console.log('exit')
      // store.dispatch('setOnlineUsers', users)
    })
  }
}
