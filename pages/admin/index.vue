<template>
	<div class="block bg-gray-100  w-screen">
		<div class="block bg-gray-100 h-full">
			<div class="bg-white pt-4 py-10 mt-5 mx-32 shadow-sm border rounded-lg  hover:border-purple-800">
				<div class="mt-4 text-center mb-16">
					<p class="text-3xl font-semibold text-gray-900">Rechercher</p>
					<div class="mx-12 flex mt-5 justify-between">
						<nuxt-link
							:to="{name: 'admin-properties'}"
							class="text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
						>Voir les annonces
						</nuxt-link>
						<nuxt-link
							:to="{name: 'admin-garages'}"
							class="text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
						>Voir les garages
						</nuxt-link>
						<nuxt-link
							:to="{name: 'admin-users'}"
							class="text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
						>Voir les professionnels
						</nuxt-link>
					</div>
					<div class="mx-12 flex mt-5 justify-between">
						<nuxt-link
							:to="{name: 'users-create'}"
							class="text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
						>Créer un utilisateur
						</nuxt-link>
					</div>
					<div class="mx-12 flex mt-5 justify-between">
						<nuxt-link
							:to="{name: 'googleAnalytics'}"
							class="text-gray-100 rounded-2xl p-3 bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:transform hover:scale-125"
						>Google Analytics
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "index"
}
</script>

<style scoped>

</style>
