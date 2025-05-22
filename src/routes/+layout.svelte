<script lang="ts">
	import '../app.css';
	import { Navigation, Footer, Sidebar } from '$lib/components';
	let { children } = $props();
</script>

<div class="h-screen bg-secondary text-primary lg:pl-[var(--sidebar-w)]">
	<a
		href="#main"
		class="fixed top-full left-0 right-0 text-center bg-accent p-2 z-100 focus:top-0 text-link"
		>Skip to main content</a
	>
	<Sidebar>
		<Navigation />
		<Footer />
	</Sidebar>
	<main id="main" class="overflow-y-auto h-full pt-[var(--header-h)] lg:pt-0">
		{@render children()}
	</main>
</div>
