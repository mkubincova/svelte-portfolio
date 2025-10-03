<script>
	import CardMiniApp from '$lib/components/CardMiniApp.svelte';
	import CardProject from '$lib/components/CardProject.svelte';
	import { cv_url, miniApps, projects } from '$lib/constants';
	import Icon from '@iconify/svelte';

	const recentProjects = projects.slice(0, 5);
</script>

<div class="page-content py-8">
	<div id="about" class="text-center">
		<h1>Hi, I'm Magda</h1>
		<h2 class="text-primary text-2xl mt-1">Fullstack Web Developer</h2>
		<p class="text-lg leading-7 w-[55ch] mx-auto my-4">
			I specialize in creating <strong>user-centered</strong> web applications that are both
			<strong>functional</strong> and enjoyable to use. Over the past <strong>4 years</strong>, I've
			worked on projects ranging from research tools to AI-driven platforms, always with a focus on
			turning ideas into
			<strong>meaningful digital products</strong>.
		</p>
		<a href={cv_url} class="btn mx-auto"><Icon icon="ph:download-simple" width={20} />Download CV</a
		>
	</div>
	<div id="projects" class="section">
		<h2>Recent Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
			{#each recentProjects as project, index}
				<CardProject {project} {index} />
			{/each}
		</div>
	</div>
	<div id="mini-apps" class="section">
		<h2>Mini Apps</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
			{#each miniApps as project}
				<CardMiniApp {project} />
			{/each}
		</div>
	</div>
</div>
