'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import { findPage } from '@/data/apoio';
import { FAQ, FAQ_CATS } from '@/data/apoio/faq';

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const chip = (on: boolean) =>
  `rounded-full border px-3 py-1 text-sm ${on ? 'border-primary-500 bg-primary-400 font-semibold' : 'border-bridal-300'}`;

export function Faq(): React.ReactElement {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('');
  const shown = useMemo(() => {
    const words = fold(query).split(/\s+/).filter(Boolean);
    return FAQ.filter(
      (e) => (!cat || e.cat === cat) && words.every((w) => fold(`${e.q} ${e.a}`).includes(w)),
    );
  }, [query, cat]);

  return (
    <>
      <input
        className="my-3 w-full rounded-xl border border-bridal-300 bg-white px-4 py-3"
        type="search"
        placeholder="Procurar, por exemplo: IVA, devolução, equipa…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Procurar nas perguntas"
      />
      <div className="my-3 flex flex-wrap gap-2">
        <button type="button" className={chip(!cat)} onClick={() => setCat('')}>
          Todas
        </button>
        {FAQ_CATS.map((c) => (
          <button
            key={c}
            type="button"
            className={chip(cat === c)}
            onClick={() => setCat(cat === c ? '' : c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="text-mountain-mist-500 text-sm" aria-live="polite">
        {shown.length} {shown.length === 1 ? 'pergunta' : 'perguntas'}
      </p>
      {shown.map((e) => {
        const target = e.to ? findPage(e.to) : undefined;
        return (
          <details key={e.q} className="my-3 rounded-xl border border-bridal-200 px-4">
            <summary className="cursor-pointer py-3 font-semibold">{e.q}</summary>
            <p className="mb-3">{e.a}</p>
            {target && (
              <p className="mb-3">
                <Link className="underline" href={`/apoio/${target.slug}`}>
                  Ler mais: {target.title}
                </Link>
              </p>
            )}
          </details>
        );
      })}
      {shown.length === 0 && (
        <p className="my-4">
          Não encontrámos nada. Pergunta-nos no grupo de apoio a comerciantes no WhatsApp ou por
          email, em baixo.
        </p>
      )}
    </>
  );
}
