'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench, Smartphone, TrendingUp, Sparkles, Music, Video,
	Palette, Megaphone, ShoppingCart, Globe, Briefcase, Shield, Rocket
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	CppLogo, PythonLogo, JavaScriptLogo, HTML5Logo,
	CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo, MySQLLogo,
	MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, ShadCNLogo, NextjsLogo,
	VirtualBoxLogo, VercelLogo
} from '@/components/TechLogos';

const skills = [
	{
		category: 'Software & Web Development',
		icon: <Code2 className="w-6 h-6" />,
		items: [
			{ name: 'Full-Stack', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Next.js', icon: <NextjsLogo /> },
			{ name: 'React', icon: <ReactLogo /> },
			{ name: 'TypeScript', icon: <TypeScriptLogo /> },
			{ name: 'JavaScript', icon: <JavaScriptLogo /> },
			{ name: 'HTML/CSS', icon: <HTML5Logo /> },
			{ name: 'Tailwind', icon: <TailwindLogo /> },
			{ name: 'ShadCN UI', icon: <ShadCNLogo /> },
			{ name: 'PWA', icon: <Globe className="w-4 h-4" /> },
			{ name: 'API Integration', icon: <Server className="w-4 h-4" /> },
			{ name: 'Vercel', icon: <VercelLogo /> },
			{ name: 'Git/GitHub', icon: <GitLogo /> },
			{ name: 'SEO', icon: <Rocket className="w-4 h-4" /> },
			{ name: 'Performance', icon: <Rocket className="w-4 h-4" /> },
		]
	},
	{
		category: 'Mobile & Android',
		icon: <Smartphone className="w-6 h-6" />,
		items: [
			{ name: 'Android Dev', icon: <Smartphone className="w-4 h-4" /> },
			{ name: 'APK Management', icon: <Smartphone className="w-4 h-4" /> },
			{ name: 'PWA to Mobile', icon: <Smartphone className="w-4 h-4" /> },
			{ name: 'WhatsApp Business', icon: <MessageSquare className="w-4 h-4" /> },
			{ name: 'Device Config', icon: <Wrench className="w-4 h-4" /> },
		]
	},
	{
		category: 'Trading & FinTech',
		icon: <TrendingUp className="w-6 h-6" />,
		items: [
			{ name: 'Pine Script', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'TradingView', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'Non-Repainting', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'BOS / CHOCH', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'Fair Value Gap', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'Supply & Demand', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'Multi-TF Analysis', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'Risk Management', icon: <Shield className="w-4 h-4" /> },
			{ name: 'Automated Alerts', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'Forex VPS', icon: <Server className="w-4 h-4" /> },
		]
	},
	{
		category: 'AI & Generative AI',
		icon: <Sparkles className="w-6 h-6" />,
		items: [
			{ name: 'Prompt Engineering', icon: <Sparkles className="w-4 h-4" /> },
			{ name: 'AI Image Gen', icon: <Sparkles className="w-4 h-4" /> },
			{ name: 'AI Video', icon: <Video className="w-4 h-4" /> },
			{ name: 'AI Music (Suno)', icon: <Music className="w-4 h-4" /> },
			{ name: 'AI Content', icon: <Sparkles className="w-4 h-4" /> },
			{ name: 'Tool Evaluation', icon: <Brain className="w-4 h-4" /> },
		]
	},
	{
		category: 'Music & Audio',
		icon: <Music className="w-6 h-6" />,
		items: [
			{ name: 'Beat Production', icon: <Music className="w-4 h-4" /> },
			{ name: 'EDM / Trap / Phonk', icon: <Music className="w-4 h-4" /> },
			{ name: 'Lo-fi / Hip-hop', icon: <Music className="w-4 h-4" /> },
			{ name: 'AI Vocals', icon: <Music className="w-4 h-4" /> },
			{ name: 'BandLab', icon: <Music className="w-4 h-4" /> },
			{ name: 'Copyright-free', icon: <Music className="w-4 h-4" /> },
		]
	},
	{
		category: 'Video & Content',
		icon: <Video className="w-6 h-6" />,
		items: [
			{ name: 'YouTube / Shorts', icon: <Video className="w-4 h-4" /> },
			{ name: 'CapCut', icon: <Video className="w-4 h-4" /> },
			{ name: 'Video Scripting', icon: <Video className="w-4 h-4" /> },
			{ name: 'YouTube SEO', icon: <Rocket className="w-4 h-4" /> },
			{ name: 'Thumbnails', icon: <Palette className="w-4 h-4" /> },
			{ name: 'Promotional Video', icon: <Video className="w-4 h-4" /> },
		]
	},
	{
		category: 'Design & Branding',
		icon: <Palette className="w-6 h-6" />,
		items: [
			{ name: 'Graphic Design', icon: <Palette className="w-4 h-4" /> },
			{ name: 'UI/UX Design', icon: <Layout className="w-4 h-4" /> },
			{ name: 'Logo Concepts', icon: <Palette className="w-4 h-4" /> },
			{ name: 'Landing Pages', icon: <Layout className="w-4 h-4" /> },
			{ name: 'Social Creatives', icon: <Palette className="w-4 h-4" /> },
			{ name: 'Brand Identity', icon: <Palette className="w-4 h-4" /> },
		]
	},
	{
		category: 'Digital Marketing & SMM',
		icon: <Megaphone className="w-6 h-6" />,
		items: [
			{ name: 'Meta / FB Ads', icon: <Megaphone className="w-4 h-4" /> },
			{ name: 'Instagram Ads', icon: <Megaphone className="w-4 h-4" /> },
			{ name: 'Audience Targeting', icon: <Users className="w-4 h-4" /> },
			{ name: 'Funnel Concepts', icon: <Rocket className="w-4 h-4" /> },
			{ name: 'Content Marketing', icon: <Megaphone className="w-4 h-4" /> },
			{ name: 'SEO Strategy', icon: <Rocket className="w-4 h-4" /> },
		]
	},
	{
		category: 'E-commerce',
		icon: <ShoppingCart className="w-6 h-6" />,
		items: [
			{ name: 'Store Setup', icon: <ShoppingCart className="w-4 h-4" /> },
			{ name: 'Printify / POD', icon: <ShoppingCart className="w-4 h-4" /> },
			{ name: 'Product Listings', icon: <ShoppingCart className="w-4 h-4" /> },
			{ name: 'Meta Ads eCom', icon: <Megaphone className="w-4 h-4" /> },
			{ name: 'Store Optimization', icon: <Rocket className="w-4 h-4" /> },
		]
	},
	{
		category: 'Platforms & Infrastructure',
		icon: <Globe className="w-6 h-6" />,
		items: [
			{ name: 'GitHub', icon: <GitLogo /> },
			{ name: 'Vercel', icon: <VercelLogo /> },
			{ name: 'TradingView', icon: <TrendingUp className="w-4 h-4" /> },
			{ name: 'Whop / Paystack', icon: <ShoppingCart className="w-4 h-4" /> },
			{ name: 'Domain & Hosting', icon: <Globe className="w-4 h-4" /> },
			{ name: 'VPS Admin', icon: <Server className="w-4 h-4" /> },
		]
	},
	{
		category: 'Freelancing & Business',
		icon: <Briefcase className="w-6 h-6" />,
		items: [
			{ name: 'Freelance Dev', icon: <Briefcase className="w-4 h-4" /> },
			{ name: 'Technical Consulting', icon: <Lightbulb className="w-4 h-4" /> },
			{ name: 'SaaS Positioning', icon: <Rocket className="w-4 h-4" /> },
			{ name: 'Product Marketing', icon: <Megaphone className="w-4 h-4" /> },
			{ name: 'Lead Generation', icon: <Users className="w-4 h-4" /> },
			{ name: 'Client Communication', icon: <MessageSquare className="w-4 h-4" /> },
		]
	},
	{
		category: 'Technical Troubleshooting',
		icon: <Wrench className="w-6 h-6" />,
		items: [
			{ name: 'Website Debugging', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'Next.js Routing', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'DNS / Domain', icon: <Globe className="w-4 h-4" /> },
			{ name: 'Deployment Issues', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'Android / WhatsApp', icon: <Smartphone className="w-4 h-4" /> },
			{ name: 'VPS / Payments', icon: <Server className="w-4 h-4" /> },
		]
	},
	{
		category: 'Soft Skills & Mindset',
		icon: <Brain className="w-6 h-6" />,
		items: [
			{ name: 'Rapid Learning', icon: <Lightbulb className="w-4 h-4" /> },
			{ name: 'Problem Solving', icon: <Brain className="w-4 h-4" /> },
			{ name: 'Cross-tech Combos', icon: <Rocket className="w-4 h-4" /> },
			{ name: 'Teamwork', icon: <Users className="w-4 h-4" /> },
			{ name: 'Communication', icon: <MessageSquare className="w-4 h-4" /> },
			{ name: 'Product Thinking', icon: <Briefcase className="w-4 h-4" /> },
		]
	}
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h1 className="text-4xl font-bold mb-4 gradient-text">Jack of All Trades — Full Skill Arsenal</h1>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-3xl">
					I am not just a web developer. I am a Full-Stack Developer + Product Builder + Digital Technology Entrepreneur. 
					From Next.js & React apps to Pine Script trading systems, AI content pipelines, Meta Ads campaigns, 
					e-commerce stores, music production, and video content — I combine multiple technologies into real products and businesses.
					Hire a true Jack of All Trades: Developer • Designer • Hacker and many more digital skills.
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{skills.map((skillGroup) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className="bg-gray-800/50 p-5 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full">
							<div className="flex items-center space-x-3 mb-4">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-base font-semibold leading-tight">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-2">
								{skillGroup.items.map((skill) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors shrink-0">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-xs sm:text-sm truncate">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Skills;
