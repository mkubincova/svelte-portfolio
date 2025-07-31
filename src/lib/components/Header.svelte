<script>
	import { cv_url } from '$lib/constants';
	import Icon from '@iconify/svelte';
</script>

<nav class="sticky top-0 z-50 bg-background/40 backdrop-blur-2xl">
	<div class="x-container flex items-center justify-between py-2">
		<a href="/" aria-label="Homepage"><Icon icon="ph:dev-to-logo" width={50} height={50} /></a>
		<ul class="flex items-center gap-8">
			<li>
				<a href="/about" class="x-nav-link">About me</a>
			</li>
			<li>
				<a href="/projects" class="x-nav-link">Projects</a>
			</li>
			<li>
				<a href="/mini-apps" class="x-nav-link">Mini apps</a>
			</li>
			<li>
				<a href={cv_url} class="x-btn"><Icon icon="ph:download-simple" width={20} />Download CV</a>
			</li>
		</ul>
	</div>
</nav>
