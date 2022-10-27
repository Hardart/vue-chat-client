function scrollToBottom(el) {
   if (el.children.length > 0) {
      const target = el.lastElementChild
      target.scrollIntoView({ block: 'start', behavior: 'smooth' })
   }
}

export default {
   name: 'scroll-down',

   updated(el) {
      scrollToBottom(el)
   },
}
