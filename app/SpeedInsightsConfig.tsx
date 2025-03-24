'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';

export function SpeedInsightsWrapper() {
  return (
    <SpeedInsights 
      debug={process.env.NODE_ENV === 'development'}
    />
  );
} 