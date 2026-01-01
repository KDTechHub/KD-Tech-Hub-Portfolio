import type { Metadata } from 'next';
import Kali from '@/pages/Kali';

export const metadata: Metadata = {
	title: 'Download Kali Linux OVA - Kuadugah Delight',
	description: 'Download Kali Linux OVA file ready pre-configured for VirtualBox with 2GB RAM and 90GB storage | Kuadugah Delight',
};

export default function KaliPage() {
	return <Kali />;
}