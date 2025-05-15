<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/state';

	const pageLinks = [
		{
			href: '/',
			icon: 'ph:identification-card',
			label: 'Overview'
		},
		{
			href: '/projects',
			icon: 'ph:archive',
			label: 'Projects'
		},
		{
			href: 'https://docs.google.com/document/d/1pCEdBEHtNjQRjO062Wj673r36v_sgsN7xIMLCdFuL3U/export?format=pdf',
			icon: 'ph:download-simple',
			label: 'Download CV'
		}
	];
</script>

<nav class="flex flex-col gap-12 p-4">
	<a href="/"><Icon icon="ph:dev-to-logo" class="mx-auto" width={60} height={60} /></a>
	<div>
		<h2 class="font-bold text-sm px-2 mb-1 opacity-70">About me</h2>
		<ul class="menu-vertical">
			{#each pageLinks as { href, icon, label }}
				<li>
					<a {href} class:active={page.url.pathname === href}><Icon {icon} />{label}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h2 class="font-bold text-sm px-2 mb-1 opacity-70">Contact</h2>
		<ul class="menu-vertical">
			<li>
				<span class="flex gap-2 p-2"
					><Icon icon="ph:envelope" class="size-6" />mkubincova@proton.me</span
				>
			</li>
			<li>
				<a href="https://github.com/mkubincova" target="_blank"
					><Icon icon="ph:github-logo" />mkubincova</a
				>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/mkubincova/" target="_blank"
					><Icon icon="ph:linkedin-logo" />in/mkubincova</a
				>
			</li>
		</ul>
	</div>
	<div>
		<h2 class="font-bold text-sm px-2 mb-1 opacity-70">Mini apps</h2>
		<ul class="menu-vertical">
			<li>
				<a href="https://recipe-app-frontend-iota.vercel.app/" target="_blank"
					><Icon icon="ph:chef-hat" />Cook book</a
				>
			</li>
			<li>
				<a href="https://weather-app-mkubincova.vercel.app/" target="_blank"
					><Icon icon="ph:cloud-sun" />Weather</a
				>
			</li>
		</ul>
	</div>
</nav>
