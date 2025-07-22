<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<div class="h-screen overflow-y-auto bg-background flex flex-col">
	<a
		href="#main"
		class="fixed top-full left-0 right-0 text-center bg-white p-2 z-100 focus:top-0 text-link"
		>Skip to main content</a
	>
	<Header />
	<main id="main" class="pt-8 grow shrink basis-[0px]">
		{@render children()}
	</main>
</div>
