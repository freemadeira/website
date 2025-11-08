import { FeaturedGrid } from '../ui/featured';
import { CategoryInfo } from './CategoryInfo';

const items = [
  {
    info: CategoryInfo({ format: 'course', level: 'beginner' }),
    title: 'Diploma Bitcoin',
    description:
      'Sure, you know you go to work to earn money, and you need money to buy food and pay for housing, amongst other essentials. But have you ever stopped to think about what it is, where it comes from and how it really works?',
    tags: ['Bitcoin', 'Economics'],
    // imgSrc: '/images/education/diploma-bitcoin.png',
    href: '/education/diploma-bitcoin',
  },
  {
    info: CategoryInfo({ format: 'course', level: 'beginner' }),
    title: 'Diploma Bitcoin',
    description:
      'Sure, you know you go to work to earn money, and you need money to buy food and pay for housing, amongst other essentials. But have you ever stopped to think about what it is, where it comes from and how it really works?',
    tags: ['Bitcoin', 'Economics'],
    // imgSrc: '/images/education/diploma-bitcoin.png',
    href: '/education/diploma-bitcoin',
  },
  {
    info: CategoryInfo({ format: 'course', level: 'beginner' }),
    title: 'Diploma Bitcoin',
    description:
      'Sure, you know you go to work to earn money, and you need money to buy food and pay for housing, amongst other essentials. But have you ever stopped to think about what it is, where it comes from and how it really works?',
    tags: ['Bitcoin', 'Economics'],
    // imgSrc: '/images/education/diploma-bitcoin.png',
    href: '/education/diploma-bitcoin',
  },
  {
    info: CategoryInfo({ format: 'course', level: 'beginner' }),
    title: 'Diploma Bitcoin',
    description:
      'Sure, you know you go to work to earn money, and you need money to buy food and pay for housing, amongst other essentials. But have you ever stopped to think about what it is, where it comes from and how it really works?',
    tags: ['Bitcoin', 'Economics'],
    // imgSrc: '/images/education/diploma-bitcoin.png',
    href: '/education/diploma-bitcoin',
  },
];

export const FeaturedEducation = (): React.ReactElement => {
  return <FeaturedGrid title="Featured Education" items={items} />;
};
