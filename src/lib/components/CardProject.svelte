<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
	export let index: number;
</script>

<div class={`rounded-lg p-4 bg-primary/20 ${index === 0 ? 'md:col-span-2' : ''}`}>
	<h3 class="font-bold">{project.name}</h3>
	<img src={project.logo_url} alt="" class="w-full h-auto mb-2" />
	<img src={project.image_url} alt="" class="w-full h-auto mb-2" />
	<p class="text-sm">{project.description}</p>
	<ul class="flex flex-wrap gap-2 my-2">
		{#each project.technologies as tech}
			<li class="tag">{tech}</li>
		{/each}
	</ul>
</div>
