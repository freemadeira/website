export interface AdvisoryBoardMember {
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

export const advisoryBoardMembers: AdvisoryBoardMember[] = [
  {
    firstName: 'André',
    lastName: 'Loja',
    sex: 'male',
    categories: ['Boss'],
    picture: '/images/team-and-advisory-board/male-avatar.svg',
    socials: { x: 'x' },
    bio: 'André is the CEO of Free Madeira with over 10 years of experience in the tech industry.',
  },
  {
    firstName: 'Inês',
    lastName: 'Louro',
    sex: 'female',
    categories: ['CTO'],
    picture: '/images/team-and-advisory-board/female-avatar.svg',
    socials: { instagram: 'instagram' },
    bio: 'Inês is the CTO of Free Madeira and a passionate advocate for open-source software.',
  },
  {
    firstName: 'Henrique',
    lastName: 'Albuquerque',
    sex: 'male',
    categories: ['Advisor', 'Blockchain Expert'],
    picture: '/images/team-and-advisory-board/male-avatar.svg',
    socials: { nostr: 'nostr', x: 'x', instagram: 'instagram' },
    bio: 'Henrique brings a wealth of knowledge in blockchain technology and decentralized systems.',
  },
  {
    firstName: 'Carolina',
    lastName: 'Roovers',
    sex: 'female',
    categories: ['Marketing'],
    picture: '/images/team-and-advisory-board/female-avatar.svg',
    socials: { x: 'x', instagram: 'instagram' },
  },
  {
    firstName: 'Mafalda',
    lastName: 'Brazão',
    sex: 'female',
    categories: ['Developer'],
    picture: '/images/team-and-advisory-board/female-avatar.svg',
    socials: { x: 'x' },
    bio: 'Mafalda is a full-stack developer with expertise in building scalable web applications.',
  },
  {
    firstName: 'Luísa',
    lastName: 'Silva',
    sex: 'female',
    categories: ['Designer'],
    picture: '/images/team-and-advisory-board/female-avatar.svg',
    socials: { instagram: 'instagram' },
    bio: 'Luísa is our lead designer, crafting user-centric designs that enhance user experience.',
  },
];
