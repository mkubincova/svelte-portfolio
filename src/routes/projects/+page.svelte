<script>
	import { projects } from '$lib/projects';
	import { ProjectCard } from '$lib/components';
</script>

<h1 class="text-4xl font-bold">Projects</h1>
<div class="grid grid-cols-[repeat(auto-fit,_minmax(50ch,_auto))] gap-4 py-6">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
