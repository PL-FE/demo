// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/styles/common.scss', 'ant-design-vue/dist/reset.css'],
	postcss: {
		plugins: {
			autoprefixer: {},
			tailwindcss: {},
		},
	},
	modules: ['@pinia/nuxt', '@vueuse/nuxt'],
	runtimeConfig: {
		// public 命名空间中定义的，在服务器端和客户端都可以普遍访问
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE,
		},
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
})
