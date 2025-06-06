<script>
	import Icon from '@iconify/svelte';

	const year = new Date().getFullYear();

	const appLinks = [
		{
			href: 'https://recipe-app-frontend-iota.vercel.app/',
			icon: 'ph:chef-hat',
			label: 'Cook book'
		},
		{
			href: 'https://weather-app-mkubincova.vercel.app/',
			icon: 'ph:cloud-sun',
			label: 'Weather'
		}
	];
	const pageLinks = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/about',
			label: 'About me'
		},
		{
			href: '/projects',
			label: 'Projects'
		}
	];
	const usefulLinks = [
		{
			href: 'https://docs.google.com/document/d/1pCEdBEHtNjQRjO062Wj673r36v_sgsN7xIMLCdFuL3U/export?format=pdf',
			icon: 'ph:download-simple',
			label: 'Download CV'
		},
		{
			href: 'https://github.com/mkubincova',
			icon: 'ph:github-logo',
			label: 'mkubincova'
		},
		{
			href: 'https://www.linkedin.com/in/mkubincova/',
			icon: 'ph:linkedin-logo',
			label: 'in/mkubincova'
		}
	];
</script>

<footer class="px-4 py-8 text-sm border-t border-t-gray-300 mt-auto">
	<div class="page-content flex flex-wrap gap-16 lg:gap-24">
		<div>
			<h2 class="mb-2 font-medium">Mini apps</h2>
			<ul class="flex flex-col gap-2 text-gray-400">
				{#each appLinks as { href, icon, label }}
					<li>
						<a {href} target="_blank" class="flex gap-1 items-center"><Icon {icon} />{label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<h2 class="mb-2 font-medium">Navigation</h2>
			<ul class="flex flex-col gap-2 text-gray-400">
				{#each pageLinks as { href, label }}
					<li>
						<a {href} target="_blank" class="flex gap-1 items-center">{label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<h2 class="mb-2 font-medium">Useful Links</h2>
			<ul class="flex flex-col gap-2 text-gray-400">
				{#each usefulLinks as { href, icon, label }}
					<li>
						<a {href} target="_blank" class="flex gap-1 items-center"><Icon {icon} />{label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex-1 self-end">
			<ul class="flex flex-col gap-2 items-end text-base">
				<li>
					<span class="flex gap-1 items-center ml-auto"
						><Icon icon="ph:envelope" class="size-5" />mkubincova@proton.me</span
					>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style scoped>
	a {
		@apply no-underline underline-offset-3 hover:underline;
	}
</style>
