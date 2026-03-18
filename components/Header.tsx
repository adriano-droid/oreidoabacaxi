'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-yellow-500 text-white p-4 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">O Rei do Abacaxi</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          <li><Link href="/" className="hover:text-yellow-100">Início</Link></li>
          <li><Link href="/termos-de-uso" className="hover:text-yellow-100">Termos de uso</Link></li>
          <li><Link href="/politicas-de-privacidade" className="hover:text-yellow-100">Políticas de privacidade</Link></li>
          <li><Link href="/sobre-nos" className="hover:text-yellow-100">Sobre nós</Link></li>
          <li><Link href="/contato" className="hover:text-yellow-100">Contato</Link></li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-2 bg-yellow-600 p-4 rounded-lg">
          <li><Link href="/" onClick={() => setIsOpen(false)} className="block py-2">Início</Link></li>
          <li><Link href="/termos-de-uso" onClick={() => setIsOpen(false)} className="block py-2">Termos de uso</Link></li>
          <li><Link href="/politicas-de-privacidade" onClick={() => setIsOpen(false)} className="block py-2">Políticas de privacidade</Link></li>
          <li><Link href="/sobre-nos" onClick={() => setIsOpen(false)} className="block py-2">Sobre nós</Link></li>
          <li><Link href="/contato" onClick={() => setIsOpen(false)} className="block py-2">Contato</Link></li>
        </ul>
      )}
    </header>
  );
}
