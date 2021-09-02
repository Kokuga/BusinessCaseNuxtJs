<template>
	<div class="bg-gray-100 pt-10 w-screen">

		<div
			class="lg:px-24 px-12 lg:py-10 py-5 mt-10 mx-10 bg-white rounded-lg shadow border-2 hover:border-purple-500">
			<div class="text-center mt-4">
				<h1 class="text-3xl font-bold text-gray-900">Création d'une Annonce</h1>
			</div>
			<form v-on:submit.prevent="onSubmit()"
				  method="POST"
				  class="mt-4"
				  id="login">
				<div class="xl:grid grid-cols-3 gap-4">
					<div class="xl:mt-0 mt-8">
						<label class="block  font-semibold text-xl text-left" for="title">Titre</label>
						<input v-model="title"
							   class="bg-gray-200 w-full border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							   id="title"
							   name="title">
					</div>

					<div class=" xl:mt-0 mt-8">
						<label class="block font-semibold text-xl text-left" for="price">Prix</label>
						<input
							v-model="price"
							class="bg-gray-200 w-full border-gray-600 border text-gray-700 rounded-lg  px-6 py-2"
							id="price"
							name="price">
					</div>
					<div class=" xl:mt-0 mt-8">
						<label class="block  font-semibold text-xl text-left" for="km">Kilométrage</label>
						<input
							v-model="kilometrage"
							class=" bg-gray-200 w-full border-gray-600 border text-gray-700 rounded-lg px-6 py-2"
							id="km"
							name="km">
					</div>
					<div class="col-span-3 xl:mt-0 mt-8">
						<label class="block mt-4 font-semibold text-xl text-left" for="desc">Description</label>
						<textarea
							v-model="description"
							rows="4"
							class="bg-gray-200 resize-none w-full border-gray-600 border text-gray-700 rounded-lg"
							id="desc" name="desc">
					</textarea>
					</div>
				</div>
				<div class="xl:grid grid-cols-4 gap-4 mt-5">
					<div class="xl:mt-0 mt-8">
						<label class="block font-semibold text-xl text-left" for="dateCar">Année </label>
						<select
							v-model="dateCar"
							class="w-full  xl:text-base text-xl bg-white border border-gray-500 rounded-lg text-gray-900 px-2 py-2"
							id="dateCar" name="dateCar">
							<option value="">Choisir l'année</option>
							<option v-for="(n,index) in 10" v-bind:value="'198' + index">198{{ index }}</option>
							<option v-for="(n,index) in 10" v-bind:value="'199' + index">199{{ index }}</option>
							<option v-for="(n,index) in 10" v-bind:value="'200' + index">200{{ index }}</option>
							<option v-for="(n,index) in 12" v-bind:value="'20' + index + 11">20{{ index + 10 }}</option>
						</select>
					</div>
					<div class=" xl:mt-0 mt-8">
						<label class="block font-semibold text-xl text-left" for="marque">Marque de la
							voiture</label>
						<select
							v-model="marqueForm"
							class="w-full  xl:text-base text-xl bg-white  border border-gray-500 rounded-lg text-gray-900 px-2 py-2"
							@change="getModele($event)"
							id="marque" name="marque">
							<option value="">Choisir la marque</option>
							<option v-for="marque in marques" v-bind:value="marque.id">{{ marque.nom }}</option>
						</select>
					</div>
					<div class="xl:mt-0 mt-8">
						<label class="block  font-semibold text-xl text-left" for="modele">Modèle de la
							voiture</label>
						<select
							v-model="modeleForm"
							class="w-full  xl:text-base text-xl  bg-white border border-gray-500 rounded-lg text-gray-900 px-2 py-2"
							id="modele" name="modele">
							<option value="">Choisir le modèle</option>
							<option v-for="modele in modeles" v-bind:value="modele.id">{{ modele.name }}</option>
						</select>
					</div>
					<div class=" xl:mt-0 mt-8">
						<label class="block font-semibold text-xl text-left" for="carburant">Type de
							carburant</label>
						<select
							v-model="carburantForm"
							class="w-full xl:text-base text-xl bg-white border border-gray-500 rounded-lg text-gray-900 px-2 py-2"
							id="carburant" name="carburant">
							<option value="">Choisir le carburant</option>
							<option v-for="carburant in carburants" v-bind:value="carburant.id">{{ carburant.libelle }}</option>
						</select>
					</div>
					<input multiple type="file" id="file" ref="file" v-on:change="handleFileUpload()" accept="image/*" class="input-file">

				</div>


				<div class="text-center xl:mt-0 mt-8">
					<input class="mt-4 px-4 py-2 rounded-lg border bg-gray-200 border-gray-600 text-xl font-semibold"
						   type="submit" value="Envoyer">
					<nuxt-link class="mt-4 px-5 py-3 bg-gray-200 rounded-lg border border-gray-600 text-xl font-semibold"
							   to="/">Retour
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
			carburants: "",
			marques: "",
			garages: "",
			modeles: "",

			file: '',
			result: [],


			title: "",
			price: "",
			kilometrage: "",
			description: "",
			dateCar: "",
			marqueForm: "",
			modeleForm: "",
			carburantForm: "",
			photos: "",
			garageId: "",
		}
	},

	mounted() {
		if (localStorage.getItem('authToken') == null || localStorage.getItem('userId') == null) {
			this.$router.push({name: 'index'})
		}
	},

	async asyncData({$axios, params}) {
		let carburant = await $axios.$get(
			`/api/carburants`, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		);
		let marque = await $axios.$get(
			'/api/marques', {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		)
		let garage = await $axios.$get(
			`/api/garages/${params.id}`, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		)

		return {
			carburants: carburant['hydra:member'],
			marques: marque['hydra:member'],
			garage: garage
		}

	},

	methods: {
		handleFileUpload() {
			this.file = this.$refs.file.files;
			for (let i = 0; i <= this.file.length-1; i++) {
				this.getBase64(this.file[i])
					.then((res) => {
						this.result.push(res)
				})
			}

		},

		getBase64(strintest) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(strintest);
				reader.onload = () => resolve(reader.result);
				reader.onerror = error => reject(error);
			});
		},

		async getModele(event) {
			let modeleTest = await this.$axios.$get(
				`/api/marques/` + event.target.value, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			)
			this.modeles = modeleTest['modeles']
		},

		async onSubmit() {
			await this.$axios.post('/annonce/create', {
				title: this.title,
				price: this.price,
				kilometrage: this.kilometrage,
				description: this.description,
				dateCar: this.dateCar,
				marqueForm: this.marqueForm,
				modeleForm: this.modeleForm,
				carburantForm: this.carburantForm,
				garageId: this.$route.params['id'],
				result: this.result
			}, {
				'headers': {
					'Authorization': localStorage.getItem('authToken'),
					'Content-Type': 'application/json'
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
		}
	}
}
</script>

<style scoped>

</style>
