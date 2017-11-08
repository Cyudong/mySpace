import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.config.debug = true; // 开启错误提示
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#todo-item',
  data: {
    list: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其他什么人吃的东西' }
    ]
  }
})