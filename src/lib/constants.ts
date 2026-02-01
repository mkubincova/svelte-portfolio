import type { MiniApp, Project } from './types';

export const projects: Project[] = [
	{
		name: 'health.exe',
		client: 'H&S health.exe GmbH',
		description:
			'A platform for orthopedic healthcare professionals to create and share personalized patient training plans, integrating Azure OpenAI for recommendations. Includes applications for both orthopaedists to manage plans and patients to access them, enabling more efficient, personalized care and improved therapy quality.',
		technologies: [
			'NX Monorepo',
			'Next.js',
			'Tailwind',
			'daisyUI',
			'headless UI',
			'Prisma',
			'PostgreSQL',
			'Microsoft Entra ID',
			'NextAuth',
			'Azure',
			'Azure OpenAI Services',
			'Github',
			'Docker',
			'LangChain'
		],
		logo_url: '/healthexe-logo.svg',
		card_styles: 'bg-[#0170C0]/15',
		heading_color: 'text-[#0170C0]'
	},
	{
		name: 'terrassign',
		client: 'terrassign GmbH',
		description:
			'A customized case management tool for employee assignment services, featuring a user-friendly application process, centralized communication, document management, and process automation. The solution boosts internal productivity, improves client service, and supports scalable, efficient case management.',
		technologies: [
			'Next.js',
			'Tailwind',
			'AntDesign',
			'Nest.js',
			'Typescript',
			'Azure',
			'Bicep',
			'PostgreSQL',
			'TypeORM',
			'Jest'
		],
		logo_url: '/terrassing-logo.png',
		card_styles: 'bg-[#d50057]/20',
		heading_color: 'text-[#d50057]',
		logo_styles: 'bg-[#ffffff] px-2 py-0.5'
	},
	{
		name: 'KIRo4LeMi',
		client: 'Fraunhofer IGCV',
		description:
			'A research project developing an AI-powered assistant robot to support employees with disabilities in assembly tasks. It includes a configurator application for assessment of individual needs of employees and an iPad application for guidance and real-time assistance during tasks',
		technologies: [
			'React',
			'Prisma',
			'PostgreSQL',
			'Azure',
			'Open AI',
			'Typescript',
			'Tailwind',
			'Rust',
			'SwiftUI',
			'Gitlab'
		],
		logo_url: '/kiro4lemi-logo.svg',
		heading_color: 'text-[#043677]',
		card_styles: 'bg-[#9FC4FE]/30'
	},
	{
		name: 'BrothAR',
		client: 'TrainAR GmbH',
		description:
			'An augmented reality application for Magic Leap Smart Glasses that enables live support sessions. It features bidirectional communication between the glasses and a web application that allows experts to assist users via video streaming, voice communication, and annotations.',
		technologies: ['Next.js', 'WebRTC', 'Azure', 'Github', 'Github Actions'],
		logo_url: '/brothar-logo.png',
		card_styles: 'bg-[#000000]/10',
		logo_styles: 'bg-[#000000] p-3',
		heading_color: 'text-[#000000]'
	},
	{
		name: 'HWZ ExamBot',
		client: 'HWZ Hochschule für Wirtschaft Zürich',
		description:
			'A proof-of-concept web application for educators to generate AI-powered exams and for students to take interactive quizzes with instant feedback. Teachers can customize and edit exams, while students benefit from engaging, adaptive assessments.',
		technologies: ['Next.js', 'Typescript', 'Tailwind', 'Node.js', 'Azure OpenAI Services'],
		logo_url: '/hwz-logo.svg',
		card_styles: 'bg-[#003DA6]/20',
		heading_color: 'text-[#003DA6]',
		logo_styles: 'bg-[#003DA6]'
	}
];

export const cv_url =
	'https://docs.google.com/document/d/1pCEdBEHtNjQRjO062Wj673r36v_sgsN7xIMLCdFuL3U/export?format=pdf';

export const miniApps: MiniApp[] = [
	{
		name: 'Recipe App',
		description: 'A collection of recipes filtered by categories with Strapi CMS.',
		technologies: ['React', 'Sass', 'GraphQL', 'Strapi'],
		repository_url: 'https://github.com/mkubincova/recipe-app-frontend',
		demo_url: 'https://recipe-app-frontend-iota.vercel.app/',
		image_url: '/recipes.png'
	},
	{
		name: 'Weather App',
		description: 'A weather app displaying current weather and forecasts for different locations.',
		technologies: ['Vue', 'TailwindCSS', 'Mapbox', 'OpenWeatherMap'],
		repository_url: 'https://github.com/mkubincova/weather-app',
		demo_url: 'https://weather-app-mkubincova.vercel.app/',
		image_url: '/weather.png'
	},
	{
		name: 'Video Call App',
		description: 'A peer-to-peer video calling app with room-based calls, built using WebRTC.',
		technologies: ['TypeScript', 'WebRTC', 'WebSockets', 'Vite', 'Node.js'],
		repository_url: 'https://github.com/mkubincova/webrtc-video-call',
		demo_url: 'https://webrtc-video-call-seven.vercel.app/',
		image_url: '/video.png'
	}
];
