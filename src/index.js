// 这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import VueResource from 'vue-resource'
// import App from './app.vue'
// import router from './router.js'
// import './assets/less/index.less'

Vue.config.debug = true; // 开启错误提示
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true

var vue = new Vue({
  // router,
  el: '#appRoot',
  // render: h => h(App),
  data: {
    message: 'Hello Vue !',
    info: '页面加载于 ' + new Date().toLocaleString(),
    seen: true,
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  },
  methods: {
    showOrHiden: function () {
      this.seen = !this.seen
    },
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})