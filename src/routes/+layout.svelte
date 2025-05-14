<script lang="ts">
	import '../app.css';
	import { Header, Footer, Navigation } from '$lib/components';
	let { children } = $props();
</script>

<div class="h-screen grid lg:grid-cols-[300px_auto]">
	<Header class="col-span-full" />
	<Navigation class="hidden lg:flex border-r" />
	<main class="overflow-auto">
		{@render children()}
	</main>
	<Footer class="col-span-full" />
</div>
