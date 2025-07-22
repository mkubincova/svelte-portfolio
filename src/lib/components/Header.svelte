<script>
	import Icon from '@iconify/svelte';
</script>

<nav class="sticky top-0 z-50 bg-background/40 backdrop-blur-2xl">
	<div class="x-container flex items-center justify-between py-2">
		<a href="/" aria-label="Homepage"><Icon icon="ph:dev-to-logo" width={50} height={50} /></a>
		<ul class="flex gap-8">
			<li>
				<a href="/" class="x-nav-link">About me</a>
			</li>
			<li>
				<a href="/projects" class="x-nav-link">Projects</a>
			</li>
			<li>
				<a href="/" class="x-nav-link">Mini apps</a>
			</li>
			<li>
				<a href="/" class="x-btn">Get in touch!</a>
			</li>
		</ul>
	</div>
</nav>
