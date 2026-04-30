'use client';

import { useIsMobile } from '@/hooks';

export function BtcMap(): React.ReactElement {
  const isMobile = useIsMobile();

  const src = isMobile
    ? 'https://btcmap.org/map#10/32.72043/-16.98716'
    : 'https://btcmap.org/map#11/32.76389/-16.97388';

  return (
    <div id="btc-map" className="mt-22 h-[700px] w-full overflow-hidden sm:mt-28">
      <iframe
        src={src}
        className="h-full w-full"
        loading="lazy"
        title="BTC Map showing merchants in Madeira"
      />
    </div>
  );
}
