<script>
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col h-full">
	<Icon
		class="size-30 md:size-40 shrink-0 self-end -mt-10 translate-x-10 rotate-10"
		icon="ph:read-cv-logo-fill"
	/>
	<div class="-mt-5">
		<h1 class="text-2xl font-bold">CV</h1>
		<p class="">Do you need more info? Get the full CV in the link below!</p>
		<a
			href="https://docs.google.com/document/d/1pCEdBEHtNjQRjO062Wj673r36v_sgsN7xIMLCdFuL3U/export?format=pdf"
			class="btn bg-white text-inherit mt-2 shadow-lg shadow-purple-dark/30 hover:shadow-purple-dark/50 font-bold"
			><Icon class="size-5" icon="ph:download-simple-bold" />CV.pdf</a
		>
	</div>
</div>
