<script>
	const year = new Date().getFullYear();
</script>

<footer
	class={`border-t flex flex-col sm:flex-row items-center p-3 gap-x-5 gap-y-2 text-sm ${$$props.class}`}
>
	<span class="flex-1 text-nowrap">©{year} Magdalena Kubincova</span>
	<div class="flex gap-x-5">
		<span>mkubincova@proton.me</span>
		<a href="https://github.com/mkubincova" class="text-link">Github</a>
		<a href="https://www.linkedin.com/in/mkubincova/" class="text-link">Linkedin</a>
	</div>
</footer>
