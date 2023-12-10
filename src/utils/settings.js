class Settings {
  constructor(access_name = String()) {
    this.ACCESS_NAME = access_name
    this.appSettings = {}
  }

  get #getSettings() {
    if (!localStorage.getItem(this.ACCESS_NAME)) this.#setDefaultSettings()
    return localStorage.getItem(this.ACCESS_NAME)
  }

  #setSettings(object) {
    localStorage.setItem(this.ACCESS_NAME, this.#stringifySettings(object))
  }

  #parseSettings(str) {
    return JSON.parse(str)
  }

  #stringifySettings(str) {
    return JSON.stringify(str)
  }

  #setDefaultSettings() {
    this.appSettings = {
      userPanel: false,
      roomID: 0
    }

    localStorage.setItem(this.ACCESS_NAME, this.#stringifySettings(this.appSettings))
  }

  get usersPanel() {
    const { userPanel } = this.#parseSettings(this.#getSettings)
    return userPanel
  }

  setUserPanel(state) {
    const settings = this.#parseSettings(this.#getSettings)
    settings.userPanel = state
    this.#setSettings(settings)
  }
}

export const settings = new Settings('app_config')
