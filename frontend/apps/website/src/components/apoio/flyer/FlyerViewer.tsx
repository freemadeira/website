'use client';

import { Fraunces, Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './flyer.css';

import { InsideFaceSheet } from './InsideFaceSheet';
import { LocaleProvider, useLocale } from './LocaleContext';
import { OutsideFaceSheet } from './OutsideFaceSheet';
import { UnfoldingBrochure } from './UnfoldingBrochure';
import { LOCALES } from '@/data/apoio/flyer/content';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const fraunces = Fraunces({ variable: '--font-fraunces', subsets: ['latin'] });

const PRINT_LABEL = { pt: 'Imprimir', en: 'Print', de: 'Drucken', fr: 'Imprimer' } as const;

function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <fieldset className="language-switcher" aria-label="Language">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`language-switcher-btn${l.code === locale ? ' language-switcher-btn--active' : ''}`}
          onClick={() => setLocale(l.code)}
          aria-pressed={l.code === locale}
        >
          {l.label}
        </button>
      ))}
    </fieldset>
  );
}

function PrintButton() {
  const { locale } = useLocale();
  return (
    <button type="button" className="brochure-btn flyer-print" onClick={() => window.print()}>
      {PRINT_LABEL[locale]}
    </button>
  );
}

// Screen: the unfolding preview and a print button. The two print sheets are 297mm wide, wider
// than the site's content column, so they are rendered straight under <body> (a portal) and the
// print stylesheet in the page hides everything else. They never show on screen (.sheet).
export function FlyerViewer() {
  const [printRoot, setPrintRoot] = useState<HTMLElement | null>(null);
  useEffect(() => setPrintRoot(document.body), []);

  const fonts = `${inter.variable} ${fraunces.variable}`;
  return (
    <LocaleProvider>
      <div className={`apoio-flyer ${fonts}`}>
        <div className="viewer">
          <LanguageSwitcher />
          <UnfoldingBrochure />
          <PrintButton />
        </div>
      </div>
      {printRoot &&
        createPortal(
          <div className={`apoio-flyer apoio-print-root ${fonts}`}>
            <div className="viewer">
              <OutsideFaceSheet />
              <InsideFaceSheet />
            </div>
          </div>,
          printRoot,
        )}
    </LocaleProvider>
  );
}
