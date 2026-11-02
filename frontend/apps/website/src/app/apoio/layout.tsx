import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/ui/atoms';

export const metadata: Metadata = {
  title: { default: 'Apoio a comerciantes', template: '%s · Apoio · FREE Madeira' },
  description:
    'Apoio a comerciantes da Madeira que aceitam Bitcoin: guia prático, passo a passo, da FREE Madeira.',
};

const nav = [
  { href: '/apoio', label: 'Guia' },
  { href: '/apoio/perguntas-frequentes', label: 'Perguntas frequentes' },
  { href: '/apoio/folheto', label: 'Folheto' },
  { href: '/apoio/glossario', label: 'Glossário' },
];

export default function ApoioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="pt-PT" className="bg-bridal-50 text-dark">
      <Container size="tighter" wrapperClasses="py-8 sm:py-12">
        <nav
          aria-label="Apoio"
          className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm print:hidden"
        >
          <strong>Apoio · FREE Madeira</strong>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="underline">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="max-w-3xl">{children}</div>

        <footer className="mt-12 max-w-3xl space-y-2 border-bridal-200 border-t pt-6 text-mountain-mist-500 text-sm print:hidden">
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
            : podes copiar, imprimir, traduzir e adaptar, desde que dês crédito e partilhes nas
            mesmas condições.
          </p>
          <p>
            Este guia foi inspirado no Bitcoin Coast — Guía de Bitcoin para Comerciantes, escrito
            por Evelyn Lemus (Berlín, El Salvador) e colocado no domínio público. Reescrevemo-lo de
            raiz para a realidade da Madeira.
          </p>
          <p>
            Material educativo. Não é aconselhamento financeiro, fiscal nem jurídico: para
            contabilidade e impostos, fala sempre com o teu contabilista.
          </p>
        </footer>
      </Container>
    </div>
  );
}
