<template>
	<div class="bg-gray-100  w-full pt-4">
		<div class="text-center mt-16">
			<h1 class="text-3xl font-bold text-gray-900">Connexion</h1>
		</div>
		<div class="text-center">
			<form accept-charset="UTF-8"
				  v-on:submit.prevent="onSubmit()"
				  method="POST"
				  class="mt-8"
				  id="login">
				<div v-if="error">Mauvais identifiants</div>
				<div class="items-center text-center object-center text-center">
					<div>
						<p class=" font-semibold xl:text-xl text-2xl" for="username">Nom d'utilisateur</p>
						<input v-model="username" class="bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="username"
							   name="username">
					</div>
					<div>
						<p class="mt-4 font-semibold xl:text-xl text-2xl" for="password">Mot de passe</p>
						<input v-model="password" class="bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="password"
							   name="password">
					</div>
					<div class="xl:mt-0 mt-8">
						<input class="mt-4 px-4 py-2 rounded-lg border bg-gray-200 border-gray-600 text-xl font-semibold"
							   type="submit" value="Envoyer">
						<a class="mt-4 px-5 py-3 bg-gray-200 rounded-lg border border-gray-600 text-xl font-semibold"
						   href="index.html">Retour</a>
					</div>
				</div>
			</form>
		</div>
		<div class="text-center mt-4 text-xl">
			<p><span class="text-red-600 font-semibold">ATTENTION</span>,
			<p><a href="mailto:XXX">contactez <span class="text-red-600 font-semibold">M.Lodevie</span></a> si en tant
				que propriétaire,
			</p>
			<p>vous voulez créer un compte en envoyant : </p>
			<p><span class="font-semibold">nom</span>, <span class="font-semibold">prénom</span>, <span
				class="font-semibold">adresse mail</span>, <span class="font-semibold">numéro de téléphone</span>,
				<span class="font-semibold">Numéro de SIRET</span>. </p>
		</div>
	</div>
</template>

<script>
import axios from "@/plugins/axios";

export default {
	name: "login",
	data() {
		return {
			error: false,
			username: "",
			password: "",
			token: "",
		};
	},
	methods: {
		async getUser(username, token) {

			const user = await this.$axios.get(
				`/api/professionnels?_page=1&username=${username}`, {
					'headers' : {
						'Authorization': localStorage.getItem('authToken'),
					}
				}
			)
				.then(response => {
					localStorage.setItem("userId", response.data['hydra:member'][0]['id']);
					localStorage.setItem("userRoles", response.data['hydra:member'][0]['roles'][0]);
				});


		},

		async onSubmit() {
			await this.$axios.post('/authentication_token', {
				username: this.username,
				password: this.password,
			})
			.then(
				response => {
					localStorage.setItem("authToken", 'Bearer ' + response.data.token);
					this.token = 'Bearer ' + response.data.token;
					this.getUser(this.username, this.token);
					this.$router.push({ name: "index" });
				},
				response => {
					this.error = true
				}
			)
		}
	}

}
</script>

<style scoped>

</style>
