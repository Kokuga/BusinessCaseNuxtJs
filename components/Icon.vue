<template>
	<!-- Svg sidebar -->
	<svg v-if="name === 'trello'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
		 stroke-width="2" viewBox="0 0 24 24">
		<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
		<path d="M7 7h3v9H7zM14 7h3v5h-3z"/>
	</svg>

	<svg v-else-if="name === 'dashboard'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
		<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
	</svg>
	<svg v-else-if="name === 'users'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
		<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
		<circle cx="9" cy="7" r="4"/>
		<path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
	</svg>

	<svg v-else-if="name === 'agencies'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
	>
		<circle cx="12" cy="12" r="10"/>
		<path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/>
	</svg>

	<svg v-else-if="name === 'mention'" xmlns="http://www.w3.org/2000/svg"
		 viewBox="0 0 16 16">
		<path fill="#444"
			  d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5S1.5 11.6 1.5 8 4.4 1.5 8 1.5zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
		<path fill="#444"
			  d="M9.9 10.3c-.5.4-1.2.7-1.9.7-1.7 0-3-1.3-3-3s1.3-3 3-3c.8 0 1.6.3 2.1.9l1.1-1.1c-.8-.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-.4 2.8-1l-.9-1.2z"/>
	</svg>

	<svg v-else-if="name === 'cgu'" xmlns="http://www.w3.org/2000/svg" fill="none"
		stroke="currentColor"
		stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
		viewBox="0 0 24 24">
		<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
		<path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
	</svg>


	<svg v-else-if="name === 'myproperties'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-activity" viewBox="0 0 24 24">
		<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
	</svg>

	<svg v-else-if="name === 'admin'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-grid" viewBox="0 0 24 24">
		<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
	</svg>

	<svg v-else-if="name === 'logout'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-log-out" viewBox="0 0 24 24">
		<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
	</svg>
	<!-- button -->
	<svg v-else-if="name === 'menu'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
		 viewBox="0 0 24 24">
		<path d="M3 12h18M3 6h18M3 18h18"/>
	</svg>

	<!-- Input text -->
	<svg v-else-if="name === 'search'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
		<circle cx="11" cy="11" r="8"/>
		<path d="M21 21l-4.35-4.35"/>
	</svg>
	<!-- Svg sidebar -->

	<!-- Svg menu -->
	<!-- Gps pin -->
	<svg v-else-if="name === 'pin'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
		 stroke-width="2" viewBox="0 0 24 24">
		<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
		<circle cx="12" cy="10" r="3"/>
	</svg>

	<!-- Description -->
	<svg v-else-if="name === 'layout'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
		<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
		<path d="M3 9h18M9 21V9"/>
	</svg>

	<svg v-else-if="name === 'tv'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
		 stroke-width="2" viewBox="0 0 24 24">
		<rect width="20" height="15" x="2" y="7" rx="2" ry="2"/>
		<path d="M17 2l-5 5-5-5"/>
	</svg>

	<svg v-else-if="name === 'column'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
		<path d="M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"/>
	</svg>

	<!-- Agencies -->
	<svg v-else-if="name === 'phone'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
		<path
			d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
	</svg>

	<svg v-else-if="name === 'mail'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
		 stroke-width="2" viewBox="0 0 24 24">
		<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
		<path d="M22 6l-10 7L2 6"/>
	</svg>

	<svg v-else-if="name === 'lock'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
		 stroke-width="2" viewBox="0 0 24 24">
		<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
		<path d="M7 11V7a5 5 0 0110 0v4"/>
	</svg>

	<!-- Landing page -->
	<svg v-else-if="name === 'login'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
		<path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
	</svg>

	<svg v-else-if="name === 'register'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
		 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
		<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
		<path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
	</svg>


	<!--Landing page -->
	<svg v-else-if="name === 'facebook'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
		 stroke-width="2" viewBox="0 0 24 24">
		<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
	</svg>

	<svg v-else-if="name === 'twitter'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
		 stroke-width="2" viewBox="0 0 24 24">
		<path
			d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
	</svg>

	<svg v-else-if="name === 'atsign'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
		 stroke-width="2" viewBox="0 0 24 24">
		<circle cx="12" cy="12" r="4"/>
		<path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"/>
	</svg>

</template>

<script>
export default {
	props: {
		name: {type: String, required: true}
	}
};
</script>
