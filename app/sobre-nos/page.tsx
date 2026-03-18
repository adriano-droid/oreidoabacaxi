import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre o Rei do Abacaxi',
  description: 'Saiba mais sobre a nossa missão de compartilhar conhecimento, receitas e curiosidades sobre o abacaxi.',
  alternates: { canonical: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/sobre-nos' },
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
    title: 'Sobre o Rei do Abacaxi',
    description: 'Saiba mais sobre a nossa missão de compartilhar conhecimento, receitas e curiosidades sobre o abacaxi.',
    url: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/sobre-nos',
    images: [{ url: 'https://picsum.photos/seed/abacaxi/1200/675', width: 1200, height: 675 }],
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sobre o Rei do Abacaxi",
  "description": "Saiba mais sobre a nossa missão de compartilhar conhecimento, receitas e curiosidades sobre o abacaxi.",
  "image": "https://picsum.photos/seed/abacaxi/1200/675",
  "author": { "@type": "Person", "name": "Rei do Abacaxi" },
  "datePublished": "2026-03-18",
  "publisher": { "@type": "Organization", "name": "Rei do Abacaxi" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/sobre-nos" }
};

export default function SobreNos() {
  return (
    <div className="prose max-w-none px-4 py-8 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-4xl font-bold mb-6">Sobre o Rei do Abacaxi: Nossa Paixão Tropical</h1>
      <Image src="https://picsum.photos/seed/abacaxi/1200/675" alt="Sobre o Rei do Abacaxi" width={1200} height={675} referrerPolicy="no-referrer" className="mb-8 rounded-lg" />
      
      <p className="mb-4 text-lg">Bem-vindo ao <strong>O Rei do Abacaxi</strong>! Mais do que um site, somos uma comunidade dedicada a celebrar uma das frutas mais vibrantes, saborosas e versáteis que a natureza nos presenteou: o abacaxi.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Quem Somos</h2>
      <p className="mb-4">Nossa história começou com uma simples admiração pela coroa espinhosa e pelo interior dourado e doce do abacaxi. O que era apenas um gosto pessoal transformou-se em uma missão: compartilhar todo o conhecimento, receitas, benefícios e curiosidades sobre essa fruta maravilhosa com o mundo.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">O Que Fazemos</h2>
      <p className="mb-4">Aqui no Rei do Abacaxi, trabalhamos incansavelmente para trazer o melhor conteúdo sobre essa fruta. Nosso trabalho envolve:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Curadoria de Receitas:</strong> Do suco refrescante ao bolo mais fofinho, testamos e compartilhamos as melhores formas de usar o abacaxi na cozinha.</li>
        <li><strong>Informação Nutricional:</strong> Desmistificamos os benefícios do abacaxi para a saúde, falando sobre a bromelina, vitamina C e muito mais.</li>
        <li><strong>Dicas Práticas:</strong> Ensinamos como escolher o melhor abacaxi no mercado, como descascar sem desperdício e como conservar a fruta por mais tempo.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">O Fascinante Mundo do Abacaxi</h2>
      <p className="mb-4">O abacaxi (<em>Ananas comosus</em>) não é apenas uma fruta; é um símbolo de hospitalidade e tropicalidade. Originário da América do Sul, ele conquistou o mundo com seu sabor único.</p>
      <p className="mb-4">Existem diversas variedades, como o <strong>Pérola</strong>, conhecido por sua polpa branca e doçura intensa, e o <strong>Hawai</strong>, muito apreciado por sua suculência. Cada um tem suas particularidades, mas todos compartilham aquela refrescância inconfundível.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Por Que Amamos o Abacaxi?</h2>
      <p className="mb-4">Nós amamos o abacaxi porque ele é democrático. Ele brilha tanto em um prato salgado, como em um molho para carnes, quanto em uma sobremesa sofisticada. É a fruta que traz o sol para dentro de casa, não importa a estação.</p>
      <p className="mb-4">Nossa equipe é movida pela alegria que o abacaxi proporciona. Se você também é um entusiasta dessa fruta, você está no lugar certo!</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Junte-se a Nós</h2>
      <p className="mb-4">Explore nosso site, teste nossas receitas e descubra novos motivos para amar o abacaxi tanto quanto nós. Estamos sempre atualizando nosso conteúdo, então volte sempre para conferir as novidades!</p>
    </div>
  );
}
