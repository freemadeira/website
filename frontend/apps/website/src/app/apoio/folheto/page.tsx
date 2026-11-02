import type { Metadata } from 'next';
import Link from 'next/link';

import { FlyerViewer } from '@/components/apoio/flyer/FlyerViewer';

export const metadata: Metadata = { title: 'Folheto para comerciantes' };

export default function FlyerPage() {
  return (
    <article>
      {/* Printing: only the flyer sheets, on A4 landscape; the site chrome stays out. */}
      <style>
        {
          '@page { size: A4 landscape; margin: 0 } @media print { body > *:not(.apoio-print-root) { display: none !important; } body { margin: 0; } }'
        }
      </style>

      <p className="print:hidden">
        <Link className="underline" href="/apoio">
          ← Início
        </Link>
      </p>
      <h1 className="mt-4 font-medium text-4xl leading-tight print:hidden">
        Folheto para comerciantes
      </h1>
      <p className="my-3 text-lg text-mountain-mist-500 print:hidden">
        O folheto que deixamos nas lojas: abra-o aqui e imprima em A4, frente e verso.
      </p>
      <FlyerViewer />
    </article>
  );
}
