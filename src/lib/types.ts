export interface Project {
	name: string;
	type: 'work' | 'personal';
	description: string;
	technologies: string[];
	repository_url?: string;
	demo_url?: string;
	image_url?: string;
}
