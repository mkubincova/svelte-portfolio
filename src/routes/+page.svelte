<script>
	import { Hello, Cv, Work, ProjectCardSmall } from '$lib/components';
	import { projects } from '$lib/projects';
	import Icon from '@iconify/svelte';
</script>

<div class="grid gap-6 md:gap-8 grid-cols-2 xl:grid-cols-3 xl:grid-rows-[1fr_1fr_auto]">
	<div class="card col-span-2 @container shadow-none"><Hello /></div>
	<div class="card bg-green text-green-dark min-h-24 col-span-2 xl:row-span-2 xl:col-span-1">
		<Work />
	</div>
	<div class="card col-span-2 bg-purple text-purple-dark"><Cv /></div>
	<div class="col-span-3 shadow-none">
		<h2 class="text-2xl font-bold mb-4">Recent projects</h2>
		<div class="grid grid-cols-[repeat(auto-fit,_minmax(250px,_auto))] gap-4">
			{#each projects.slice(0, 3) as project}
				<ProjectCardSmall {project} />
			{/each}
		</div>

		<a
			href="/projects"
			class="text-nowrap mt-4 flex gap-1 items-center justify-end transition -translate-x-1 hover:translate-x-0"
		>
			More <Icon icon="ph:arrow-right-bold" /></a
		>
	</div>
</div>
