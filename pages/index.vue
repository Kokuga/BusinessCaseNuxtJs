<template>
	<div class="pt-10  mx-auto block bg-gray-100  w-screen">
		<div class="block bg-gray-100 h-full">

			<div class="bg-white pt-4 py-10 mt-5 mx-32 shadow-sm border rounded-lg  hover:border-purple-800">
				<div class="mt-4 text-center mb-16">
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
							<label for="marque"></label>
							<select
								v-model="marqueForm"
								@change="getModele($event)"
								id="marque"
								class="lg:mt-8 w-full mt-12 block px-6 py-2 border-purple-400   mx-auto rounded-lg lg:w-full w-auto  border-2 hover:border-purple-800"
								name="marque">
								<option value="">Choisissez une marque</option>
								<option v-for="marque in marques" v-bind:value="marque.id">{{ marque.nom }}</option>
							</select>
						</div>
						<div>
							<label for="modele"></label>
							<select
								@change="onSubmit($event)"
								v-model="modeleForm"
								id="modele"
								class="lg:mt-8 w-full mt-12 block px-6 py-2 border-purple-400  mx-auto rounded-lg lg:w-full w-auto  border-2 hover:border-purple-800"
								name="modele">
								<option value="">Choississez un modèle</option>
								<option v-for="modele in modeles" v-bind:value="modele.id">{{ modele.name }}</option>
							</select>
						</div>
						<div>
							<label for="year"></label>
							<select
								@change="onSubmit($event)"
								v-model="yearForm"
								id="year"
								class="lg:mt-8 w-full mt-12  block px-6 py-2 border-purple-400  mx-auto lg:w-full w-auto  rounded-lg  border-2 hover:border-purple-800"
								name="annee">
								<option value="">Choississez une année</option>
								<option v-for="(n,index) in 10" v-bind:value="'198' + index">198{{ index }}</option>
								<option v-for="(n,index) in 10" v-bind:value="'199' + index">199{{ index }}</option>
								<option v-for="(n,index) in 10" v-bind:value="'200' + index">200{{ index }}</option>
								<option v-for="(n,index) in 12" v-bind:value="'20' + index + 11">20{{ index + 10 }}</option>
							</select>
						</div>
						<div>
							<label for="km"></label>
							<select
								@change="onSubmit($event)"
								v-model="kmForm"
								id="km"
								class="lg:mt-8 w-full mt-12  block px-6 py-2 border-purple-400  mx-auto rounded-lg lg:w-full w-auto   border-2 hover:border-purple-800"
								name="km">
								<option value="">Choisissez le kilométrage</option>
								<option value="10000">10 000 km</option>
							</select>
						</div>
						<div>
							<label for="carbu"></label>
							<select
								@change="onSubmit($event)"
								v-model="carburantForm"
								id="carbu"
								class=" lg:mt-8 w-full mt-12 block px-6 py-2 border-purple-400  mx-auto rounded-lg border-2 lg:w-full w-auto  hover:border-purple-800"
								name="carbu">
								<option value="">Choisissez le carburant</option>
								<option v-for="carburant in carburants" v-bind:value="carburant.id">{{ carburant.libelle }}</option>
							</select>
						</div>
						<div>
							<label for="price"></label>
							<select
								@change="onSubmit($event)"
								v-model="priceForm"
								id="price"
								class="lg:mt-8 w-full mt-12  block px-6 py-2 border-purple-400  mx-auto rounded-lg  border-2 lg:w-full w-auto  hover:border-purple-800"
								name="price">
								<option value="">Choississez le prix</option>
								<option value="0..10000"> > 10 000 €</option>
								<option value="10000..100000"> entre 10000 et 100000 €</option>
								<option value="500000..1000000"> entre 50000 et 1000000 €</option>
								<option value="1000000..9999999"> entre 50000 et 1000000 €</option>
							</select>

						</div>


					</div>
				</form>
			</div>

			<div class="mt-8 sm:mt-4 py-5 md:px-16 ">
				<nuxt-link
					v-for="annonce in annonces"
					:key="annonce.id"
					:to="{name: 'properties-id', params: {id: annonce.id} }">
					<div class="mt-8">
						<div
							class="lg:px-6 px-8 py-4 mx-auto mt-4 lg:flex items-center lg:h-40 bg-white rounded-lg border-2 border-transparent hover:border-purple-800 cursor-pointer lg:shadow"

						>
							<div class="flex-shrink-0">
								<div class=" bg-red-300 pb-1/12 lg:pb-0">
									<img v-if="annonce.photos[0]"
										 class="object-cover lg:static  h-1/12 w-full lg:w-32 lg:h-32 rounded-sm"
										 :src="url+annonce.photos[0].path"
									/>
									<!--										 src="../../CAC-api/public/images/61116d94257ec.jpeg"-->


								</div>
							</div>
							<div class="mt-4 flex-1 flex flex-col justify-between h-full">
								<div>
									<h2
										class="lg:ml-4  xl:text-xl text-2xl text-gray-900 font-bold "
									>{{ annonce.title }}</h2>
									<p class="lg:ml-4  xl:text-base text-xl text-gray-500 sm:ml-0 font-bold">{{ annonce.price }} €</p>

									<div class="flex items-center">
										<p class="xl:text-base text-xl text-gray-600 ml-4">{{ annonce.description.substring(0, 40) }}</p>
									</div>

								</div>
							</div>
						</div>
						<div class="lg:hidden mt-8 w-full h-0 border-gray-500 border"></div>
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
						v-if="annonces.length >= 5"
						@click="nextPage()"
						class="ml-8 text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
					>Suivant
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'index',

	data() {
		return {
			url: process.env.baseUrl,
			carburant: "",
			marque: "",
			modeles: "",

			marqueForm: '',
			modeleForm: '',
			kmForm: '',
			yearForm: '',
			priceForm: '',
			carburantForm: '',
			pagePagination: 1,
		}
	},


	async asyncData({$axios, redirect}) {

		const data = await $axios.$get(
			`/api/annonces?_page=1`
		);

		let carburant = await $axios.$get(
			`/api/carburants`, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		).catch((err) => {
			localStorage.clear()
			window.location.reload()
		});

		let marque = await $axios.$get(
			'/api/marques', {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		)
		return {
			carburants: carburant['hydra:member'],
			annonces: data['hydra:member'],
			marques: marque['hydra:member'],

		}
	},


	methods: {

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

		async onSubmit(event) {
			const data = await this.$axios.$get(
				`/api/annonces?_page=1&Carburant.id=${this.carburantForm}&Modele.id=${this.modeleForm}&Modele.marque.id=${this.marqueForm}&anneeCirculation=${this.yearForm}&kilometrage%5Bbetween%5D=${this.kmForm}&price%5Bbetween%5D=${this.priceForm}`
			);
			this.annonces = data['hydra:member']
		},

		async resetFilter() {
			this.annonces = '';
			this.marqueForm = '';
			this.modeleForm = '';
			this.kmForm = '';
			this.yearForm = '';
			this.priceForm = '';
			this.carburantForm = '';
			const data = await this.$axios.get(
				`/api/annonces?_page=1`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			);
			let carburant = await this.$axios.$get(
				`/api/carburants`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			);
			let marque = await this.$axios.$get(
				'/api/marques', {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			)
			this.annonces = data['data']['hydra:member']
		},

		async previousPage() {
			this.pagePagination--
			const data = await this.$axios.$get(
				`/api/annonces?_page=${this.pagePagination}`
			);
			this.annonces = data['hydra:member']

		},

		async nextPage() {
			this.pagePagination++
			const data = await this.$axios.$get(
				`/api/annonces?_page=${this.pagePagination}`
			);
			this.annonces = data['hydra:member']
		}

	}
}
</script>
