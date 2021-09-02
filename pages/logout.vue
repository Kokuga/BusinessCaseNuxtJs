<template>

</template>

<script>
export default {
	name: "logout",

	mounted() {
		localStorage.clear();
		this.$router.push({ name: "index" });
	}


}
</script>

<style scoped>

</style>
