<script>
	import CardMiniApp from '$lib/components/CardMiniApp.svelte';
	import CardProject from '$lib/components/CardProject.svelte';
	import { cv_url, miniApps, projects } from '$lib/constants';
	import Icon from '@iconify/svelte';
</script>

<div class="page-content pb-20">
	<section id="about" class="text-center pt-20">
		<h1>Hi, I'm Magda</h1>
		<h2 class="text-accent text-xl sm:text-2xl mt-1">Fullstack Web Developer</h2>
		<p class="leading-text mx-auto my-4">
			I specialize in creating <strong>user-centered</strong> web applications that are both
			<strong>functional</strong> and enjoyable to use. Over the past <strong>4 years</strong>, I've
			worked on projects ranging from research tools to AI-driven platforms, always with a focus on
			turning ideas into
			<strong>meaningful digital products</strong>.
		</p>
		<a href={cv_url} class="btn btn-primary mx-auto"
			><Icon icon="ph:download-simple" width={20} />Download CV</a
		>
	</section>

	<section id="projects" class="section">
		<h2>Recent Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each projects as project, index}
				<CardProject {project} {index} />
			{/each}
		</div>
	</section>

	<section id="mini-apps" class="section">
		<h2>Mini Apps</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each miniApps as project}
				<CardMiniApp {project} />
			{/each}
		</div>
	</section>

	<section id="contact" class="section">
		<h2>Contact</h2>
		<p class="leading-text mx-auto text-center">
			I'm always open to new opportunities — feel free to reach out at
			<button
				class="cursor-pointer font-bold text-accent inline-flex items-center gap-1"
				title="Copy to clipboard"
				on:click={() => {
					navigator.clipboard.writeText('mkubincova@proton.me');
					window.alert('Email copied to clipboard');
				}}>mkubincova@proton.me <Icon icon="ph:copy-simple" /></button
			>
		</p>
	</section>
</div>
