import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Kuadugah Delight | Hire a Full-Stack Developer & Tech Consultant',
	description: 'Get in touch with Kuadugah Delight for web development, software engineering, SMM solutions, e-commerce projects, and tech consulting. Let’s build something great.',
};

export default function ContactPage() {
	return <Contact />;
}