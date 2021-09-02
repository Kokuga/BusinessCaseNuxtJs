<template>
	<div class="bg-gray-100 pt-10 w-screen">

		<div
			class="lg:px-24 px-12 lg:py-10 py-5 mt-10 mx-10 bg-white rounded-lg shadow border-2 hover:border-purple-500">
			<div class="text-center mt-4">
				<h1 class="text-3xl font-bold text-gray-900">Modifier une annonce</h1>
			</div>
			<form
				v-on:submit.prevent="onSubmit()"
				method="POST"
				class="mt-8 "
				id="createGarage">
				<div class="xl:grid grid-cols-3 gap-6 ">
					<div>
						<label class="block font-semibold text-2xl" for="nom">Nom</label>
						<input v-model="name" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="nom"
							   name="nom">
					</div>
					<div class="xl:mt-0 mt-8">
						<label class="block font-semibold text-2xl" for="ligne1">Ligne1</label>
						<input v-model="ligne1" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="ligne1"
							   name="ligne1">
					</div>
					<div class="xl:mt-0 mt-8">
						<label class="block font-semibold text-2xl" for="ligne2">Ligne2</label>
						<input v-model="ligne2" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="ligne2"
							   name="ligne2">
					</div>
					<div class="xl:mt-0 mt-8">
						<label class="block font-semibold text-2xl" for="ligne3">Ligne3</label>
						<input v-model="ligne3" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="ligne3"
							   name="ligne3">
					</div>

					<div class="xl:mt-0 mt-8">
						<label class="block font-semibold text-2xl" for="codePostal">Code Postal</label>
						<input v-model="codePostal" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="codePostal"
							   name="codePostal">
					</div>

					<div class="xl:mt-0 mt-8">
						<label class="block font-semibold text-2xl" for="ville">Ville</label>
						<input v-model="ville" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="ville"
							   name="ville">
					</div>

					<div class="xl:mt-0 mt-8">
						<label class="block font-semibold text-2xl" for="phoneGarage">Numéro de téléphone</label>
						<input v-model="phone" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="phoneGarage"
							   name="phoneGarage">
					</div>

					<div class="xl:mt-0 mt-8">
						<label class="block font-semibold text-2xl" for="siret">SIRET</label>
						<input v-model="siret" class="w-full bg-gray-200 border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="siret"
							   name="phoneGarage">
					</div>


				</div>
				<div class="text-center xl:mt-0 mt-8">
					<input class=" px-4 py-2 rounded-lg border bg-gray-200 border-gray-600 text-xl font-semibold"
						   value="Envoyer" type="submit">
					<nuxt-link :to="{ name: 'garages-id', params: {id : this.$route.params.id} }"
					   class=" px-5 py-3 bg-gray-200 rounded-lg border border-gray-600 text-xl font-semibold">Retour</nuxt-link>
				</div>
			</form>
		</div>

	</div>
</template>

<script>
export default {
	name: "edit",


	data() {
		return {
			error: false,
			name: "",
			ligne1: "",
			ligne2: "",
			ligne3: "",
			codePostal: "",
			ville: "",
			phone: "",
			siret: "",
		};
	},

	mounted() {
		this.getData()
	},

	methods: {
		async getData() {
			const data = await this.$axios.get(
				`/api/garages/${this.$route.params.id}`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			)
				.then((res) => {
					this.name = res['data'].name;
					this.ligne1 = res['data'].ligne1;
					this.ligne2 = res['data'].ligne2;
					this.ligne3 = res['data'].ligne3;
					this.codePostal = res['data'].codePostal;
					this.ville = res['data'].ville;
					this.phone = res['data'].phone;
					this.siret = res['data'].siret;
					return {
						garage : res['data'],
					}
				})
				.then((res) => {
					this.error = true;
				})
		},


		async onSubmit() {
			await this.$axios.put(`/api/garages/${this.$route.params.id}`, {
				name: this.name,
				ligne1: this.ligne1,
				ligne2: this.ligne2,
				ligne3: this.ligne3,
				codePostal: this.codePostal,
				ville: this.ville,
				phone: this.phone,
				siret: this.siret,
			}, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			})
				.then(
					response => {
						this.$router.push({ name: 'garages-id', params: {id : this.$route.params.id} });
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
