import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates & Achievements – Kuadugah Delight',
	description: 'View the professional certifications and achievements of Kuadugah Delight, showcasing expertise in Full-Stack Development, Web & Software Engineering, and Digital Innovation.',
};

export default function CertificatesPage() {
	return <Certificates />;
}