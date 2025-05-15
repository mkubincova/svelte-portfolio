<script>
	import Icon from '@iconify/svelte';

	let isMenuOpen = $state(false);
	let { children } = $props();
</script>

<div
	class={`w-[var(--sidebar-width)] bg-primary text-secondary rounded-lg shadow-xl fixed top-[var(--sidebar-offset)] bottom-[var(--sidebar-offset)] left-[var(--sidebar-offset)] transition-transform ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-[calc(var(--sidebar-width)+var(--sidebar-offset))]'} lg:translate-x-0`}
>
	<button
		onclick={() => (isMenuOpen = !isMenuOpen)}
		class="lg:hidden cursor-pointer absolute top-0 -right-10 bg-primary text-secondary rounded-full p-2 shadow-lg"
		><Icon icon={isMenuOpen ? 'ph:x-bold' : 'ph:list-bold'} width={16} height={16} /></button
	>
	<div class="flex flex-col h-full overflow-auto">{@render children()}</div>
</div>
