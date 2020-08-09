import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/registerServiceWorker'
import '@/util/view'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import http from './util/ajax'

Vue.config.debug = true
Vue.config.productionTip = true
Vue.use(MintUI)

Vue.prototype.$ajax = http

new Vue({
	router,
	store,
	render: h => h(App),
	created() {
		this.initApp()
	},
	methods: {
		initApp() {
			console.log("初始化YOHO！")
			this.$store.dispatch("user/initToken")
			this.$store.commit("order/getNewOrder")
		}
	},
	watch: {
		$route(to) {
			this.$store.commit("common/initRouter", to.name)
		}
	}
}).$mount('#app')
