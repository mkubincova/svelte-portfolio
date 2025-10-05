<script>
	import Icon from '@iconify/svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="page-content flex items-center justify-between py-2">
		<p class="text-sm">&copy; {currentYear} Magdaléna Kubincová</p>
		<!-- <p class="m-0 font-bold">mkubincova@proton.me</p>
		<div class="flex items-center gap-4">
			<a
				href="https://github.com/mkubincova"
				target="_blank"
				class="icon-btn btn-primary"
				aria-label="GitHub"><Icon icon="ph:github-logo" width={20} /></a
			>
			<a
				href="https://www.linkedin.com/in/mkubincova"
				target="_blank"
				class="icon-btn btn-primary"
				aria-label="LinkedIn"><Icon icon="ph:linkedin-logo" width={20} /></a
			>
		</div> -->
	</div>
</footer>
