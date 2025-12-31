import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects of Kuadugah Delight | Web & Software, Full-Stack Development',
	description: 'View Kuadugah Delight\’s portfolio of projects including Full-Stack Web Apps, KD SMM Hub, HomBuy, and more.',
};

export default function ProjectsPage() {
	return <Projects />;
}