<script>
	import Icon from '@iconify/svelte';
</script>

<nav class="sticky top-0 z-50 bg-background">
	<div class="x-container flex items-center justify-between py-4">
		<ul class="flex items-center gap-8">
			<li>
				<a href="/#about" class="x-nav-link">About me</a>
			</li>
			<li>
				<a href="/#projects" class="x-nav-link">Projects</a>
			</li>
			<li>
				<a href="/#mini-apps" class="x-nav-link">Mini apps</a>
			</li>
		</ul>
		<div class="flex items-center gap-4">
			<a href="https://github.com/mkubincova" target="_blank" class="x-icon-btn"
				><Icon icon="ph:github-logo" width={20} /></a
			>
			<a href="https://www.linkedin.com/in/mkubincova" target="_blank" class="x-icon-btn"
				><Icon icon="ph:linkedin-logo" width={20} /></a
			>
			<a href="mailto:mkubincova@proton.me" class="x-icon-btn"
				><Icon icon="ph:envelope" width={20} /></a
			>
		</div>
	</div>
</nav>
