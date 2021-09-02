<template>

</template>

<script>
export default {
	name: "delete",

	mounted() {
		this.asyncData()
	},

	methods: {
		async asyncData() {

			const data = await this.$axios.delete(
				`/api/users/${this.$route.params.id}`, {
					'headers': {
						'Authorization': localStorage.getItem('authToken')
					}
				}
			)
				.then((res) => {
					this.$router.push({name:'index'})
				});

		},
	},
}
</script>

<style scoped>

</style>
