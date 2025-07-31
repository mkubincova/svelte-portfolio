<script lang="ts">
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<div id={project.name} class="scroll-mt-16">
	<small class="opacity-80">{project.client} &#x2022; {project.duration}</small>
	<h2>{project.name}</h2>
	<img src="https://picsum.photos/680/350" alt="" class="mb-2" />
	<p>{project.description}</p>
	<p class="mb-4">Role: <strong>{project.role}</strong></p>
	<div class="flex gap-2 flex-wrap">
		{#each project.technologies as tag}
			<span class="x-tag">{tag}</span>
		{/each}
	</div>
</div>
