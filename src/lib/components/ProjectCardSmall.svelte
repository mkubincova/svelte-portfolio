<script lang="ts">
	import type { Project } from '$lib/projects';

	let { project }: { project: Project } = $props();
</script>

<a
	href={`/projects#${project.name}`}
	class="card bg-blue text-blue-dark shadow-blue-dark/30 space-y-4 flex-1 hover:scale-102 transition-transform"
	id={project.name}
>
	<h2 class="text-xl font-bold">{project.name}</h2>
	<p class="opacity-80 -mt-4 text-sm">{project.client}</p>
	<p class="text-sm">{project.shortDescription}</p>
</a>
