<script lang="ts">
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<a
	href={`/projects#${project.name}`}
	class="x-card bg-foreground/5 shadow hover:shadow-lg transition-shadow duration-300"
>
	<img src="https://picsum.photos/680/350" alt="" class="mb-2" />
	<span class="block px-4 pb-2">
		<h3>{project.name}</h3>
		<p class="text-sm leading-4 opacity-70">{project.shortDescription}</p>
	</span>
</a>
