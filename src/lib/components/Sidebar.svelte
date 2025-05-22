<script>
	import Icon from '@iconify/svelte';

	let isMenuOpen = $state(false);
	let { children } = $props();
</script>

<div
	class="bg-primary text-secondary fixed top-0 left-0 right-0 lg:right-auto min-w-[var(--sidebar-w)] h-[var(--header-h)]"
>
	<button onclick={() => (isMenuOpen = !isMenuOpen)} class="cursor-pointer px-5 py-4 lg:hidden"
		><Icon icon={isMenuOpen ? 'ph:x-bold' : 'ph:list-bold'} width={24} height={24} /></button
	>
	<a href="/" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static"
		><Icon icon="ph:dev-to-logo" width={50} height={50} class="lg:mx-auto lg:mt-4" /></a
	>
</div>
<div
	class={`w-[var(--sidebar-w)] bg-primary text-secondary pt-4 fixed top-[var(--header-h)] bottom-0 left-0 transition-transform ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-[calc(var(--sidebar-w))]'} lg:translate-x-0`}
>
	<div class="flex flex-col h-full overflow-auto">
		{@render children()}
	</div>
</div>
