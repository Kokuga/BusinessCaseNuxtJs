export default {
	tailwindccs: {
	},

	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	env: {
		baseUrl: 'http://api-kokuga-business.mywebcommunity.org/public/index.php/',
		GOOGLE_ANALYTICS_ID : 'G-'
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'CAC-client',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: ''}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/axios',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-analytics'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
	],

	axios: {
		baseURL: 'http://api-kokuga-business.mywebcommunity.org/public/index.php/',
		credentials: false,
		proxyHeaders: true,
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json',

		}
	},

	googleAnalytics: {
		id: process.env.GOOGLE_ANALYTICS_ID,
	},


	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
