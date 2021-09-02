<template>
	<div class="block bg-gray-100  w-screen">
		<div class="block bg-gray-100 h-full">
			<div class="bg-white pt-4 py-10 mt-5 mx-32 shadow-sm border rounded-lg  hover:border-purple-800">
				<div class="mt-4 text-center mb-16">
					<p>Il y a {{ users.length }} utilisateurs actuellement</p>
					<p class="text-3xl font-semibold text-gray-900">Rechercher</p>
					<button
						@click="resetFilter()"
						class="text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
					>Réinitialiser les filtres
					</button>
				</div>
				<form
					@change="onSubmit($event)"
				>
					<div
						v-on:submit.prevent="onSubmit($event)"
						class="mx-10 xl:grid grid-cols-3 gap-6">
						<div>
							<label for="username"></label>
							<input
								placeholder="Pseudo de l'utilisateur"
								v-model="username"
								@change="onSubmit($event)"
								id="username"
								class="lg:mt-8 w-full mt-12 block px-6 py-2 border-purple-400   mx-auto rounded-lg lg:w-full w-auto  border-2 hover:border-purple-800"
								name="username">
						</div>
						<div>
							<label for="email"></label>
							<input
								placeholder="Email de l'utilisateur"
								v-model="email"
								@change="onSubmit($event)"
								id="email"
								class="lg:mt-8 w-full mt-12 block px-6 py-2 border-purple-400   mx-auto rounded-lg lg:w-full w-auto  border-2 hover:border-purple-800"
								name="email">
						</div>
						<div>
							<label for="first_name"></label>
							<input
								placeholder="Prénom de l'utilisateur"
								v-model="first_name"
								@change="onSubmit($event)"
								id="first_name"
								class="lg:mt-8 w-full mt-12 block px-6 py-2 border-purple-400   mx-auto rounded-lg lg:w-full w-auto  border-2 hover:border-purple-800"
								name="first_name">
						</div>
						<div>
							<label for="last_name"></label>
							<input
								placeholder="Nom de l'utilisateur"
								v-model="last_name"
								@change="onSubmit($event)"
								id="last_name"
								class="lg:mt-8 w-full mt-12 block px-6 py-2 border-purple-400   mx-auto rounded-lg lg:w-full w-auto  border-2 hover:border-purple-800"
								name="last_name">
						</div>
						<div>
							<label for="phone"></label>
							<input
								placeholder="Téléphone de l'utilisateur"
								v-model="phone"
								@change="onSubmit($event)"
								id="phone"
								class="lg:mt-8 w-full mt-12 block px-6 py-2 border-purple-400   mx-auto rounded-lg lg:w-full w-auto  border-2 hover:border-purple-800"
								name="phone">
						</div>
					</div>
				</form>
			</div>
			<div class="mt-8 sm:mt-4 py-5 md:px-16 ">
				<div class="mt-8 sm:mt-4 py-5 md:px-16">
					<nuxt-link
						v-for="user in users"
						:to="{name: 'users-id', params: {id: user.id} }">
						<div class="mt-8">
							<div
								class="lg:px-6 py-4 mx-auto mt-4 lg:flex items-center lg:h-40 bg-white rounded-lg border-2 border-transparent hover:border-purple-800 cursor-pointer lg:shadow"

							>
								<div class="flex-shrink-0">
									<div class=" bg-red-300 pb-1/12 lg:pb-0">
										<img
											class="object-cover lg:static  h-1/12 w-full lg:w-32 lg:h-32 rounded-sm"
											src="~/assets/images/user.png"
										/>
									</div>
								</div>
								<div class="mt-4 flex-1 flex flex-col justify-between h-full">
									<div>
										<h2
											class="lg:ml-4  xl:text-xl text-2xl text-gray-900 font-bold "
										>{{ user.username }}</h2>
										<p class="lg:ml-4  xl:text-base text-xl text-gray-500 sm:ml-0 font-bold">{{ user.first_name }} {{
												user.last_name
											}}</p>

										<div class="flex items-center">
											<p class="xl:text-base text-xl text-gray-600 ml-4">{{ user.email }}</p>
										</div>
										<div class="flex items-end justify-end text-right">
											<p class="xl:text-base text-xl text-gray-600 ">Nombre de garages : {{ user.garages.length }}</p>

										</div>
									</div>
									<div class="lg:hidden mt-8 w-full h-0 border-gray-500 border"></div>

								</div>
							</div>

						</div>
					</nuxt-link>
					<div class="flex mt-8">
						<button
							v-if="pagePagination > 1"
							@click="previousPage()"
							class="text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
						>Précedent
						</button>
						<button
							v-if="users.length >= 5"
							@click="nextPage()"
							class="ml-8 text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
						>Suivant
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "users",

	data() {
		return {
			users: '',
			pagePagination: 1,

			username: '',
			email: '',
			first_name: '',
			last_name: '',
			phone: '',


		}
	},

	async asyncData({$axios, params}) {

		const data = await $axios.get(
			`/api/professionnels`, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		);
		console.log(data['data']['hydra:member'])
		return {
			users: data['data']['hydra:member'],
		}

	},

	methods: {

		async onSubmit(event) {

			const data = await this.$axios.$get(
				`/api/professionnels?_page=1&username=${this.username}&email=${this.email}&phone=${this.phone}&first_name=${this.first_name}&last_name=${this.last_name}`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			);
			this.users = data['hydra:member']
		},

		async resetFilter() {
			this.username = '';
			this.last_name = '';
			this.first_name = '';
			this.phone = '';
			this.email = '';
			const data = await this.$axios.get(
				`/api/professionnels?_page=1`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			)
				.then((res) => {
					this.users = res['data']['hydra:member']
				});


		},

		async previousPage() {
			this.pagePagination++
			const data = await this.$axios.get(
				`/api/professionnels?_page=${this.pagePagination}`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			);
			this.users = data['hydra:member']
		},

		async nextPage() {
			this.pagePagination++
			const data = await this.$axios.get(
				`/api/professionnels?_page=${this.pagePagination}`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			);
			this.users = data['hydra:member']
		}
	},
}
</script>

<style scoped>

</style>
