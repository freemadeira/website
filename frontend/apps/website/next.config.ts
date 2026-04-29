import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    BUILD_YEAR: new Date().toLocaleString('pt-PT', {
      timeZone: 'Atlantic/Madeira',
      year: 'numeric',
    }),
  },
};

export default nextConfig;
