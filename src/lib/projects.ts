export interface Project {
	name: string;
	description: string;
	shortDescription: string;
	client: string;
	duration: string;
	role: string;
	technologies: string[];
}

export const projects = [
	{
		name: 'health.exe',
		client: 'health.exe',
		duration: '04/2025 - 05/2025',
		shortDescription: `A platform for orthopedic professionals to create and share personalized patient training plans, integrating Azure OpenAI for recommendations.`,
		description: `MaibornWolff developed the health.exe platform tailored for orthopedic
healthcare professionals, facilitating the creation and sharing of
personalized patient training plans. It integrates cutting-edge
technologies such as Azure OpenAI to generate recommendations.
The project comprised two applications: one for orthopedic surgeons
to oversee patient management and training plans, and another for
patients to access their personalized plans.
The platform enables therapists to work more efficiently, provide more
personalized patient care, and improve the quality of therapy.`,
		role: 'Software engineer',
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
		]
	},
	{
		name: 'BrothAR',
		client: 'TrainAR GmbH',
		duration: '03/2025 - 04/2025',
		shortDescription: `An augmented reality app for Magic Leap Smart Glasses enabling live expert support with video streaming, voice communication, and annotations.`,
		description: `In collaboration with TrainAR, MaibornWolff created BrothAR, an
augmented reality application designed for Magic Leap Smart Glasses.
BrothAR allows users to start a support session with experts who can
view live video streams from the AR glasses. It features bidirectional
voice communication and enables experts to add annotations to the
video stream, which appear as virtual objects on the user's glasses.
These capabilities enhance troubleshooting and remote support,
raising the bar for industrial maintenance and expert consultation. A
key challenge was developing server components to be completely
self-hosted, ensuring the application's suitability for highly sensitive
environments.`,
		role: 'Frontend developer',
		technologies: ['Next.js', 'WebRTC', 'Azure', 'Github', 'Unity', 'Github Actions']
	},
	{
		name: 'terrassign Case Management Tool',
		client: 'terrassign GmbH',
		duration: '09/2024 - 03/2025',
		shortDescription: `A case management tool for terrassign GmbH, featuring process automation, centralized communication, and document management.`,
		description: `MaibornWolff and Ojemba partnered to develop a customized case
management tool for terrassign GmbH, a leading provider of employee
assignment services in Germany. This tool features a user-friendly
application process, centralized customer communication, document
management, and process automation, boosting efficiency for
terrassign and its clients. Despite the challenge of taking over an
existing project without documentation, the team successfully
completed development, testing, and provided the required Azure
infrastructure on time and within budget.
The implemented software solution enhances terrassign's internal
productivity, improves service for current clients, and aids in acquiring
new ones. By delivering early MVP milestones, the team ensured user
satisfaction and established a foundation for scalable and efficient
case management. The collaborative efforts between MaibornWolff
and Ojemba ensured a customer-focused and cost-effective project
execution.`,
		role: 'Software Engineer',
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
		]
	},
	{
		name: 'HWZ ExamBot',
		client: 'HWZ Hochschule für Wirtschaft Zürich',
		duration: '11/2024 - 01/2025',
		shortDescription: `A proof-of-concept app for educators to generate AI-powered exams and students to take interactive quizzes with instant feedback.`,
		description: `The HWZ ExamBot is a proof-of-concept project designed to explore
the integration of AI technology within the educational framework.
The web application features two main components: Exam Generation
for Educators, which enables teachers to effortlessly create customized
exams using AI insights from educational materials. They can tailor the
exams by choosing the number of questions, difficulty level, and source
material, and have the flexibility to edit or regenerate them until
satisfied. Once finalized, questions are stored in a database for student
use. The second component, Engaging Student Quizzes, provides
students with interactive quizzes based on the prepared questions,
offering an enjoyable and effective method for assessing their
knowledge with instant feedback and adaptability.`,
		role: 'Frontend developer, UX/UI designer',
		technologies: ['Next.js', 'Typescript', 'Tailwind', 'Node.js', 'Azure OpenAI Services']
	},
	{
		name: 'ClouDiE QuizBot',
		client: 'MaibornWolff',
		duration: '07/2024 - 10/2024',
		shortDescription: `An interactive quiz platform for AWS exam preparation, replacing video content with engaging, AI-powered questions.`,
		description: `The ClouDIE Quizbot project is revolutionizing AWS exam preparation by
introducing an interactive quiz platform. With the help of Langchain, we
created a Next.js application featuring a React frontend, allowing users
to replace hours of video content with engaging quiz questions. This
innovative platform is set to integrate seamlessly into our internal IT
landscape, aiming to enhance efficiency and save valuable time in the
future.`,
		role: 'Software Engineer',
		technologies: [
			'React',
			'TypeScript',
			'Next.js',
			'Jest',
			'GitLab',
			'LangChain',
			'Tailwind',
			'daisyUI'
		]
	},
	{
		name: 'DiEscover',
		client: 'MaibornWolff',
		duration: '06/2024 - *',
		shortDescription: `A page-container app with tools like Flowerpots and Circles to enhance collaboration and organization within the DiE department.`,
		description: `The DiEscover App is a "page-container app" that has a variety of apps which
help us organise and collaborate as a department. This means that the
main users of the DiEscover app are also usually from the DiE
department.
Some of the inside applications are Flowerpots and Circles. This helps
other members of the DiE department to know more about others, who
is working where, with whom, who is the manager, levels among other
stuff.`,
		role: 'Software Engineer',
		technologies: ['Remix', 'Tailwind', 'Prisma', 'TanStack', 'MongoDB', 'MongoDB Atlas', 'GitLab']
	}
];
