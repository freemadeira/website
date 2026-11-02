import type { Metadata } from 'next';
import { Bricolage_Grotesque, Literata } from 'next/font/google';
import Link from 'next/link';

import { ApoioNav } from '@/components/apoio/ApoioNav';
import './apoio.css';

const display = Bricolage_Grotesque({ variable: '--font-ap-display', subsets: ['latin'] });
const body = Literata({ variable: '--font-ap-body', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Apoio a comerciantes', template: '%s · Apoio · FREE Madeira' },
  description:
    'Apoio a comerciantes da Madeira que aceitam Bitcoin: guia prático, passo a passo, da FREE Madeira.',
};

export default function ApoioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="pt-PT" className={`ap-root ${display.variable} ${body.variable}`}>
      <header className="ap-bar print:hidden">
        <div className="ap-wrap flex flex-wrap items-center gap-x-8 gap-y-1 py-2">
          <Link href="/apoio" className="font-extrabold text-xl tracking-tight">
            Apoio
          </Link>
          <ApoioNav />
        </div>
      </header>

      {children}

      <footer className="ap-wrap mt-16 space-y-2 border-(--ap-line) border-t py-8 text-(--ap-mute) text-sm print:hidden">
        <p>
          <strong>Bitcoin no teu negócio</strong> — guia prático para comerciantes da Ilha da
          Madeira. Publicado pela Associação FREE Madeira — Fórum Regional para a Educação
          Económica. Edição 1.0, setembro de 2026, adaptada para a web.
        </p>
        <p>
          Licença{' '}
          <a
            className="underline"
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-SA 4.0
          </a>
          : podes copiar, imprimir, traduzir e adaptar, desde que dês crédito e partilhes nas mesmas
          condições.
        </p>
        <p>
          Este guia foi inspirado no Bitcoin Coast — Guía de Bitcoin para Comerciantes, escrito por
          Evelyn Lemus (Berlín, El Salvador) e colocado no domínio público. Reescrevemo-lo de raiz
          para a realidade da Madeira.
        </p>
        <p>
          Material educativo. Não é aconselhamento financeiro, fiscal nem jurídico: para
          contabilidade e impostos, fala sempre com o teu contabilista.
        </p>
      </footer>
    </div>
  );
}
