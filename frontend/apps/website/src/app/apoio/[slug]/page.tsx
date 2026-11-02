import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Blocks } from '@/components/apoio/Blocks';
import { Contact } from '@/components/apoio/Contact';
import { QaSlot } from '@/components/apoio/QaSlot';
import { CHAPTERS, findPage, PAGES } from '@/data/apoio';

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug);
  return { title: page?.title, description: page?.lead };
}

export default async function ApoioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();

  const idx = page.num ? CHAPTERS.findIndex((c) => c.slug === page.slug) : -1;
  const prev = idx > 0 ? CHAPTERS[idx - 1] : undefined;
  const next = idx >= 0 && idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : undefined;

  return (
    <article>
      <p>
        <Link className="underline" href="/apoio">
          ← Início
        </Link>
      </p>
      <h1 className="mt-4 font-medium text-4xl leading-tight">
        {page.num ? `${page.num}. ` : ''}
        {page.title}
      </h1>
      {page.lead && <p className="mt-3 text-lg text-mountain-mist-500">{page.lead}</p>}
      <Blocks blocks={page.blocks} collapse={page.collapseSections} />
      {(prev || next) && (
        <nav className="my-8 flex justify-between gap-4">
          {prev ? (
            <Link className="underline" href={`/apoio/${prev.slug}`}>
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="underline" href={`/apoio/${next.slug}`}>
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
      <QaSlot page={page.slug} />
      <Contact />
    </article>
  );
}
