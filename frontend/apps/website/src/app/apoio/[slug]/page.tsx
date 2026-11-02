import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Blocks } from '@/components/apoio/Blocks';
import { Contact } from '@/components/apoio/Contact';
import { PageHead } from '@/components/apoio/PageHead';
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
    <article className={`ap-tier-${page.tier}`}>
      <PageHead tier={page.tier} num={page.num} title={page.title} lead={page.lead} />
      <div className="ap-wrap ap-prose pt-10">
        <Blocks blocks={page.blocks} collapse={page.collapseSections} />
        {(prev || next) && (
          <nav className="my-10 flex flex-wrap justify-between gap-x-6 gap-y-2 font-semibold [font-family:var(--font-ap-display)]">
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
      </div>
      <div className="ap-wrap">
        <Contact />
      </div>
    </article>
  );
}
