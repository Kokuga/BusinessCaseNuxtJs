<template>
	<aside class="md:w-full lg:max-w-sm bg-white border-r border-gray-300">
		<div class=" sticky top-0 ">
			<div class="bg-white flex justify-between items-center p-4 sm:p-8">
				<div class>
					<div
						class="w-10 h-10 bg-purple-800 text-purple-100 inline-flex items-center justify-center font-semibold rounded-lg"
					>CAC
					</div>
					<span class="ml-2 xl:text-base text-2xl  font-semibold text-gray-900">Centre'Auto'Ccas</span>
				</div>

				<div class="flex items-center justify-center">
					<button @click="toggle" class="block lg:hidden p-2" type="button">
						<svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" stroke-linecap="round"
							 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
							 xmlns="http://www.w3.org/2000/svg">
							<path d="M3 12h18M3 6h18M3 18h18"/>
						</svg>
					</button>
				</div>
			</div>

			<div id="nav" :class="[ isOpened ? 'block' : 'hidden lg:block' ]" class="xl:text-base text-xl p-4 md:p-0">
				<form class="w-full sm:px-3 md:px-8">
					<label
						class="bg-white text-gray-600 border-b border-gray-300 block flex items-center focus-within:text-purple-800 focus-within:border-purple-800 transition-colors ease-in duration-100"
					>
						<svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" stroke-linecap="round"
							 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
							 xmlns="http://www.w3.org/2000/svg">
							<circle cx="11" cy="11" r="8"/>
							<path d="M21 21l-4.35-4.35"/>
						</svg>
						<input
							class="ml-4 py-4 flex-1 text-gray-800 placeholder-gray-600 focus:outline-none"
							placeholder="Search for property, user etc."
							type="text"
						/>
					</label>
				</form>
				<div class="mt-0 md:mt-8">
					<ul class="font-semibold md:text-lg lg:text-base">
						<li
							@click="toggle"
							class="py-1 my-3 lg:text-base text-gray-900 flex justify-between items-center hover:bg-purple-100"
							v-for="entry in menu"
							:key="entry.name"

						>
							<nuxt-link
								class="flex-1 sm:pl-3 lg:py-1 md:pl-8 flex items-center cursor-pointer"
								:to="{ name: entry.route, params: entry.params }"
							>
								<icon
									:name="entry.icon"
									:class="{'text-purple-600': entry.active}"
									class="w-6 h-6 text-gray-500"
								/>
								<span class="ml-4">{{ entry.name }}</span>
							</nuxt-link>

							<div v-show="entry.active" class="w-1 rounded-l-md bg-purple-800">&nbsp;</div>
						</li>
					</ul>
				</div>

			</div>
		</div>
	</aside>
</template>

<script>

import Icon from "~/components/Icon.vue";

export default {

	name: "LayoutHeader",


	data() {
		return {
			isOpened: false,
			user: '',
		};
	},


	computed: {

		menu() {
			if (localStorage.getItem("authToken")) {
				if (localStorage.getItem('userRoles') === 'ROLE_ADMIN' || localStorage.getItem('userRoles') === 'ROLE_SUPER_ADMIN') {
					return [
						{
							active: this.$route.name === 'admin',
							name: "Admin",
							icon: "admin",
							route: "admin"
						},
						{
							active: this.$route.name === 'index',
							name: "Accueil",
							icon: "trello",
							route: "index"
						},
						{
							active: this.$route.name === 'users-id',
							name: "Mon profil",
							params: {id: localStorage.getItem('userId')},
							icon: "users",
							route: "users-id"
						},
						{
							active: this.$route.name === 'users-id-garages',
							name: "Mes Garages",
							icon: "agencies",
							params: {id: localStorage.getItem('userId')},
							route: "users-id-garages"
						},
						{
							active: this.$route.name === 'users-id-properties',
							name: "Mes annonces",
							icon: "myproperties",
							params: {id: localStorage.getItem('userId')},
							route: "users-id-properties"
						},
						{
							active: this.$route.name === 'logout',
							name: "Déconnexion",
							icon: "logout",
							route: "logout"
						},
						{
							active: this.$route.name === 'mention',
							name: "Mentions",
							icon: "mention",
							route: "mention"
						},
						{
							active: this.$route.name === 'cgu',
							name: "CGU",
							icon: "cgu",
							route: "cgu"
						},
					]
				} else {
					return [
						{
							active: this.$route.name === 'index',
							name: "Accueil",
							icon: "trello",
							route: "index"
						},
						{
							active: this.$route.name === 'user',
							name: "Mon profil",
							params: {id: localStorage.getItem('userId')},
							icon: "users",
							route: "users-id"
						},
						{
							active: this.$route.name === 'users-id-garages',
							name: "Mes Garages",
							icon: "agencies",
							params: {id: localStorage.getItem('userId')},
							route: "users-id-garages"
						},
						{
							active: this.$route.name === 'users-id-properties',
							name: "Mes annonces",
							icon: "myproperties",
							params: {id: localStorage.getItem('userId')},
							route: "users-id-properties"
						},
						{
							active: this.$route.name === 'logout',
							name: "Déconnexion",
							icon: "logout",
							route: "logout"
						},
						{
							active: this.$route.name === 'mention',
							name: "Mentions",
							icon: "mention",
							route: "mention"
						},
						{
							active: this.$route.name === 'cgu',
							name: "CGU",
							icon: "cgu",
							route: "cgu"
						}
					];
				}
			} else {
				return [
					{
						active: this.$route.name === 'index',
						name: "Accueil",
						icon: "trello",
						route: "index"
					},
					{
						active: this.$route.name === 'login',
						name: "Connexion",
						icon: "login",
						route: "login"
					},
					{
						active: this.$route.name === 'mention',
						name: "Mentions",
						icon: "mention",
						route: "mention"
					},
					{
						active: this.$route.name === 'cgu',
						name: "CGU",
						icon: "cgu",
						route: "cgu"
					}
				];
			}
		}
	},

	methods: {
		toggle() {
			this.isOpened = !this.isOpened;
		},


	},
}
</script>

<style scoped>

</style>
