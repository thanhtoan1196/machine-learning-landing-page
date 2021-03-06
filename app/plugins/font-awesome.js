import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faListAlt,
  faTags,
  faLanguage,
  faFileAlt,
  faClone,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'

export default () => {
  library.add([
    faListAlt,
    faTags,
    faLanguage,
    faFileAlt,
    faClone,
    faExternalLinkAlt
  ])

  Vue.component('fa-icon', FontAwesomeIcon)
}
