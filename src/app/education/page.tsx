import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education & Learning Background | Kuadugah Delight',
	description: 'Explore my educational background, certifications, self-learning journey, and continuous skill development in software engineering, full-stack development, IT services, and digital technology.',
};

export default function EducationPage() {
	return <Education />;
}