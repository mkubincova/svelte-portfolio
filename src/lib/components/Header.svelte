<script>
	import Icon from '@iconify/svelte';
</script>

<nav class="sticky top-0 z-50 bg-background">
	<div class="page-content flex flex-wrap items-center py-4">
		<p class="font-bold m-0 text-xl">Magdaléna Kubincová</p>
		<ul class="flex items-center gap-4 ml-auto">
			<li>
				<a href="/#about" class="nav-link">About me</a>
			</li>
			<li>
				<a href="/#projects" class="nav-link">Projects</a>
			</li>
			<li>
				<a href="/#mini-apps" class="nav-link">Mini apps</a>
			</li>
			<li>
				<a href="mailto:mkubincova@proton.me" class="btn"
					><Icon icon="ph:envelope" width={20} />Get in touch</a
				>
			</li>
		</ul>
	</div>
</nav>
