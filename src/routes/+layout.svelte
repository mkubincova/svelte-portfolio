<script lang="ts">
	import '../app.css';
	import { Navigation, Footer, Sidebar } from '$lib/components';
	let { children } = $props();
</script>

<div class="h-screen bg-secondary text-primary p-4">
	<a
		href="#main"
		class="fixed top-full left-0 right-0 text-center bg-accent p-2 z-100 focus:top-0 text-link"
		>Skip to main content</a
	>
	<Sidebar>
		<Navigation />
		<Footer />
	</Sidebar>
	<main
		id="main"
		class="overflow-auto px-4 h-full w-5xl mx-w-full mx-auto lg:ml-[calc(var(--sidebar-w))] mt-[var(--header-h)] lg:pl-4"
	>
		{@render children()}
	</main>
</div>
