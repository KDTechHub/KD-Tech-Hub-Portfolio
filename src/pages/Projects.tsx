'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Project 1',
		description: 'A modern web application built with Next.js and TypeScript.',
		image: '/projects_img/project-1.png',
		github: 'https://wa.me/233594516288',
		live: '#',
		tags: ['Next.js', 'TypeScript', 'Tailwind'],
	},
	{
		title: 'Project 2',
		description: 'Full-stack e-commerce solution with payment integration.',
		image: '/projects_img/project-2.png',
		github: 'https://wa.me/233594516288',
		live: '#',
		tags: ['React', 'Node.js', 'MongoDB'],
	},
	{
		title: 'Project 3',
		description: 'Trading indicator and signal system for Forex.',
		image: '/projects_img/project-3.png',
		github: 'https://wa.me/233594516288',
		live: '#',
		tags: ['Pine Script', 'TradingView'],
	},
	{
		title: 'Project 4',
		description: 'AI-powered content generation platform.',
		image: '/projects_img/project-4.png',
		github: 'https://wa.me/233594516288',
		live: '#',
		tags: ['AI', 'Next.js', 'API'],
	},
	{
		title: 'Project 5',
		description: 'Digital marketing and SMM dashboard.',
		image: '/projects_img/project-5.png',
		github: 'https://wa.me/233594516288',
		live: '#',
		tags: ['React', 'Meta Ads', 'Analytics'],
	},
	{
		title: 'Project 6',
		description: 'E-commerce store with Printify integration.',
		image: '/projects_img/project-6.png',
		github: 'https://wa.me/233594516288',
		live: '#',
		tags: ['E-commerce', 'Printify', 'Next.js'],
	},
	{
		title: 'Project 7',
		description: 'Music production and AI vocals workflow.',
		image: '/projects_img/project-7.jpg',
		github: 'https://wa.me/233594516288',
		live: '#',
		tags: ['AI Music', 'Suno', 'Production'],
	},
	{
		title: 'Project 8',
		description: 'Video content and YouTube SEO toolkit.',
		image: '/projects_img/project-8.jpg',
		github: 'https://wa.me/233594516288',
		live: '#',
		tags: ['Video', 'YouTube SEO', 'CapCut'],
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h1 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h1>
			</ScrollAnimation>
			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					A selection of projects spanning full-stack web development, trading technology, AI tools, e-commerce, and digital marketing — demonstrating the Jack of All Trades approach.
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all group">
							<div className="relative h-48 overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 text-sm mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300">
											{tag}
										</span>
									))}
								</div>
								<div className="flex gap-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
									>
										<Github className="w-4 h-4" />
										Contact / WhatsApp
									</a>
									{project.live !== '#' && (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
										>
											<ExternalLink className="w-4 h-4" />
											Live Demo
										</a>
									)}
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;
