'use client';
import { useState } from 'react';

export default function Contato() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    // Simulação do envio de e-mail
    setTimeout(() => {
      setStatus('Mensagem enviada com sucesso para contato@estudomedia.com.br!');
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Contato</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Nome" required className="w-full p-2 border" />
        <input type="email" placeholder="E-mail" required className="w-full p-2 border" />
        <textarea placeholder="Mensagem" required className="w-full p-2 border" rows={4}></textarea>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Enviar</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
