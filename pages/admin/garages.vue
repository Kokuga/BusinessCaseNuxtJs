<template>
	<div class="block bg-gray-100  w-screen">
		<div class="block bg-gray-100 h-full">
			<div class="bg-white pt-4 py-10 mt-5 mx-32 shadow-sm border rounded-lg  hover:border-purple-800">
				<div class="mt-4 text-center mb-8">
					<p class="text-3xl font-semibold text-gray-900">Rechercher</p>
					<div class="flex mt-4 justify-center">
						<button
							@click="resetFilter()"
							class="text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
						>Réinitialiser les filtres
						</button>
					</div>
				</div>
				<form
					@change="onSubmit($event)"
				>
					<div
						v-on:submit.prevent="onSubmit($event)"
						class="mx-10 flex justify-center">
						<div>
							<label for="garage"></label>
							<input
								v-model="garageName"
								@change="onSubmit($event)"
								placeholder="Nom du garage"
								id="garage"
								class="lg:mt-3 w-full mt-8 block px-6 py-2 border-purple-400   mx-auto rounded-lg lg:w-full w-auto  border-2 hover:border-purple-800"
								name="garage">
						</div>
					</div>
				</form>
			</div>
			<nuxt-link
				v-for="garage in garages"
				class="mt-8 sm:mt-4 py-5 md:px-16 "
				:key="garage.id"
				:to="{name: 'garages-id', params: {id: garage.id} }">

				<div class="mt-8 md:px-16">
					<div
						class="lg:px-6 py-4 mx-auto mt-4 lg:flex items-center lg:h-40 bg-white rounded-lg border-2 border-transparent hover:border-purple-800 cursor-pointer lg:shadow"

					>
						<div class="flex-shrink-0">
							<div class=" bg-red-300 pb-1/12 lg:pb-0">
								<img
									class="object-cover lg:static  h-1/12 w-full lg:w-32 lg:h-32 rounded-sm"
									src="~/assets/images/garage.jpg"
								/>
							</div>
						</div>
						<div class="mt-4 flex-1 flex flex-col justify-between h-full">
							<div>
								<h2
									class="lg:ml-4  xl:text-xl text-2xl text-gray-900 font-bold "
								>{{ garage.name }}</h2>
								<p class="lg:ml-4  xl:text-base text-xl text-gray-500 sm:ml-0 font-bold">{{ garage.phone }}</p>

								<div class="flex flex-col">
									<p class="xl:text-base text-xl text-gray-600 ml-4">{{ garage.ligne1 }} , </p>
									<p v-if="garage.ligne2" class="xl:text-base text-xl text-gray-600 ml-4">{{ garage.ligne2 }} , </p>
									<p v-if="garage.ligne3" class="xl:text-base text-xl text-gray-600 ml-4">{{ garage.ligne3 }} , </p>
									<p class="xl:text-base text-xl text-gray-600 ml-4">{{ garage.codePostal }} , {{ garage.ville }} </p>
								</div>
								<div class="flex items-end justify-end text-right">
									<p class="xl:text-base text-xl text-gray-600 ">Nombre d'annonces : {{ garage.annonces.length }}</p>
								</div>
							</div>
						</div>
						<div class="lg:hidden mt-8 w-full h-0 border-gray-500 border"></div>

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
					v-if="garages.length >= 5"
					@click="nextPage()"
					class="ml-8 text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
				>Suivant
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "garages",

	data() {
		return {
			garageName: '',
			garages: '',
			pagePagination: 1,
		}
	},

	async asyncData({$axios, params}) {

		const data = await $axios.get(
			`/api/garages?_page=1`, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		);
		return {
			garages: data['data']['hydra:member'],

		}
	},

	methods: {
		async onSubmit(event) {

			const data = await this.$axios.$get(
				`/api/garages?_page=1&name=${this.garageName}`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			);
			this.garages = data['hydra:member']
		},
		async resetFilter() {
			this.title = ''
			const data = await this.$axios.get(
				`/api/garages/`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			)
				.then((res) => {

					this.garages = res['data']['hydra:member']
				});


		},

		async previousPage() {
			this.pagePagination--
			const data = await this.$axios.$get(
				`/api/garages?_page=${this.pagePagination}`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			);
			this.garages = data['hydra:member']
		},

		async nextPage() {
			this.pagePagination++
			const data = await this.$axios.$get(
				`/api/garages?_page=${this.pagePagination}`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			);
			this.garages = data['hydra:member']
		}
	},
}
</script>

<style scoped>

</style>
