import Link from 'next/link';

// Coloured band that opens every page. The colour is the page's door (see apoio.css).
export function PageHead({
  tier,
  num,
  title,
  lead,
}: {
  tier: 'agora' | 'balcao' | 'depois' | 'extra' | 'inicio';
  num?: number;
  title: string;
  lead?: string;
}): React.ReactElement {
  return (
    <div className={`ap-head ap-tier-${tier === 'inicio' ? 'extra' : tier} print:hidden`}>
      <div className="ap-wrap relative overflow-hidden pt-6 pb-12 sm:pb-16">
        <Link
          className="font-semibold text-[0.95rem] underline [font-family:var(--font-ap-display)]"
          href="/apoio"
        >
          ← Início
        </Link>
        {num !== undefined && (
          <span
            className="ap-num pointer-events-none absolute -top-1 right-3 select-none"
            aria-hidden="true"
          >
            {num}
          </span>
        )}
        <h1 className="mt-8 max-w-[20ch] text-[clamp(2rem,6vw,3.75rem)]">{title}</h1>
        {lead && <p className="mt-4 max-w-[36rem] text-xl opacity-90">{lead}</p>}
      </div>
    </div>
  );
}
