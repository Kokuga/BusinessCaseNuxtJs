<template>
	<div class="font-display lg:flex min-h-screen">
		<layout-header/>

		<Nuxt/>
	</div>
</template>

<script>
import LayoutHeader from "../components/LayoutHeader";

export default {
	components: {LayoutHeader},

}
</script>
