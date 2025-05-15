<script lang="ts">
	import '../app.css';
	import { Navigation, Footer, Sidebar } from '$lib/components';
	let { children } = $props();
</script>

<div class="h-screen bg-secondary text-primary p-4">
	<Sidebar>
		<Navigation />
		<Footer />
	</Sidebar>
	<main class="overflow-auto h-full lg:ml-[calc(var(--sidebar-width))] pl-4 pt-8">
		{@render children()}
	</main>
</div>
