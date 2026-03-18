import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Política de Privacidade | O Rei do Abacaxi',
  description: 'Saiba como coletamos e utilizamos suas informações pessoais no Rei do Abacaxi.',
  alternates: { canonical: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/politicas-de-privacidade' },
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
    title: 'Política de Privacidade | O Rei do Abacaxi',
    description: 'Saiba como coletamos e utilizamos suas informações pessoais no Rei do Abacaxi.',
    url: 'https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/politicas-de-privacidade',
    images: [{ url: 'https://picsum.photos/seed/abacaxi/1200/675', width: 1200, height: 675 }],
    type: 'article',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Política de Privacidade | O Rei do Abacaxi",
  "description": "Saiba como coletamos e utilizamos suas informações pessoais no Rei do Abacaxi.",
  "image": "https://picsum.photos/seed/abacaxi/1200/675",
  "author": { "@type": "Person", "name": "Rei do Abacaxi" },
  "datePublished": "2026-03-18",
  "publisher": { "@type": "Organization", "name": "Rei do Abacaxi" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ais-dev-lxoap45lip4sc7b3ad6xqm-57063100800.us-west2.run.app/politicas-de-privacidade" }
};

export default function PoliticasDePrivacidade() {
  return (
    <div className="prose max-w-none px-4 py-8 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
      <Image src="https://picsum.photos/seed/abacaxi/1200/675" alt="Política de Privacidade" width={1200} height={675} referrerPolicy="no-referrer" className="mb-8 rounded-lg" />
      
      <p className="mb-4">No <strong>O Rei do Abacaxi</strong>, a privacidade de nossos visitantes é de extrema importância para nós. Este documento de Política de Privacidade descreve os tipos de informações pessoais que recebemos e coletamos, e como elas são utilizadas.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Informações que coletamos</h2>
      <p className="mb-4">Coletamos informações para fornecer melhores serviços a todos os nossos usuários. As informações que coletamos incluem:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Informações que você nos fornece diretamente (por exemplo, ao preencher nosso formulário de contato).</li>
        <li>Informações técnicas coletadas automaticamente (endereço IP, tipo de navegador, sistema operacional, etc.).</li>
        <li>Informações sobre como você interage com nosso site.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Uso das informações</h2>
      <p className="mb-4">Utilizamos as informações coletadas para os seguintes fins:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Fornecer, manter e melhorar nosso site.</li>
        <li>Responder às suas dúvidas e solicitações.</li>
        <li>Personalizar sua experiência de usuário.</li>
        <li>Analisar o uso do nosso site para melhorar seu desempenho.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Cookies e tecnologias semelhantes</h2>
      <p className="mb-4">Utilizamos cookies e tecnologias semelhantes para coletar informações sobre sua atividade em nosso site. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado. No entanto, algumas funcionalidades do nosso site podem não funcionar corretamente se você desativar os cookies.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Compartilhamento de informações com terceiros</h2>
      <p className="mb-4">Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir a lei, proteger nossos direitos ou com seu consentimento expresso.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Segurança das informações</h2>
      <p className="mb-4">Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Direitos dos usuários</h2>
      <p className="mb-4">Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que mantemos. Se desejar exercer esses direitos, entre em contato conosco através do nosso formulário de contato.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Alterações nesta política</h2>
      <p className="mb-4">Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contato</h2>
      <p className="mb-4">Se você tiver alguma dúvida sobre esta Política de Privacidade, não hesite em entrar em contato conosco.</p>
    </div>
  );
}
