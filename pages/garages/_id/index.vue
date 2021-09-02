<template>
	<div class="block bg-gray-100 py-4 lg:px-32 px-16 w-screen">
		<div class="flex justify-between">
			<nuxt-link
				class="break-words text-gray-100 rounded-2xl mt-20 p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125 "
				:to="{name : 'properties-create-id', params: {id: garage.id}}">Créer une annonce avec ce Garage
			</nuxt-link>


			<nuxt-link
				class="break-words text-gray-100 rounded-2xl mt-20 p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125 "
				:to="{name : 'garages-id-edit', params: {id: garage.id}}">Modifier les informations du garage
			</nuxt-link>

			<nuxt-link
				class="break-words text-gray-100 rounded-2xl mt-20 p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125 "
				:to="{name : 'garages-id-delete', params: {id: this.$route.params.id}}">Supprimer ce garage
			</nuxt-link>
		</div>
		<div
			class="mt-8 sm:mt-4 py-5 px-8 bg-white rounded-lg border-2 border-transparent hover:border-purple-800 cursor-pointer lg:shadow">
			<h1 class="text-center text-4xl font-semibold text-gray-900">{{ garage.name }}</h1>
			<div class="mt-8">
				<div
					:key="garage.id"

				>
					<div class="flex-shrink-0">
						<div class="flex justify-evenly pb-1/12 lg:pb-0">
							<img
								class="object-cover lg:static lg:rounded-lg lg:h-4/12 md:w-6/12 w-8/12 lg:w-4/12 md:w-6/12 w-8/12  rounded-sm"
								src="~/assets/images/garage.jpg"
							/>
						</div>
					</div>
				</div>

			</div>
			<div class=" mt-6 py-4 ">
				<div class=" mb-5">
					<p class="text-purple-800 text-2xl text-center font-bold">Coordonnées</p>
					<div class="mt-4 lg:flex block text-center justify-center">
						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Adresse
							:</span> {{ garage.ligne1 }}
							<span v-if="garage.ligne2">, {{ garage.ligne2 }} </span>
							<span v-if="garage.ligne3">, {{ garage.ligne3 }}</span></p>
						<p class="xl:text-base lg:ml-16 ml-0 text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Tel :</span>
							{{ garage.phone }}</p>
						<p class="xl:text-base lg:ml-16 ml-0 text-2xl"> <span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Nb d'annonces
										:</span>
							{{ countAnnonce }}</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "GarageIndex",

	async asyncData({$axios, params}) {

		const data = await $axios.get(
			`/api/garages/${params.id}`, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		);
		return {
			garage: data['data'],
			countAnnonce: data['data']['annonces'].length

		}
	},
}
</script>

<style scoped>

</style>
