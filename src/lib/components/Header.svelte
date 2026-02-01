<script lang="ts">
	import { onMount } from 'svelte';

	const menuItems = [
		{ name: 'About me', href: '/#about' },
		{ name: 'Projects', href: '/#projects' },
		{ name: 'Mini Apps', href: '/#mini-apps' },
		{ name: 'Contact', href: '/#contact' }
	];
	let navOpen = false;

	let y = 0;
	let sections: NodeListOf<HTMLElement>;
	let current = '';

	$: if (sections) getCurrentSection(y);

	function getCurrentSection(y: number) {
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			if (y >= sectionTop) current = section.id;
		});
	}

	onMount(() => {
		sections = document.querySelectorAll('section[id]');
		getCurrentSection(y);
	});
</script>

<svelte:window bind:scrollY={y} />

<header class="sticky top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur">
	<nav class="page-content flex flex-wrap items-center h-16">
		<p class="font-bold m-0 text-xl">Magdaléna Kubincová</p>

		<!-- desktop menu -->
		<ul class="hidden sm:flex items-center gap-6 ml-auto">
			{#each menuItems as item (item.name)}
				<li>
					<a href={item.href} class="nav-link" class:active={current === item.href.slice(2)}
						>{item.name}</a
					>
				</li>
			{/each}
		</ul>

		<!-- mobile menu -->
		<button
			id="toggle-nav"
			on:click={() => (navOpen = !navOpen)}
			class="sm:hidden flex items-center gap-2 ml-auto cursor-pointer"
		>
			<span class="text-sm">{navOpen ? 'close' : 'menu'}</span>
			<span class="flex flex-col justify-center size-6"
				><span class="menu-icon" class:open={navOpen}></span></span
			>
		</button>

		<ul
			class="sm:hidden fixed inset-0 h-screen bg-background flex flex-col items-center justify-center gap-6 -z-10 transition-transform duration-300"
			class:translate-x-0={navOpen}
			class:translate-x-full={!navOpen}
		>
			{#each menuItems as item (item.name)}
				<li>
					<a
						href={item.href}
						class="nav-link text-2xl"
						class:active={current === item.href.slice(2)}
						on:click={() => (navOpen = false)}
						tabindex={navOpen ? 0 : -1}
						>{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
