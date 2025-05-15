<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/state';

	const app = $derived(page.url.searchParams.get('app'));
	const url = $derived(`https://${app}.vercel.app/`);
</script>

<div class="flex flex-col gap-2 h-full">
	<a href={url} target="_blank" class="text-link ml-auto flex items-center gap-1 px-2"
		>Open in new tab<Icon icon="ph:arrow-square-out-bold" /></a
	>
	<iframe src={url} title={app} frameborder="0" class="flex-1 border-2 rounded-xl"></iframe>
</div>
