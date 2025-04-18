import { Container, Flex, Heading } from '@/components/ui/atoms';
import { EventCard } from './EventCard';
import { EventTags } from './EventTags';

export function UpcomingEvents(): React.ReactElement {
  return (
    <Container className="mx-0 gap-7" outer>
      <Heading size="h5" className="mx-4 sm:mx-0">
        Upcoming Events
      </Heading>

      <div className="no-scrollbar overflow-x-auto">
        <Flex gap={8} className="w-fit overflow-x-auto px-4 sm:px-0">
          <EventCard
            event={{
              date: 'December 26, 2024, 17:00',
              title: 'The Digital Gold Summit',
              description: 'Join us for a worksho Next.js',
              tags: ['Online', 'Workshop'],
            }}
          />
          <EventCard
            event={{
              date: 'DECEMBER 26, 2024, 17:00',
              title: 'The Digital Gold Summit',
              description:
                'Join us for a workshop on how to build a website with Next.js. Some more text to make this description stand out from the others in terms of length, so that it occupies necessarily more lines than the others.',
              tags: ['Online', 'Workshop'],
            }}
          />
          <EventCard
            event={{
              date: 'DECEMBER 26, 2024, 17:00',
              title: 'The Digital Gold Summit',
              description: 'Join us for a workshop on how to build a website with Next.js',
              tags: ['Online', 'Workshop'],
            }}
          />
          <EventCard
            event={{
              date: 'DECEMBER 26, 2024, 17:00',
              title: 'The Digital Gold Summit',
              description: 'Join us for a workshop on how to build a website with Next.js',
              tags: ['Online', 'Workshop'],
            }}
          />
        </Flex>
      </div>
    </Container>
  );
}
