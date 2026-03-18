'use client';
import { useState } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('cookieConsent');
    }
    return false;
  });

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p>Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossas políticas.</p>
      <button onClick={accept} className="bg-yellow-500 text-black px-4 py-2 rounded">Aceitar</button>
    </div>
  );
}
