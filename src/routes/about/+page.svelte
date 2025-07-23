<script>
	import { cv_url, jobs } from '$lib/constants';
	import Icon from '@iconify/svelte';
</script>

<div class="x-container py-8">
	<div class="x-container-content-wide flex items-end gap-8">
		<div class="flex-1">
			<img src="https://picsum.photos/id/319/500" alt="" class="w-full h-full object-contain" />
		</div>
		<div class="w-2/3">
			<h1>Hi!</h1>
			<p class="x-text-header">
				Core skills: Web development, UI/UX design, and problem-solving. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Amet quibusdam ad cum ea. Sint consequatur animi labore natus
				reprehenderit inventore, fugiat corrupti dolore error esse amet molestiae placeat molestias
				quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam ad cum ea.
				Sint consequatur animi labore natus reprehenderit inventore.
			</p>
		</div>
	</div>
	<div class="x-container-content mb-6 mt-12 flex flex-col gap-8">
		<section class="bg-foreground/5 rounded-xl p-6">
			<h2>Contact</h2>
			<p class="grid grid-cols-2 gap-4 mt-4">
				<span class="flex gap-2 items-center">
					<span class="bg-foreground text-background p-2 rounded-full"
						><Icon icon="ph:envelope" /></span
					>
					<a href="mailto:mkubincova@proton.me">mkubincova@proton.me</a></span
				>
				<span class="flex gap-2 items-center">
					<span class="bg-foreground text-background p-2 rounded-full"
						><Icon icon="ph:linkedin-logo" /></span
					>
					<a href="https://www.linkedin.com/in/mkubincova">linkedin.com/in/mkubincova</a></span
				>
				<span class="flex gap-2 items-center">
					<span class="bg-foreground text-background p-2 rounded-full"
						><Icon icon="ph:github-logo" /></span
					>
					<a href="https://github.com/mkubincova">github.com/mkubincova</a></span
				>
				<span class="flex gap-2 items-center">
					<span class="bg-foreground text-background p-2 rounded-full"
						><Icon icon="ph:read-cv-logo" /></span
					>
					<a href={cv_url}>full CV</a></span
				>
			</p>
		</section>
		<section>
			<h2>Work experience</h2>
			{#each jobs as job}
				<p class="my-6">
					<span class="block font-bold text-sm opacity-50 mb-1"
						>{job.startDate} - {job.endDate}</span
					>
					<strong class="block">{job.title}</strong>
					<span>{job.company}</span>
				</p>
			{/each}
		</section>
		<section>
			<h2>Recent projects</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam veritatis totam
				consequuntur qui molestiae officiis fugiat illo, sit tempore reprehenderit error similique
				pariatur mollitia, tenetur quibusdam sed, iure explicabo cum.
			</p>
		</section>
	</div>
</div>
