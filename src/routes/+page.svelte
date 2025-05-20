<script>
	import { Hello, Cv, Projects } from '$lib/components';
</script>

<div class="grid gap-6 md:gap-8 grid-cols-2 xl:grid-cols-3 xl:grid-rows-3">
	<div class="card col-span-2 @container"><Hello /></div>
	<div class="card bg-green text-green-dark min-h-24 col-span-2 xl:row-span-2 xl:col-span-1">
		work exp
	</div>
	<div class="card bg-purple text-purple-dark"><Cv /></div>
	<div class="card bg-blue text-blue-dark min-h-24"><Projects /></div>
	<div class="card bg-green text-green-dark min-h-24 col-span-2 xl:col-span-1">get in touch</div>
	<div class="card bg-yellow text-yellow-dark min-h-24 col-span-2">technologies</div>
</div>
