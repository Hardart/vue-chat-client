export class Avatar {
  constructor(avatarElement, imageObj, borderElement, userAvatarPath) {
    this.avatarElement = avatarElement
    this.borderElement = borderElement
    this.path = 'public/' + imageObj.path
    this.oldPath = 'public/' + userAvatarPath.match(/(img)+.*/g)[0]
    this.w = imageObj.width
    this.h = imageObj.height
    this.newW = 0
    this.newH = 0
    this.posX = 0
    this.posY = 0
    this.scale = 0
    this.diff = 0
    this.borderWidth = 0
    this.maxHeight = 380
  }

  calcRatio() {
    if (this.w > this.h) return this.w / this.h
    if (this.h > this.w) return this.h / this.w
    return 1
  }

  calcSize() {
    if (this.h > this.maxHeight) {
      this.newH = this.newW = this.maxHeight
      if (this.isHorisontalAspect) this.newW = this.maxHeight * this.ratio
      if (!this.isHorisontalAspect) this.newW = this.maxHeight / this.ratio
      this.h = this.newH
      this.w = this.newW
    }

    const borderSize = this.w >= this.h ? this.h : this.w
    this.diff = this.w > this.h ? (this.w - this.h) / 2 : (this.h - this.w) / 2
    this.borderWidth = borderSize
    this.borderElement.style.height = this.borderElement.style.width = this.borderWidth + 'px'
    this.setSize()
  }

  setSize(offset = 0) {
    this.addExtension = this.isHorisontalAspect ? this.w + offset : this.h + offset
  }

  refreshSize() {
    this.avatarElement.style.transform = `translate3d(${0}px, ${0}px, 0px)`
    this.h = 0
    this.w = 0
  }

  setPosition() {
    if (this.isHorisontalAspect) {
      if (this.scale <= this.posX - this.diff) this.posX = this.scale + this.diff
      if (this.scale * -1 >= this.posX + this.diff) this.posX = this.scale * -1 - this.diff

      if (this.scale / this.ratio <= this.posY) this.posY = this.scale / this.ratio
      if ((this.scale * -1) / this.ratio >= this.posY) this.posY = (this.scale * -1) / this.ratio
    } else {
      if (this.scale / this.ratio <= this.posX) {
        this.posX = this.scale / this.ratio
      }
      if ((this.scale * -1) / this.ratio >= this.posX) {
        this.posX = (this.scale * -1) / this.ratio
      }

      if (this.scale <= this.posY - this.diff) {
        this.posY = this.scale + this.diff
      }
      if (this.scale * -1 >= this.posY + this.diff) {
        this.posY = this.scale * -1 - this.diff
      }
    }

    this.avatarElement.style.transform = `translate3d(${Math.round(this.posX)}px, ${Math.round(this.posY)}px, 0px)`
  }

  get ratio() {
    return this.calcRatio()
  }

  get isHorisontalAspect() {
    if (this.w >= this.h) return true
    return false
  }

  set addExtension(value) {
    if (this.isHorisontalAspect) {
      this.newW = value
      this.newH = value / this.ratio
    } else {
      this.newW = value / this.ratio
      this.newH = value
    }
    this.avatarElement.style.width = this.newW + 'px'
    this.avatarElement.style.minWidth = this.newW + 'px'
    this.avatarElement.style.height = this.newH + 'px'
  }
}

export function changeAvatar(avatar, elements = null) {
  const { slider, sliderFill, avatarImage, grabber, input } = elements
  if (!slider) return console.log('No slider')

  avatar.calcSize()

  grabber.onmousedown = function (event) {
    let shiftX = event.clientX - grabber.getBoundingClientRect().left

    function moveAt(pageX) {
      let moveLeft = pageX - shiftX - slider.getBoundingClientRect().left
      let moveLefInPercent = (moveLeft * 100) / slider.clientWidth

      if (moveLefInPercent < 0) {
        moveLefInPercent = moveLeft = 0
      }
      if (moveLefInPercent > 100) {
        moveLefInPercent = 100
        moveLeft = slider.clientWidth
      }

      avatar.scale = moveLeft / 2
      avatar.setPosition()
      avatar.setSize(moveLeft)

      grabber.style.left = moveLefInPercent + '%'
      sliderFill.style.width = moveLefInPercent + '%'
      input.setAttribute('value', Math.round(moveLefInPercent))
    }

    function onMouseMove(event) {
      moveAt(event.pageX)
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  avatarImage.onmousedown = function (event) {
    let shiftX = event.pageX - avatar.posX
    let shiftY = event.pageY - avatar.posY

    function moveAt(pageX, pageY) {
      avatar.posX = pageX - shiftX
      avatar.posY = pageY - shiftY

      avatar.setPosition()
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY)
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  document.ondragstart = function () {
    return false
  }
}
