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
	modules: ['@pinia/nuxt', 'nuxt-icons'],
})
