import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Kuadugah Delight - Full-Stack Developer, Tech Entrepreneur, Digital Solutions Expert & More',
	description: 'Kuadugah Delight is a Full-Stack Developer, Tech Entrepreneur, and Digital Solutions Expert offering web development, software engineering, SEO, e-commerce, SMM, automation, telecom services & more.',
	keywords: 'Kuadugah Delight, Delight, Mr D, Software Developer, Full Stack Developer, Web Developer, Web & Software Engineer, MERN Stack Developer, React Developer, Next.js Expert, Frontend Developer, Backend Developer, JavaScript Expert, TypeScript Developer, Node.js Developer, Database Developer, MongoDB Expert, SQL Developer, SEO Expert, CMS Expert, Digital Growth Specialist, E-commerce Developer, SMM Panel Developer, Tech Consultant, IT Services & Consulting, Online Business Builder',
	authors: [{ name: 'Kuadugah Delight' }],
	creator: 'Kuadugah Delight',
	manifest: '/manifest.json',
	themeColor: '#000000',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://kd-tech-hub-portfolio.vercel.app/',
		title: 'Kuadugah Delight (Mr D) - Full-Stack Developer, Tech Entrepreneur & Digital Solutions Expert',
		description: 'Official portfolio of Kuadugah Delight (Mr D). Full-Stack Developer, Software Engineer, Tech Entrepreneur & Founder delivering web, software, e-commerce, SMM, SEO, automation, and scalable digital solutions worldwide.',
		siteName: 'Kuadugah Delight | Tech & Digital Solutions',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kuadugah Delight | Full-Stack Developer & Tech Entrepreneur',
		description: 'Portfolio of Kuadugah Delight (Mr D) - Full-Stack Developer, Software Engineer & Digital Solutions Expert creating web apps, SaaS platforms, e-commerce systems, SEO-driven websites & scalable tech products.',
		creator: '@KDTechHubOnline',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://kd-tech-hub-portfolio.vercel.app'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/google86ae9cab2d612bb8.html',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/favicon.png" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}