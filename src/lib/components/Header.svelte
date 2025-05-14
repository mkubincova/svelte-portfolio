<script>
	import Icon from '@iconify/svelte';
	import { Navigation } from '$lib/components';

	let isMenuOpen = $state(false);
	let { class: className = '' } = $props();
</script>

<nav class={`border-b flex items-center justify-between lg:justify-center px-3 ${className}`}>
	<button onclick={() => (isMenuOpen = !isMenuOpen)} class="lg:hidden cursor-pointer"
		><Icon icon={isMenuOpen ? 'ph:x' : 'ph:list'} width={32} height={32} /></button
	>
	<div
		class={`lg:hidden w-[300px] fixed top-[51px] bottom-[73px] sm:bottom-[45px] left-0 bg-white border-r transition-transform ease-in-out ${isMenuOpen ? 'translate-x-[0]' : '-translate-x-[100%]'}`}
	>
		<Navigation />
	</div>
	<a href="/"><Icon icon="ph:dev-to-logo" width={50} height={50} /></a>
</nav>
