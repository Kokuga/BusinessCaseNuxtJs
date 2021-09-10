<template>
	<div class="pt-10  bg-gray-100  w-screen">
		<div class="lg:px-24 px-12 lg:py-10 py-5 mt-10 mx-10 bg-white rounded-lg shadow border-2 hover:border-purple-500">

			<div class="text-center mt-16">
				<h1 class="text-3xl font-bold text-gray-900">Création d'un Utilisateur</h1>
			</div>
			<div v-if="error">Informations données incorrectes</div>
			<form
				v-on:submit.prevent="onSubmit()"
				method="POST"
				class="mt-8"
				id="createAccount">
				<div class="xl:grid grid-cols-3 gap-6">
					<div>
						<label class="block  font-semibold text-2xl" for="last_name">Nom</label>
						<input v-model="firstName" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="last_name"
							   name="last_name">
					</div>
					<div class=" xl:mt-0 mt-8">
						<label class="block  font-semibold text-2xl" for="first_name">Prénom</label>
						<input v-model="lastName" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="first_name"
							   name="first_name">
					</div>
					<div class=" xl:mt-0 mt-8">
						<label class="block  font-semibold text-2xl" for="username">Username</label>
						<input v-model="username" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="username"
							   name="username">
					</div>
					<div class=" xl:mt-0 mt-8">
						<label class="block  font-semibold text-2xl" for="password">Password</label>
						<input v-model="password" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="password"
							   name="password">
					</div>
					<div class=" xl:mt-0 mt-8">
						<label class="block  font-semibold text-2xl " for="mail">Adresse Mail</label>
						<input v-model="email" type="email"
							   class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="mail"
							   name="mail">
					</div>
					<div class=" xl:mt-0 mt-8">
						<label class="block  font-semibold text-2xl" for="phone">Numéro de téléphone</label>
						<input v-model="phone" type="tel"
							   class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="phone"
							   name="phone">
					</div>
				</div>
				<div class="text-center xl:mt-0 mt-8">
					<input class="mt-4 px-4 py-2 rounded-lg border bg-gray-200 border-gray-600 text-xl font-semibold"
						   type="submit" value="Envoyer">
					<nuxt-link to="/users/${user.id}/index"
							   class="mt-4 px-5 py-3 bg-gray-200 rounded-lg border border-gray-600 text-xl font-semibold">Retour
					</nuxt-link>
				</div>

			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "create",

	data() {
		return {
			error: false,
			username: "",
			password: "",
			phone: "",
			email: "",
			firstName: "",
			lastName: "",
			roles: ["ROLE_USER"],
		};
	},

	mounted() {
		if(localStorage.getItem('authToken') == null || localStorage.getItem('userId') == null) {
			this.$router.push({name: 'index'})
		} else {
			this.asyncData()
		}
	},



	methods: {
		async onSubmit() {
			await this.$axios.post('/users/create', {
				username: this.username,
				password: this.password,
				phone: this.phone,
				email: this.email,
				firstName: this.firstName,
				lastName: this.lastName,
				roles: this.roles,
			}, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			})
				.then(
					response => {
						this.$router.push({name: "index"});
					},
					response => {
						this.error = true
					}
				)
		},

		async asyncData() {
			const data = await this.$axios.$get(
				'/api/professionnels/' + localStorage.getItem('userId'), {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			).then((res) => {
				if(localStorage.getItem('userRoles') === 'ROLE_ADMIN') {
					this.$router.push({name: 'index'})
				}
			})





		},
	}
}
</script>

<style scoped>

</style>
