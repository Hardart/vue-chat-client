class Calendar {
  /** @type {Date} */
  #date
  static init() {
    return new Calendar()
  }

  static messageTime = ''

  /**
   *  @param {Intl.RelativeTimeFormatOptions} options
   *  @returns {Intl.RelativeTimeFormat}
   */
  fomatter(options) {
    return new Intl.RelativeTimeFormat('ru', options)
  }

  get today() {
    return new Date()
  }

  /**
   * @protected
   * @param {string} time
   * @returns {Date}
   */
  _dateFrom(time) {
    if (time) return new Date(time)
    return this.today
  }

  setup(time) {
    this.#date = this._dateFrom(time)
    /** @type {Intl.RelativeTimeFormatUnit} */
    let format = 'seconds'
    let isTooLong = false
    let value = null
    switch (true) {
      case this.#isOver2Days:
        isTooLong = true
        break
      case this.#isOverDay >= 1:
        format = 'day'
        value = this.#isOverDay
        break
      case this.#isOverMinutes >= 120:
        format = 'hours'
        value = -2
        break
      case this.#isOverMinutes >= 60:
        format = 'hour'
        value = -1
        break
      case this.#isOverMinutes >= 1:
        format = 'minutes'
        value = -this.#isOverMinutes
        break
      case this.#isOverSeconds == 0:
        format = 'seconds'
        value = -1
        break
      case this.#isOverSeconds < 59:
        format = 'seconds'
        value = -this.#isOverSeconds
        break
    }

    if (isTooLong) return this.#date.toLocaleString()
    return this.fomatter().format(value, format)
  }

  get #isOver2Days() {
    return Math.round((this.today - this.#date) / (1000 * 60 * 60 * 24)) >= 2
  }

  get #isOverDay() {
    return Math.round((this.today - this.#date) / (1000 * 60 * 60 * 24))
  }

  get #isOverMinutes() {
    return Math.round((this.today - this.#date) / (1000 * 60))
  }

  get #isOverSeconds() {
    return Math.round((this.today - this.#date) / 1000)
  }
}

export default Calendar.init()
