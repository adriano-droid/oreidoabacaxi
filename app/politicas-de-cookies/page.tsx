import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Política de Cookies | O Rei do Abacaxi',
  description: 'Saiba como utilizamos cookies para melhorar sua experiência em nosso site.',
  alternates: { canonical: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/politicas-de-cookies' },
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
    title: 'Política de Cookies | O Rei do Abacaxi',
    description: 'Saiba como utilizamos cookies para melhorar sua experiência em nosso site.',
    url: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/politicas-de-cookies',
    images: [{ url: 'https://picsum.photos/seed/abacaxi/1200/675', width: 1200, height: 675 }],
    type: 'article',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Política de Cookies | O Rei do Abacaxi",
  "description": "Saiba como utilizamos cookies para melhorar sua experiência em nosso site.",
  "image": "https://picsum.photos/seed/abacaxi/1200/675",
  "author": { "@type": "Person", "name": "Rei do Abacaxi" },
  "datePublished": "2026-03-18",
  "publisher": { "@type": "Organization", "name": "Rei do Abacaxi" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/politicas-de-cookies" }
};

export default function PoliticasDeCookies() {
  return (
    <div className="prose max-w-none px-4 py-8 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>
      <Image src="https://picsum.photos/seed/abacaxi/1200/675" alt="Política de Cookies" width={1200} height={675} referrerPolicy="no-referrer" className="mb-8 rounded-lg" />
      
      <p className="mb-4">No <strong>O Rei do Abacaxi</strong>, utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site. Esta Política de Cookies explica o que são cookies, como os utilizamos, como terceiros com quem podemos fazer parceria podem usar cookies no serviço, suas escolhas em relação aos cookies e outras informações sobre cookies.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. O que são cookies?</h2>
      <p className="mb-4">Cookies são pequenos arquivos de texto enviados ao seu navegador por um site que você visita. Eles ajudam o site a lembrar informações sobre sua visita, como seu idioma preferido e outras configurações. Isso pode tornar sua próxima visita mais fácil e o site mais útil para você.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Como utilizamos os cookies</h2>
      <p className="mb-4">Utilizamos cookies para diversos fins, incluindo:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site, como navegar pelas páginas e acessar áreas seguras.</li>
        <li><strong>Cookies de Desempenho e Análise:</strong> Nos ajudam a entender como os visitantes interagem com nosso site, coletando e relatando informações de forma anônima.</li>
        <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre de escolhas que você fez (como seu nome de usuário ou região) para fornecer recursos aprimorados e personalizados.</li>
        <li><strong>Cookies de Publicidade:</strong> Usados para exibir anúncios mais relevantes para você e seus interesses.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Tipos de cookies que utilizamos</h2>
      <p className="mb-4">Podemos utilizar cookies de sessão (que expiram quando você fecha o navegador) e cookies persistentes (que permanecem no seu dispositivo por um período determinado ou até que você os exclua).</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Como gerenciar ou desativar cookies</h2>
      <p className="mb-4">Você tem o direito de decidir se aceita ou rejeita cookies. Você pode definir ou alterar os controles do seu navegador da web para aceitar ou recusar cookies. Se você optar por rejeitar cookies, ainda poderá usar nosso site, embora seu acesso a algumas funcionalidades e áreas do nosso site possa ser restrito.</p>
      <p className="mb-4">Como os meios pelos quais você pode recusar cookies através dos controles do seu navegador variam de navegador para navegador, você deve visitar o menu de ajuda do seu navegador para obter mais informações.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Alterações nesta Política de Cookies</h2>
      <p className="mb-4">Podemos atualizar esta Política de Cookies periodicamente para refletir, por exemplo, alterações nos cookies que usamos ou por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta página regularmente para se manter informado sobre nosso uso de cookies.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Mais informações</h2>
      <p className="mb-4">Se você tiver alguma dúvida sobre nosso uso de cookies ou outras tecnologias, entre em contato conosco através do nosso formulário de contato.</p>
    </div>
  );
}
