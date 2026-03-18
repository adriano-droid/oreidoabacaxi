import CookieConsent from '@/components/CookieConsent';
import { artigos } from '@/lib/artigos';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Rei do Abacaxi',
  description: 'O maior diretório de artigos, receitas e curiosidades sobre abacaxi.',
  alternates: { canonical: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'O Rei do Abacaxi',
    description: 'O maior diretório de artigos, receitas e curiosidades sobre abacaxi.',
    url: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/',
    images: [{ url: 'https://picsum.photos/seed/abacaxi/1200/675', width: 1200, height: 675 }],
    type: 'article',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "O Rei do Abacaxi",
  "description": "O maior diretório de artigos, receitas e curiosidades sobre abacaxi.",
  "image": "https://picsum.photos/seed/abacaxi/1200/675",
  "author": { "@type": "Person", "name": "Rei do Abacaxi" },
  "datePublished": "2026-03-18",
  "publisher": { "@type": "Organization", "name": "Rei do Abacaxi" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/" }
};

export default function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Rei do Abacaxi!</h1>
      <p className="mb-8">O seu diretório completo sobre abacaxi. Confira nossos 100 artigos abaixo:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artigos.map((artigo) => (
          <Link key={artigo.slug} href={`/artigos/${artigo.slug}`} className="block p-4 bg-yellow-100 rounded hover:bg-yellow-200">
            {artigo.titulo}
          </Link>
        ))}
      </div>
      <CookieConsent />
    </div>
  );
}
