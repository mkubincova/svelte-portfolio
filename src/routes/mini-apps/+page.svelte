<script>
	import { miniApps } from '$lib/constants';
	import Icon from '@iconify/svelte';
</script>

<div class="x-container py-8">
	<div class="x-container-content">
		<h1>Mini Apps</h1>
		<p class="x-text-header">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam ad cum ea. Sint
			consequatur animi labore natus reprehenderit inventore, fugiat corrupti dolore error esse amet
			molestiae placeat molestias quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Amet quibusdam ad cum ea. Sint consequatur animi labore natus reprehenderit inventore.
		</p>
	</div>
	<section class="x-container-content-wide">
		<div class="grid grid-cols-[repeat(auto-fill,_minmax(150px,_auto))] gap-6 mt-10">
			{#each miniApps as app}
				<a
					href={app.url}
					target="_blank"
					class="x-card p-2 flex flex-col aspect-square items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 {app.background}"
				>
					<Icon icon={`${app.icon}-duotone`} class="size-1/2" />
					<h3 class="text-center opacity-80">{app.name}</h3>
				</a>
			{/each}
		</div>
	</section>
</div>
