<script>
	import { projects } from '$lib/projects';
	import { ProjectCard } from '$lib/components';
</script>

<div class="page-container">
	<h1 class="text-4xl font-bold">Projects</h1>
	<div class="grid gap-6 py-6">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
