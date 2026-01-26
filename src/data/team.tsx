export interface TeamMember {
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  categories: string[];
  picture?: string;
  socials: {
    x?: string;
    instagram?: string;
    nostr?: string;
  };
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    firstName: 'André',
    lastName: 'Loja',
    sex: 'male',
    categories: ['Boss'],
    socials: { x: 'x' },
  },
  {
    firstName: 'Inês',
    lastName: 'Louro',
    sex: 'female',
    categories: ['CTO'],
    socials: { instagram: 'instagram' },
  },
  {
    firstName: 'Henrique',
    lastName: 'Albuquerque',
    sex: 'male',
    categories: ['Advisor', 'Blockchain Expert'],
    socials: { nostr: 'nostr', x: 'x', instagram: 'instagram' },
  },
  {
    firstName: 'Carolina',
    lastName: 'Roovers',
    sex: 'female',
    categories: ['Marketing'],
    socials: { x: 'x', instagram: 'instagram' },
  },
  {
    firstName: 'Mafalda',
    lastName: 'Brazão',
    sex: 'female',
    categories: ['Developer'],
    socials: { x: 'x' },
  },
  {
    firstName: 'Luísa',
    lastName: 'Silva',
    sex: 'female',
    categories: ['Designer'],
    socials: { instagram: 'instagram' },
  },
];
