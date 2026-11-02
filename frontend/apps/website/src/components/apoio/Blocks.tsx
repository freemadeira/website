import Image from 'next/image';

import { Chooser, Inflation, Taps, Timeline, Triage } from './Widgets';
import type { Block } from '@/data/apoio/types';

const WIDGETS = {
  inflation: Inflation,
  timeline: Timeline,
  chooser: Chooser,
  triage: Triage,
  taps: Taps,
};

// "Caminho …" headings start a collapsible section that runs to the next one.
function groupSections(blocks: Block[]): Block[] {
  const out: Block[] = [];
  let current: Extract<Block, { t: 'details' }> | undefined;
  for (const b of blocks) {
    if (b.t === 'h' && b.x.startsWith('Caminho ')) {
      current = { t: 'details', title: b.x, open: b.x.startsWith('Caminho A'), x: [] };
      out.push(current);
    } else if (current) {
      current.x.push(b);
    } else {
      out.push(b);
    }
  }
  return out;
}

export function Blocks({
  blocks,
  collapse,
}: {
  blocks: Block[];
  collapse?: boolean;
}): React.ReactElement {
  const list = collapse ? groupSections(blocks) : blocks;
  return (
    <>
      {list.map((b, i) => {
        const key = `${b.t}-${i}`;
        switch (b.t) {
          case 'p':
            return (
              <p key={key} className="my-4">
                {b.x}
              </p>
            );
          case 'h':
            return (
              <h3 key={key} className="mt-8 mb-2 font-semibold text-2xl">
                {b.x}
              </h3>
            );
          case 'ul':
            return (
              <ul key={key} className="my-4 list-disc space-y-2 pl-6">
                {b.x.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key} className="my-4 list-decimal space-y-2 pl-6">
                {b.x.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ol>
            );
          case 'note':
            return (
              <aside key={key} className="ap-note">
                <strong className="block [font-family:var(--font-ap-display)]">{b.title}</strong>
                {b.x.map((p) => (
                  <p key={p} className="mt-2">
                    {p}
                  </p>
                ))}
              </aside>
            );
          case 'img':
            return (
              <figure key={key} className="my-8">
                <Image src={b.src} alt={b.alt} className="h-auto w-full rounded-md" />
                {b.caption && (
                  <figcaption className="mt-2 text-(--ap-mute) text-sm">{b.caption}</figcaption>
                )}
              </figure>
            );
          case 'widget': {
            const W = WIDGETS[b.id];
            return <W key={key} />;
          }
          case 'details':
            return (
              <details key={key} className="my-3 border-(--ap-line) border-y px-1" open={b.open}>
                <summary className="cursor-pointer py-3 font-bold text-lg">{b.title}</summary>
                <Blocks blocks={b.x} />
              </details>
            );
          case 'table':
            return (
              <div key={key} className="my-6 overflow-x-auto">
                <table className="ap-table w-full border-collapse text-left text-[0.95rem]">
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} className="p-2 pr-4">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r) => (
                      <tr key={r.join('|')}>
                        {r.map((c) => (
                          <td key={c} className="p-2 pr-4 align-top">
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
