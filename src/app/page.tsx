import { UpcomingEvents } from '@/components/events';
import { Contribute, Education, Merchants, Partners } from '@/components/home';
import { About } from '@/components/home';
import { Hero } from '@/components/home/Hero';
import { Container } from '@/components/ui/atoms';
import { PortalHands } from '@/components/ui/svgs';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />

      <UpcomingEvents />

      <Education />

      <About />
      <Merchants />

      <Partners />

      <Contribute />
    </>
  );
}
