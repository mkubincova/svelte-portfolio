<script>
	import { cv_url, miniApps, projects } from '$lib/constants';
	import Icon from '@iconify/svelte';
</script>

<div class="x-container py-8 space-y-8">
	<div id="about" class="x-container-content-wide text-center">
		<h1>Hi, I'm Magda</h1>
		<h2 class="text-blue-500">Fullstack Web Developer</h2>
		<p class="x-text-header mt-4 w-[55ch] mx-auto text-pretty">
			I specialize in creating <strong>user-centered</strong> web applications that are both
			<strong>functional</strong> and enjoyable to use. Over the past <strong>4 years</strong>, I've
			worked on projects ranging from research tools to AI-driven platforms, always with a focus on
			turning ideas into
			<strong>meaningful digital products</strong>.
		</p>
		<a href={cv_url} class="x-btn mx-auto"
			><Icon icon="ph:download-simple" width={20} />Download CV</a
		>
	</div>
	<div id="projects" class="x-container-content-wide mt-16">
		<h2>Recent Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each projects as project}
				<div class="border rounded-lg p-4">
					<h3 class="font-bold">{project.name}</h3>
					<img src={project.logo_url} alt="" class="w-full h-auto mb-2" />
					<img src={project.image_url} alt="" class="w-full h-auto mb-2" />
					<p>{project.description}</p>
					<ul class="list-disc pl-5">
						{#each project.technologies as tech}
							<li>{tech}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
	<div id="mini-apps" class="x-container-content-wide">
		<h2>Mini Apps</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each miniApps as project}
				<div class="border rounded-lg p-4">
					<h3 class="font-bold">{project.name}</h3>
					<img src={project.image_url} alt="" class="w-full h-auto mb-2" />
					<p>{project.description}</p>
					<a href={project.demo_url} class="x-btn">View Project</a>
					<a href={project.repository_url} class="x-btn">View Code</a>
					<ul class="list-disc pl-5">
						{#each project.technologies as tech}
							<li>{tech}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>
