import { Metadata } from 'next';
import Image from 'next/image';
import ContatoForm from './contato-form';

export const metadata: Metadata = {
  title: 'Contato | O Rei do Abacaxi',
  description: 'Entre em contato conosco para sugestões, dúvidas ou parcerias.',
  alternates: { canonical: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/contato' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: 'Contato | O Rei do Abacaxi',
    description: 'Entre em contato conosco para sugestões, dúvidas ou parcerias.',
    url: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/contato',
    images: [{ url: 'https://picsum.photos/seed/abacaxi/1200/675', width: 1200, height: 675 }],
    type: 'article',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Contato | O Rei do Abacaxi",
  "description": "Entre em contato conosco para sugestões, dúvidas ou parcerias.",
  "image": "https://picsum.photos/seed/abacaxi/1200/675",
  "author": { "@type": "Person", "name": "Rei do Abacaxi" },
  "datePublished": "2026-03-18",
  "publisher": { "@type": "Organization", "name": "Rei do Abacaxi" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/contato" }
};

export default function ContatoPage() {
  return (
    <div className="prose max-w-none px-4 py-8 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-4xl font-bold mb-6">Contato</h1>
      <Image src="https://picsum.photos/seed/abacaxi/1200/675" alt="Contato" width={1200} height={675} referrerPolicy="no-referrer" className="mb-8 rounded-lg" />
      <ContatoForm />
    </div>
  );
}
