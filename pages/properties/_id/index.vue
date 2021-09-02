<template>
	<div class="container block bg-gray-100 py-4 lg:px-32 px-16">
		<div v-if="professionnel.id === userId || userRoles === 'ROLE_ADMIN'" class="flex justify-between">
			<nuxt-link
				class="break-words text-center text-gray-100 rounded-2xl mt-20 p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125 "
				:to="{name : 'properties-id-edit', params: {id: this.$route.params.id}}">Modifier les informations de l'annonce
			</nuxt-link>

			<nuxt-link
				class="break-words text-center text-gray-100 rounded-2xl mt-20 p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125 "
				:to="{name : 'properties-id-delete', params: {id: this.$route.params.id}}">Supprimer cette annonce
			</nuxt-link>
		</div>


		<div
			class="mt-8 sm:mt-4 py-5 px-8 bg-white rounded-lg border-2 border-transparent hover:border-purple-800 cursor-pointer lg:shadow">

			<h1 class="text-center text-4xl font-semibold text-gray-900">{{ annonce.title }}</h1>
			<div class="mt-8">
				<div

				>
					<div class="flex-shrink-0">
						<div class="lg:flex justify-center  flex-wrap pb-1/12 lg:pb-0">
							<img
								v-if="annonce.photos[0]"
								class="object-cover lg:mx-0 mx-auto mt-5 lg:static lg:rounded-lg lg:h-4/12 md:w-6/12 w-8/12 lg:w-3/12 md:w-6/12 w-8/12  rounded-sm"
								:src="url+annonce.photos[0].path"
							/>
							<img
								v-if="annonce.photos[1]"
								class="object-cover lg:mx-0 mx-auto mt-5 lg:static lg:rounded-lg lg:h-4/12 md:w-6/12 w-8/12 lg:w-3/12 lg:ml-8 md:w-6/12 w-8/12  rounded-sm"
								:src="url+annonce.photos[1].path"
							/>
							<img
								v-if="annonce.photos[2]"
								class="object-cover lg:static lg:rounded-lg lg:h-4/12 md:w-6/12 w-8/12 lg:w-3/12 lg:ml-8 md:w-6/12 w-8/12  rounded-sm"
								:src="url+annonce.photos[2].path"
							/>
							<img
								v-if="annonce.photos[3]"
								class="object-cover lg:static lg:mt-8 lg:rounded-lg lg:h-4/12 md:w-6/12 w-8/12 lg:w-3/12 lg:ml-8 md:w-6/12 w-8/12  rounded-sm"
								:src="url+annonce.photos[3].path"
							/>
							<img
								v-if="annonce.photos[4]"
								class="object-cover lg:static lg:mt-8 lg:rounded-lg lg:h-4/12 md:w-6/12 w-8/12 lg:w-3/12 lg:ml-8 md:w-6/12 w-8/12  rounded-sm"
								:src="url+annonce.photos[4].path"
							/>

						</div>
					</div>
				</div>

			</div>
			<div class=" mt-6 py-4 ">
				<div class=" mb-5">
					<p class="text-purple-800 text-2xl text-center lg:text-left font-bold">Information</p>
					<div class="mt-4 lg:flex lg:flex-wrap block text-center lg:text-left justify-between">
						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Prix
										:</span> {{ annonce.price }}€</p>
						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Année :</span>
							{{ annonce.anneeCirculation }}</p>
						<p class="xl:text-base text-2xl"> <span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Marque
										:</span>
							{{ annonce.Modele.marque.nom }}</p>


						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Modèle</span>
							{{ annonce.Modele.name }}</p>
						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Carburant:
									</span>
							{{ annonce.Carburant.libelle }}
						</p>
						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Kilométrage : </span>
							{{ annonce.kilometrage }} km
						</p>

					</div>
					<div class="mt-4 lg:flex lg:flex-wrap block text-center lg:text-left justify-between">
						<p class="xl:text-base text-2xl mt-3"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Date de l'annonce : </span>
							{{ dateAnnonce[0] }}
						</p>
					</div>
				</div>

				<div class=" text-left ">
					<p
						class="text-2xl sm:mt-4 lg:mt-0 font-bold text-purple-800 ">
						Description Complete :</p>
					<p class="xl:text-base text-2xl">{{ annonce.description }}</p>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: process.env.baseUrl,
			userId: localStorage.getItem('userId'),
			userRoles: localStorage.getItem('userRoles'),
		}
	},
	async asyncData({$axios, params}) {
		const data = await $axios.get(
			`/api/annonces/${params.id}`
		);
		return {
			annonce: data['data'],
			professionnel: data['data']['Garage']['Professionnel'],
			dateAnnonce: new Date(data['data'].dateAnnonce).toISOString().split('T'),
			parameters: params
		}
	}
}
</script>

<style scoped>

</style>
