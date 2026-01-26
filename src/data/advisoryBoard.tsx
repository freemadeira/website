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
    socials: { x: 'x' },
    bio: 'André is the CEO of Free Madeira with over 10 years of experience in the tech industry.',
  },
  {
    firstName: 'Inês',
    lastName: 'Louro',
    sex: 'female',
    categories: ['CTO'],
    socials: { instagram: 'instagram' },
    bio: 'Inês is the CTO of Free Madeira and a passionate advocate for open-source software.',
  },
  {
    firstName: 'Henrique',
    lastName: 'Albuquerque',
    sex: 'male',
    categories: ['Advisor', 'Blockchain Expert'],
    socials: { nostr: 'nostr', x: 'x', instagram: 'instagram' },
    bio: 'Henrique is a seasoned blockchain expert with over 15 years of experience in decentralized technologies. He has been instrumental in advising numerous startups on blockchain integration and strategy. His deep understanding of cryptographic principles and distributed ledger technologies has made him a sought-after consultant in the industry. Henrique is passionate about fostering innovation and driving the adoption of blockchain solutions to solve real-world problems. In his free time, he contributes to open-source blockchain projects and mentors aspiring developers in the space. Henrique is a seasoned blockchain expert with over 15 years of experience in decentralized technologies. He has been instrumental in advising numerous startups on blockchain integration and strategy. His deep understanding of cryptographic principles and distributed ledger technologies has made him a sought-after consultant in the industry. Henrique is passionate about fostering innovation and driving the adoption of blockchain solutions to solve real-world problems. In his free time, he contributes to open-source blockchain projects and mentors aspiring developers in the space. Henrique is a seasoned blockchain expert with over 15 years of experience in decentralized technologies. He has been instrumental in advising numerous startups on blockchain integration and strategy. His deep understanding of cryptographic principles and distributed ledger technologies has made him a sought-after consultant in the industry. Henrique is passionate about fostering innovation and driving the adoption of blockchain solutions to solve real-world problems. In his free time, he contributes to open-source blockchain projects and mentors aspiring developers in the space.',
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
    bio: 'Mafalda is a full-stack developer with expertise in building scalable web applications.',
  },
  {
    firstName: 'Luísa',
    lastName: 'Silva',
    sex: 'female',
    categories: ['Designer'],
    socials: { instagram: 'instagram' },
    bio: 'Luísa is our lead designer, crafting user-centric designs that enhance user experience.',
  },
];
