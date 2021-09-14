import Vue from 'vue'
import App from './App.vue'
import './public-path';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI);

let instance = null;
function render () {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app-vue')
}


// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
