import type { Metadata } from 'next';

import { FlyerViewer } from '@/components/apoio/flyer/FlyerViewer';
import { PageHead } from '@/components/apoio/PageHead';

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

      <PageHead
        tier="extra"
        title="Folheto para comerciantes"
        lead="O folheto que deixamos nas lojas: abra-o aqui e imprima em A4, frente e verso."
      />
      <div className="ap-wrap pt-10">
        <FlyerViewer />
      </div>
    </article>
  );
}
