export interface Project {
	name: string;
	client: string;
	description: string;
	technologies: string[];
	logo_url: string;
	heading_color?: string;
	card_styles?: string;
	logo_styles?: string;
}

export interface MiniApp {
	name: string;
	description: string;
	technologies: string[];
	repository_url?: string;
	demo_url?: string;
	image_url?: string;
}
