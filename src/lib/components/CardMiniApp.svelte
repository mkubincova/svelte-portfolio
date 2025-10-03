<script lang="ts">
	import type { Project } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let project: Project;
</script>

<div class="relative">
	<div class="rounded-xl p-4 inverted-radius bg-foreground/5 h-full flex flex-col">
		<h3 class="font-bold mb-4">{project.name}</h3>
		<img src={project.image_url} alt="" class="w-full h-auto rounded-lg border" />
		<p class="text-sm my-2 flex-1">{project.description}</p>
		<ul class="flex flex-wrap gap-2">
			{#each project.technologies as tech}
				<li class="tag">{tech}</li>
			{/each}
		</ul>
	</div>
	<div class="absolute top-0 right-0 flex gap-2 pr-1.5 pt-1">
		<a href={project.repository_url} target="_blank" rel="noopener noreferrer" class="icon-btn"
			><Icon icon="ph:code" width={20} /></a
		>
		<a href={project.demo_url} target="_blank" rel="noopener noreferrer" class="icon-btn bg-primary"
			><Icon icon="ph:arrow-up-right" width={20} /></a
		>
	</div>
</div>
