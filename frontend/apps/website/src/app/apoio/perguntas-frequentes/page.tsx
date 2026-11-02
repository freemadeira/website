import type { Metadata } from 'next';
import Link from 'next/link';

import { Contact } from '@/components/apoio/Contact';
import { Faq } from '@/components/apoio/Faq';

export const metadata: Metadata = { title: 'Perguntas frequentes' };

export default function FaqPage() {
  return (
    <article>
      <p>
        <Link className="underline" href="/apoio">
          ← Início
        </Link>
      </p>
      <h1 className="mt-4 font-medium text-4xl leading-tight">Perguntas frequentes</h1>
      <p className="mt-3 text-lg text-mountain-mist-500">
        Respostas curtas, tiradas do guia. Procura uma palavra ou escolhe um tema.
      </p>
      <Faq />
      <Contact />
    </article>
  );
}
