<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/constants';
</script>

<div class="x-container py-8">
	<div class="x-container-content">
		<h1>Recent projects</h1>
		<p class="x-text-header">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam ad cum ea. Sint
			consequatur animi labore natus reprehenderit inventore, fugiat corrupti dolore error esse amet
			molestiae placeat molestias quam.
		</p>
	</div>
	<!-- <img src="https://picsum.photos/1080/500" alt="" class="x-container-content-wide rounded-xl" /> -->

	<div class="x-container-content my-6 flex flex-col gap-12">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
