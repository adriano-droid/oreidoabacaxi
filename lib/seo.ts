export const getArticleMetadata = (artigo: { titulo: string; slug: string }, url: string) => ({
  title: artigo.titulo,
  description: `Leia mais sobre ${artigo.titulo} no Rei do Abacaxi.`,
  alternates: { canonical: url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: artigo.titulo,
    description: `Leia mais sobre ${artigo.titulo} no Rei do Abacaxi.`,
    url: url,
    images: [{ url: 'https://picsum.photos/seed/abacaxi/1200/675', width: 1200, height: 675 }],
    type: 'article',
  },
});

export const getArticleJsonLd = (artigo: { titulo: string; slug: string }, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": artigo.titulo,
  "description": `Leia mais sobre ${artigo.titulo} no Rei do Abacaxi.`,
  "image": "https://picsum.photos/seed/abacaxi/1200/675",
  "author": { "@type": "Person", "name": "Rei do Abacaxi" },
  "datePublished": "2026-03-18",
  "publisher": { "@type": "Organization", "name": "Rei do Abacaxi" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": url }
});
