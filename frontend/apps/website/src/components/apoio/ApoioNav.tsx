'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/apoio', label: 'Guia' },
  { href: '/apoio/perguntas-frequentes', label: 'Perguntas frequentes' },
  { href: '/apoio/folheto', label: 'Folheto' },
  { href: '/apoio/glossario', label: 'Glossário' },
];

export function ApoioNav(): React.ReactElement {
  const path = usePathname();
  return (
    <nav aria-label="Apoio" className="flex flex-wrap gap-x-5 text-[0.95rem]">
      {nav.map((n) => (
        <Link key={n.href} href={n.href} aria-current={path === n.href ? 'page' : undefined}>
          {n.label}
        </Link>
      ))}
    </nav>
  );
}
