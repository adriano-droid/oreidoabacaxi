import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'O Rei do Abacaxi',
  description: 'O maior diretório de artigos, receitas e curiosidades sobre abacaxi.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className="pt-20 pb-20">
        <Header />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
