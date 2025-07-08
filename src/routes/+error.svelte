<script lang="ts">
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';
</script>

<div class="flex items-center justify-center h-full">
	<div class="text-center mb-[15vh]">
		{#if page.status === 404}
			<span class="text-gray-400"> <Icon icon="ph:ghost-fill" class="size-20 mx-auto mb-2" /></span>
			<h1 class="text-2xl mb-1 font-bold">Nothing to see here</h1>
		{:else}
			<span class="text-error">
				<Icon icon="ph:warning-octagon-fill" class="size-20 mx-auto mb-2" /></span
			>
			<h1 class="text-2xl mb-1 font-bold">{page.status}</h1>
			<p>{page.error?.message}</p>
		{/if}
	</div>
</div>
