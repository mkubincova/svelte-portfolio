<script>
	const jobs = [
		{
			title: 'Junior Software Engineer',
			company: 'MaibornWolff Spain S.L.',
			startDate: '07/2024',
			endDate: 'present'
		},
		{
			title: 'Frontend Web Developer',
			company: 'Pilot, v.o.s.',
			startDate: '01/2022',
			endDate: '05/2024'
		},
		{
			title: 'Assistant Teacher of Web and UI Design (Part-time)',
			company: 'Jönköping University',
			startDate: '09/2020',
			endDate: '01/2021'
		},
		{
			title: 'Web Developer and Digital Marketer (Internship)',
			company: 'Vision Factory',
			startDate: '03/2020',
			endDate: '05/2020'
		}
	];
</script>

<h2 class="text-2xl font-bold mb-4">Work experience</h2>
<ul class="flex flex-col items-stretch">
	{#each jobs as job, index}
		<li class={index !== 0 ? 'border-t py-4' : 'pb-4'}>
			<p class="text-sm">{job.startDate} - {job.endDate}</p>
			<h2 class="font-bold my-1">{job.title}</h2>
			<p class="italic">{job.company}</p>
		</li>
	{/each}
</ul>
