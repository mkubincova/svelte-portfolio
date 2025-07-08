<script>
	import Icon from '@iconify/svelte';
</script>

<nav
	class="sticky top-0 z-50 flex items-center justify-between h-[var(--header-h)] px-8 backdrop-blur-lg bg-white/10"
>
	<a href="/" class="flex-1"><Icon icon="ph:dev-to-logo" width={50} height={50} /></a>
	<ul class="flex gap-8">
		<li>
			<a href="/">About me</a>
		</li>
		<li>
			<a href="/">Projects</a>
		</li>
		<li>
			<a href="/">Mini apps</a>
		</li>
	</ul>
	<div class="flex-1 flex justify-end">
		<a href="/" class="bg-black text-white px-4 py-2 text-sm rounded-4xl">Get in touch!</a>
	</div>
</nav>
