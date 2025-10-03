<script>
	import Icon from '@iconify/svelte';
</script>

<nav class="sticky top-0 z-50 bg-background">
	<div class="x-container flex flex-wrap items-center py-4">
		<p class="font-bold m-0 text-xl">Magdaléna Kubincová</p>
		<ul class="flex items-center gap-4 ml-auto">
			<li>
				<a href="/#about" class="x-nav-link">About me</a>
			</li>
			<li>
				<a href="/#projects" class="x-nav-link">Projects</a>
			</li>
			<li>
				<a href="/#mini-apps" class="x-nav-link">Mini apps</a>
			</li>
			<li>
				<a href="mailto:mkubincova@proton.me" class="x-btn"
					><Icon icon="ph:envelope" width={20} />Get in touch</a
				>
			</li>
		</ul>
	</div>
</nav>
