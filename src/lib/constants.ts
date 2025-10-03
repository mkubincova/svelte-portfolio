import type { Project } from './types';

export const projects: Project[] = [
	{
		name: 'health.exe',
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
		color: '#0170C0'
	},
	{
		name: 'KIRo4LeMi',
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
		logo_url: '/kiro4lemi-logo.svg'
	},
	{
		name: 'BrothAR',
		description:
			'An augmented reality application for Magic Leap Smart Glasses that enables live support sessions. It features bidirectional communication between the glasses and a web application that allows experts to assist users via video streaming, voice communication, and annotations.',
		technologies: ['Next.js', 'WebRTC', 'Azure', 'Github', 'Github Actions'],
		logo_url: '/brothar-logo.png'
	},
	{
		name: 'terrassign Case Management Tool',
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
		logo_url: '/terrassing-logo.png'
	},
	{
		name: 'HWZ ExamBot',
		client: 'HWZ Hochschule für Wirtschaft Zürich',
		description:
			'A proof-of-concept web application for educators to generate AI-powered exams and for students to take interactive quizzes with instant feedback. Teachers can customize and edit exams, while students benefit from engaging, adaptive assessments.',
		technologies: ['Next.js', 'Typescript', 'Tailwind', 'Node.js', 'Azure OpenAI Services'],
		logo_url: '/hwz-logo.svg'
	},
	{
		name: 'ClouDiE QuizBot',
		client: 'MaibornWolff',
		description:
			'An interactive quiz platform for AWS exam preparation, replacing video content with engaging, AI-powered questions.',
		technologies: [
			'React',
			'TypeScript',
			'Next.js',
			'Jest',
			'GitLab',
			'LangChain',
			'Tailwind',
			'daisyUI'
		],
		image_url: '/cloudie.png'
	},
	{
		name: 'DiEscover',
		client: 'MaibornWolff',
		description:
			'A page-container app with tools like Flowerpots, Peers and Circles to enhance collaboration and organization within the DiE department.',
		technologies: ['Remix', 'Tailwind', 'Prisma', 'TanStack', 'MongoDB', 'MongoDB Atlas', 'GitLab'],
		image_url: '/diescover.png'
	}
];

export const cv_url =
	'https://docs.google.com/document/d/1pCEdBEHtNjQRjO062Wj673r36v_sgsN7xIMLCdFuL3U/export?format=pdf';

export const miniApps: Project[] = [
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
	}
];
