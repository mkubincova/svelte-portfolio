<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Magdaléna Kubincová</title>
	<meta property="og:title" content="Magdaléna Kubincová" />
	<meta
		property="og:description"
		content="Fullstack web developer specializing in user-centered web applications. Over 4 years of experience turning ideas into meaningful digital products."
	/>
	<meta property="og:image" content="/cover.png" />
	<meta property="og:url" content="https://mkubincova.vercel.app/" />
</svelte:head>

<div class="min-h-screen bg-background flex flex-col">
	<a
		href="#main"
		class="fixed top-full left-0 right-0 text-center bg-white p-2 z-100 focus:top-0 text-link"
		>Skip to main content</a
	>
	<Header />
	<main id="main" class="grow shrink basis-[0px]">
		{@render children()}
	</main>
	<Footer />
</div>
