<script>
	import { getTimeOfDay } from '$lib/util/getTimeOfDay';

	const timeOfDay = getTimeOfDay();
</script>

<div class="h-[calc(100vh-var(--header-h))] flex flex-col items-center justify-center">
	<div class={`gradient-${timeOfDay} fixed inset-0 -z-50`}></div>
	<h1 class="text-9xl mb-8">Good <span class="block ml-16 capitalize">{timeOfDay}</span></h1>
</div>
