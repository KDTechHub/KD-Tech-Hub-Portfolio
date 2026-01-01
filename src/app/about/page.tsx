import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Kuadugah Delight – Full-Stack Developer & Tech Innovator',
	description: 'Learn more about Kuadugah Delight, the founder of KD Tech Hub, KD SMM Hub, KD Boost Hub, and HomBuy. Explore his journey, skills, and passion for technology and innovation.',
};

export default function AboutPage() {
	return <About />;
}