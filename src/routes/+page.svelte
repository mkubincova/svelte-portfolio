<script>
	import { cv_url, miniApps, projects } from '$lib/constants';
	import Icon from '@iconify/svelte';
</script>

<div class="x-container py-8 space-y-8">
	<div id="about" class="x-container-content-wide flex items-center gap-8">
		<div class="w-2/3">
			<h1>Magdaléna Kubincová</h1>
			<p class="x-text-header">
				<strong>Full-stack</strong> web developer with 4+ years of experience delivering scalable
				web applications and AI-driven platforms. Skilled in modern <strong>JavaScript</strong>
				frameworks and libraries, <strong>cloud</strong> technologies, and building
				<strong>user-centered</strong> digital products.
			</p>
			<a href={cv_url} class="x-btn"><Icon icon="ph:download-simple" width={20} />Download CV</a>
		</div>
		<div class="flex-1 border rounded-xl rotate-3 overflow-hidden shadow-lg">
			<img src="profile-pic.png" alt="" class="w-full h-full object-contain" />
		</div>
	</div>
	<div id="projects" class="x-container-content-wide">
		<h2>Projects</h2>
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
