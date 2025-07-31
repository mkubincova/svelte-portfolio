<script>
	import { getTimeOfDay } from '$lib/util/getTimeOfDay';

	const timeOfDay = getTimeOfDay();
</script>

<div class="h-full flex flex-col items-center justify-center">
	<h1 class={`gradient-${timeOfDay} text-9xl mb-24 z-10 relative w-[500px]`}>
		<span class="opacity-80 -ml-[20%]">
			<span>Good</span>
			<span class="block pl-[20%] capitalize">{timeOfDay}</span>
		</span>
	</h1>
</div>
