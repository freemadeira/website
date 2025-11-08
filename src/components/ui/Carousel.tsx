'use client';

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/utils/classes';
import { capitalize } from '@/utils/functions';
import { type Button, Container, IconButton, ScreenReaderOnly } from './atoms';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  title?: string;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  title,
  autoPlay = true,
  autoPlayInterval = 10000,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [isUserInteracting, setIsUserInteracting] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
    setIsUserInteracting(true);
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
    setIsUserInteracting(true);
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  // Auto-play functionality
  React.useEffect(() => {
    if (!api || !autoPlay) return;

    const autoPlayTimer = setInterval(() => {
      if (!isUserInteracting) {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          // Loop back to the first slide when reaching the end
          api.scrollTo(0);
        }
      }
    }, autoPlayInterval);

    return () => clearInterval(autoPlayTimer);
  }, [api, autoPlay, autoPlayInterval, isUserInteracting]);

  // Reset user interaction flag after a delay
  React.useEffect(() => {
    if (!isUserInteracting) return;

    const resetTimer = setTimeout(() => {
      setIsUserInteracting(false);
    }, autoPlayInterval * 2); // Wait 2 cycles before resuming auto-play

    return () => clearTimeout(resetTimer);
  }, [isUserInteracting, autoPlayInterval]);

  // Pause auto-play on hover
  const handleMouseEnter = React.useCallback(() => {
    setIsUserInteracting(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsUserInteracting(false);
  }, []);

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        autoPlay,
        autoPlayInterval,
      }}
    >
      {/** biome-ignore lint/a11y/useSemanticElements: linting conflict */}
      <div
        role="region"
        onKeyDownCapture={handleKeyDown}
        onMouseEnter={autoPlay ? handleMouseEnter : undefined}
        onMouseLeave={autoPlay ? handleMouseLeave : undefined}
        className={cn('relative', className)}
        aria-roledescription="carousel"
        {...(title && { 'aria-label': `${capitalize(title)} carousel` })}
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden active:cursor-grabbing"
      data-slot="carousel-content"
    >
      <div className={cn('flex', className)} {...props} />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}
      {...props}
    />
  );
}

const arrowIconStyle = { className: 'size-7 sm:size-8', strokeWidth: 1.5 };
const iconButtonStyle: {
  colour: React.ComponentProps<typeof IconButton>['colour'];
  className: string;
} = {
  colour: 'white',
  className: 'border-[1.5px]',
};

function CarouselPrevious({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <IconButton
      data-slot="carousel-previous"
      {...iconButtonStyle}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft {...arrowIconStyle} />
      <ScreenReaderOnly>Previous slide</ScreenReaderOnly>
    </IconButton>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <IconButton
      data-slot="carousel-next"
      colour="white"
      className="border-[1.5px]"
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight {...arrowIconStyle} />
      <ScreenReaderOnly>Next slide</ScreenReaderOnly>
    </IconButton>
  );
}

export function CarouselControls() {
  return (
    <Container
      direction="row"
      gap={3}
      justifyContent="start"
      className="md:justify-center md:gap-4"
      wrapperClasses="absolute inset-x-0 bottom-14 mx-auto"
    >
      <CarouselPrevious />
      <CarouselNext />
    </Container>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
