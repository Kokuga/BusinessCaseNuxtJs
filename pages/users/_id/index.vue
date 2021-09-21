<template>
	<div class="block bg-gray-100 py-4 lg:px-32 px-16 w-screen">
		<div class="flex justify-between">
			<nuxt-link
				class="break-words text-gray-100 rounded-2xl mt-20 p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125 "
				:to="{name : 'users-id-edit', params: {id: this.$route.params.id}}">Modifier mes informations
			</nuxt-link>

			<nuxt-link
				class="break-words text-gray-100 rounded-2xl mt-20 p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125 "
				:to="{name : 'users-id-delete', params: {id: this.$route.params.id}}">Supprimer mon compte
			</nuxt-link>
		</div>
		<div
			class="mt-8 sm:mt-4 py-5 px-8 bg-white rounded-lg border-2 border-transparent hover:border-purple-800 cursor-pointer lg:shadow">
			<h1 class="text-center text-4xl font-semibold text-gray-900">Mon Profil</h1>
			<div class="mt-8">
				<div

				>
					<div class="flex-shrink-0">
						<div class="flex justify-evenly pb-1/12 lg:pb-0">
							<img
								class="object-cover lg:static lg:rounded-lg lg:h-4/12 md:w-6/12 w-8/12 lg:w-4/12 md:w-6/12 w-8/12  rounded-sm"
								src="https://random.imagecdn.app/200/200"
							/>
						</div>
					</div>
				</div>

			</div>
			<div class=" mt-6 py-4 ">
				<div class=" mb-5">
					<p class="text-purple-800 text-2xl text-center lg:text-left font-bold">Informations</p>
					<div class="mt-4 lg:flex block text-center lg:text-left justify-between">
						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Nom
										:</span> {{ user.last_name }}</p>
						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Prénom :</span>
							{{ user.first_name }} </p>
						<p class="xl:text-base text-2xl"><span
							class="text-xl font-bold text-purple-800  xl:text-base text-2xl">Email :</span>
							{{ user.email }}</p>
					</div>
				</div>
				<div class=" mb-5">
					<p class="text-purple-800 text-2xl text-center lg:text-left font-bold">Coordonnées</p>
					<div class="mt-4 lg:flex block text-center lg:text-leftr">
						<p class="xl:text-base text-2xl"><span
							class="text-xl ml-0 font-bold text-purple-800  xl:text-base text-2xl">Téléphone
                            :</span>
							{{ user.phone }}</p>

					</div>
				</div>


			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "userIndex",

	mounted() {
		if (this.$route.params.id !== localStorage.getItem('userId')) {
			this.$router.push({name: "index"});
		}
	},


	async asyncData({$axios, params}) {
		const data = await $axios.get(
			`/api/professionnels/${params.id}`, {
				'headers': {
					'Authorization': localStorage.getItem('authToken')
				}
			}
		);

		return {
			user: data['data'],

		}
	},

}
</script>

<style scoped>

</style>
