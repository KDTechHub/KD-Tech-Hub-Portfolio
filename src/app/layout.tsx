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
	title: { default: 'Kuadugah Delight | Jack of All Trades - Full-Stack Developer, Designer, Hacker, AI & Trading Tech Expert | KD Tech Hub', template: '%s | Kuadugah Delight - KD Tech Hub' },
	description: 'Kuadugah Delight (KD Tech Hub) is a Jack of All Trades: Full-Stack Web Developer, Designer, Hacker, Pine Script Trading Indicator Developer, AI Content Creator, Digital Marketer, E-commerce Expert, Music & Video Producer. Hire for Next.js, React, TypeScript, SEO, Meta Ads, Forex tools, PWAs, Vercel deployment & complete digital solutions. Based in Ghana. Contact +233594516288 or support@kdtechhub.top',
	keywords: [
		'Kuadugah Delight', 'KD Tech Hub', 'Jack of All Trades', 'Full Stack Developer Ghana', 'Next.js Developer', 'React TypeScript Expert',
		'Pine Script Developer', 'TradingView Indicator', 'Forex Trading Tools', 'Non-repainting Indicators', 'BOS CHOCH FVG',
		'AI Image Generation', 'AI Music Production', 'Suno', 'Prompt Engineering', 'Digital Marketing Ghana', 'Meta Ads Expert',
		'SMM Services', 'E-commerce Development', 'Print on Demand', 'Printify', 'SEO Expert Ghana', 'Website Performance Optimization',
		'PWA Developer', 'Vercel Deployment', 'Android App Troubleshooting', 'WhatsApp Business', 'Freelance Developer Ghana',
		'Web Designer', 'UI UX Design', 'Graphic Design', 'YouTube SEO', 'Content Creator', 'Product Builder', 'Tech Entrepreneur',
		'Hacker', 'Cybersecurity Awareness', 'VPS Management', 'Domain Management', 'support@kdtechhub.top', '+233594516288', '+233505401288'
	],
	authors: [{ name: 'Kuadugah Delight' }],
	creator: 'Kuadugah Delight',
	manifest: '/manifest.json',
	themeColor: '#000000',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.kdtechhub.top/',
		title: 'Kuadugah Delight | Jack of All Trades - Full-Stack Developer • Designer • Hacker • AI & Trading Expert',
		description: 'Official portfolio of Kuadugah Delight. Full-Stack Developer, Designer, Hacker, Pine Script specialist, AI creator, digital marketer & product builder. Web apps, trading tools, e-commerce, SEO, music & video production. Contact support@kdtechhub.top or WhatsApp +233594516288',
		siteName: 'KD Tech Hub | Kuadugah Delight',
		images: [
			{
				url: '/profile/my_profile_new.jpg',
				width: 800,
				height: 800,
				alt: 'Kuadugah Delight - Jack of All Trades Full-Stack Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kuadugah Delight | Jack of All Trades Developer • Designer • Hacker',
		description: 'Full-Stack Web Dev, Trading Tech, AI, Digital Marketing, E-commerce, Music & Video. Hire the multi-skilled expert. support@kdtechhub.top | +233594516288',
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
	metadataBase: new URL('https://www.kdtechhub.top'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googleb59f67533b22928f.html',
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
