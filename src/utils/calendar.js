class Calendar {
  static init() {
    return new Calendar()
  }

  static month(time) {
    // if (typeof n == 'string' || n < 0 || n > 12) throw new Error('parametr n can be only number in range 0 - 12')
  }
  static messageTime = ''

  messageDate(time) {
    Calendar.messageTime = this.now(time)
  }

  get today() {
    return new Date()
  }

  now(time) {
    if (time) return Date.parse(time)
    return Date.now()
  }

  get checkMonth() {
    const messageMonth = this.month(Calendar.messageTime)
    switch (this.month() - messageMonth) {
      case 0:
        return this.checkDay
      case 1:
        return 'В прошлом месяце'
      default:
        return this.toLocaleDate(Calendar.messageTime)
    }
  }

  get checkDay() {
    const messageDay = this.day(Calendar.messageTime)
    switch (this.day() - messageDay) {
      case 0:
        return this.checkHour
      case 1:
        return `Вчера в ${this.toLocaleTime(Calendar.messageTime)}`
      case 2:
        return `Позавчера в ${this.toLocaleTime(Calendar.messageTime)}`
      case 3:
      case 4:
      case 5:
        return 'Пару дней назад'
    }
  }

  get checkHour() {
    const { hour } = this.time(Calendar.messageTime)

    switch (this.time().hour - hour) {
      case 0:
        return this.checkMinutes
      case 1:
        return `Час назад`
      case 2:
      case 3:
      case 4:
        return 'Пару часов назад'
      default:
        return `Сегодня в ${this.toLocaleTime(Calendar.messageTime)}`
    }
  }

  get checkMinutes() {
    const { minutes } = this.time(Calendar.messageTime)

    switch (this.time().minutes - minutes) {
      case 0:
        return `Сейчас`
      case 1:
        return `Минуту назад`
      case 2:
      case 3:
      case 4:
        return 'Пару минут назад'
      default:
        return `Сегодня в ${this.toLocaleTime(Calendar.messageTime)}`
    }
  }

  time(time = this.now()) {
    let hour = new Date(time).getHours()
    let minutes = new Date(time).getMinutes()
    return { hour, minutes }
  }

  day(time = this.now()) {
    let day = new Date(time).getDate()
    return day
  }

  month(time = this.now()) {
    let month = new Date(time).getMonth() + 1
    if (month === 12) month = 0
    return month
  }

  get weekDays() {
    return ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  }

  get fullWeekDays() {
    return ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  }

  weekDayName(n = Number()) {
    return this.weekDays[n]
  }

  get monthDays() {
    return ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  }

  toLocaleDate(time) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    return new Date(time).toLocaleDateString('ru', options)
  }

  toLocaleTime(time) {
    const options = { hour: 'numeric', minute: 'numeric' }
    return new Date(time).toLocaleTimeString('ru', options)
  }
}

export default Calendar.init()
