<script lang="ts">
	import type { Project } from '$lib/projects';

	let { project }: { project: Project } = $props();
</script>

<div class="card bg-blue text-blue-dark shadow-blue-dark/30 space-y-4" id={project.name}>
	<div class="flex justify-between items-center gap-2">
		<h2 class="text-2xl font-bold">{project.name}</h2>
		<span class="text-sm shrink-0">{project.duration}</span>
	</div>
	<p class="opacity-80 -mt-4">{project.client}</p>
	<p>{project.description}</p>
	<p>Role: <span class="font-bold">{project.role}</span></p>
	<ul class="flex flex-wrap gap-1 mt-2">
		{#each project.technologies as technology}
			<li class="bg-white px-2 py-0.5 rounded-full">{technology}</li>
		{/each}
	</ul>
</div>
