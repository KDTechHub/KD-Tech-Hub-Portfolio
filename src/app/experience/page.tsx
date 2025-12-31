import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'My Professional Experience & Career Journey | Kuadugah Delight',
	description: 'Explore the professional journey of Kuadugah Delight, including roles in full-stack development, tech entrepreneurship, software engineering, and digital innovation.',
};

export default function ExperiencePage() {
	return <Experience />;
}