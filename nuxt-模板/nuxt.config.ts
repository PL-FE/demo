// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	css: ['@/assets/css/common.scss'],
	devtools: { enabled: true },
	postcss: {
		plugins: {
			autoprefixer: {},
			tailwindcss: {},
		},
	},
	modules: ['@pinia/nuxt', 'nuxt-icons'],
})
