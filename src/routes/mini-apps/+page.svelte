<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/state';

	const app = $derived(page.url.searchParams.get('app'));
	const url = $derived(`https://${app}.vercel.app/`);
</script>

<div class="flex flex-col justify-center gap-2 h-full">
	{#if app}
		<a href={url} target="_blank" class="text-link ml-auto flex items-center gap-1 px-2"
			>Open in new tab<Icon icon="ph:arrow-square-out-bold" /></a
		>
		<iframe src={url} title={app} frameborder="0" class="flex-1 border-2 rounded-xl"></iframe>
	{:else}
		<div class="text-center mb-[15vh]">
			<Icon icon="ph:ghost-fill" class="size-20 mx-auto mb-4 opacity-30" />
			<h1 class="text-2xl mb-1 font-bold">Nothing to see here</h1>
			<p>Try one of the links in the left navigation :)</p>
		</div>
	{/if}
</div>
