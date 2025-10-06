<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
	export let index: number;
</script>

<div class="relative mt-8" class:md:col-span-2={index === 0}>
	<div class={`h-full rounded-2xl p-4 flex flex-col ${project.card_styles}`}>
		<h3 class={project.heading_color} class:sm:text-3xl={index === 0}>{project.name}</h3>
		<small>{project.client}</small>
		<p class="my-4 flex-1 text-sm" class:md:text-base={index === 0}>{project.description}</p>
		<ul class="flex flex-wrap gap-2">
			{#each project.technologies as tech}
				<li class="tag">{tech}</li>
			{/each}
		</ul>
	</div>
	<img
		src={project.logo_url}
		alt={`${project.name} logo`}
		class={`absolute -top-5 right-5 w-auto h-10 shadow ${project.logo_styles ?? 'bg-white p-2'}`}
	/>
</div>
