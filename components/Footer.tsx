import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-green-800 text-white p-4 text-center">
      <p>&copy; 2026 O Rei do Abacaxi. Todos os direitos reservados.</p>
      <Link href="/politicas-de-cookies" className="underline">Políticas de Cookies</Link>
    </footer>
  );
}
