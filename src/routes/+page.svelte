<script>
	import { getTimeOfDay } from '$lib/util/getTimeOfDay';

	const timeOfDay = getTimeOfDay();
</script>

<div class="h-full flex flex-col items-center justify-center">
	<div class={`gradient-${timeOfDay} fixed inset-0`}></div>
	<h1 class="text-9xl mb-24 z-10 text-white text-shadow-sm">
		Good <span class="block ml-16 capitalize">{timeOfDay}</span>
	</h1>
</div>
