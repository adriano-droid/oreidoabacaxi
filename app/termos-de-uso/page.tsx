import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Termos de Uso | O Rei do Abacaxi',
  description: 'Leia os nossos termos de uso e entenda as regras para utilizar o site O Rei do Abacaxi.',
  alternates: { canonical: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/termos-de-uso' },
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
    title: 'Termos de Uso | O Rei do Abacaxi',
    description: 'Leia os nossos termos de uso e entenda as regras para utilizar o site O Rei do Abacaxi.',
    url: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/termos-de-uso',
    images: [{ url: 'https://picsum.photos/seed/abacaxi/1200/675', width: 1200, height: 675 }],
    type: 'article',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Termos de Uso | O Rei do Abacaxi",
  "description": "Leia os nossos termos de uso e entenda as regras para utilizar o site O Rei do Abacaxi.",
  "image": "https://picsum.photos/seed/abacaxi/1200/675",
  "author": { "@type": "Person", "name": "Rei do Abacaxi" },
  "datePublished": "2026-03-18",
  "publisher": { "@type": "Organization", "name": "Rei do Abacaxi" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/termos-de-uso" }
};

export default function TermosDeUso() {
  return (
    <div className="prose max-w-none">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-4xl font-bold mb-6">Termos de Uso</h1>
      <Image src="https://picsum.photos/seed/abacaxi/1200/675" alt="Termos de Uso" width={1200} height={675} referrerPolicy="no-referrer" className="mb-8 rounded-lg" />
      <p className="mb-4">Bem-vindo ao <strong>O Rei do Abacaxi</strong>. Ao acessar ou utilizar nosso site, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nosso site.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Uso do Site</h2>
      <p className="mb-4">O conteúdo deste site é fornecido apenas para fins informativos e educacionais sobre o abacaxi. Você concorda em usar este site apenas para fins lícitos e de maneira que não infrinja os direitos de terceiros ou restrinja o uso do site por outros.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Propriedade Intelectual</h2>
      <p className="mb-4">Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos e design, é de propriedade exclusiva do O Rei do Abacaxi ou de seus licenciadores, sendo protegido pelas leis de direitos autorais. É proibida a reprodução, distribuição ou modificação de qualquer parte do conteúdo sem nossa autorização prévia por escrito.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Isenção de Responsabilidade</h2>
      <p className="mb-4">O conteúdo deste site é fornecido &quot;como está&quot;. Embora nos esforcemos para manter as informações precisas e atualizadas, não garantimos a precisão, integridade ou adequação das informações para qualquer finalidade específica. O uso das informações é de sua inteira responsabilidade.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Limitação de Responsabilidade</h2>
      <p className="mb-4">O Rei do Abacaxi não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de usar este site ou das informações nele contidas.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Links para Terceiros</h2>
      <p className="mb-4">Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua conveniência e não implicam em endosso ou responsabilidade pelo conteúdo desses sites.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Alterações nos Termos</h2>
      <p className="mb-4">Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após a publicação das alterações constitui aceitação dos novos termos.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Lei Aplicável</h2>
      <p className="mb-4">Estes termos são regidos pelas leis brasileiras. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais competentes.</p>
    </div>
  );
}
