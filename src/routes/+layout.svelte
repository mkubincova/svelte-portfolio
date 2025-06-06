<script lang="ts">
	import '../app.css';
	import { Navigation, Footer, Sidebar } from '$lib/components';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<a
		href="#main"
		class="fixed top-full left-0 right-0 text-center bg-white p-2 z-100 focus:top-0 text-link"
		>Skip to main content</a
	>
	<Header />
	<!-- <Sidebar>
		<Navigation />
		<Footer />
	</Sidebar> -->
	<main id="main" class="overflow-y-auto bg-red-400">
		{@render children()}
	</main>
	<Footer />
</div>
