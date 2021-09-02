<template>

</template>

<script>
export default {
	name: "index",

	mounted() {
		if(localStorage.getItem("userRoles") === 'ROLE_ADMIN' || localStorage.getItem('userRoles') === 'ROLE_SUPER_ADMIN')
		{
			this.$ga.page(this.$router)
		} else {
			this.$router.push('/');
		}
	},
}
</script>
