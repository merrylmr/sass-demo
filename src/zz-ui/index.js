import menu from './menu/index.js'
import list from './list/index.js'

const components = [menu, list]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;