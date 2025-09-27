<script>
	import { cv_url } from '$lib/constants';
	import Icon from '@iconify/svelte';
</script>

<div class="x-container py-8 space-y-8">
	<div id="about" class="x-container-content-wide flex items-center gap-8">
		<div class="w-2/3">
			<h1>Magdaléna Kubincová</h1>
			<p class="x-text-header">
				<strong>Full-stack</strong> web developer with 4+ years of experience delivering scalable
				web applications and AI-driven platforms. Skilled in modern <strong>JavaScript</strong>
				frameworks and libraries, <strong>cloud</strong> technologies, and building
				<strong>user-centered</strong> digital products.
			</p>
			<a href={cv_url} class="x-btn"><Icon icon="ph:download-simple" width={20} />Download CV</a>
		</div>
		<div class="flex-1 border rounded-xl rotate-3 overflow-hidden shadow-lg">
			<img src="profile-pic.png" alt="" class="w-full h-full object-contain" />
		</div>
	</div>
	<div id="skills" class="x-container-content-wide">
		<h2>Skills</h2>
		<section class="bg-foreground/5 rounded-xl p-6">
			<ul class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>React</li>
				<li>Next.js</li>
				<li>Svelte</li>
				<li>SvelteKit</li>
				<li>TanStack</li>
				<li>Tailwind</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>Prisma</li>
				<li>Nest.js</li>
				<li>PostgreSQL</li>
				<li>MongoDB</li>
				<li>Azure</li>
				<li>Azure OpenAI</li>
				<li>LangChain</li>
				<li>Docker</li>
				<li>Git</li>
				<li>GitHub</li>
				<li>GitLab</li>
				<li>Jest</li>
				<li>WebRTC</li>
				<li>AdobeXD</li>
				<li>Figma</li>
			</ul>
		</section>
	</div>
	<div id="projects" class="x-container-content-wide">
		<h2>Projects</h2>
		<p class="x-text-header">
			Here are some of my recent projects. For a full list, please visit my
		</p>
	</div>
	<div id="mini-apps" class="x-container-content-wide">
		<h2>Mini Apps</h2>
		<p class="x-text-header">
			Here are some of my recent mini apps. For a full list, please visit my
		</p>
	</div>
</div>
