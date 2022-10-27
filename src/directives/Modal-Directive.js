import { isOpenChangeNameModal } from '@/features/settings/changeInfo'
import { changeState } from '@/utils/helpers'
export default {
  name: 'modal',
  mounted(el) {
    el.onkeydown = e => {
      if (e.key === `Escape`) changeState(isOpenChangeNameModal)
    }
  },
  unmounted(el) {
    el.onkeydown = null
  }
}
