import type { Metadata } from 'next';

import { Contact } from '@/components/apoio/Contact';
import { Faq } from '@/components/apoio/Faq';
import { PageHead } from '@/components/apoio/PageHead';

export const metadata: Metadata = { title: 'Perguntas frequentes' };

export default function FaqPage() {
  return (
    <article>
      <PageHead
        tier="extra"
        title="Perguntas frequentes"
        lead="Respostas curtas, tiradas do guia. Procura uma palavra ou escolhe um tema."
      />
      <div className="ap-wrap ap-prose pt-10">
        <Faq />
      </div>
      <div className="ap-wrap">
        <Contact />
      </div>
    </article>
  );
}
