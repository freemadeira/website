import type { Social } from '@/components/ui/atoms/SocialButton';
import { pictures } from '@/assets/images/team';

export interface TeamMember {
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  categories: string[];
  picture?: string;
  socials: Partial<Record<Social, string>>;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    firstName: 'André',
    lastName: 'Loja',
    sex: 'male',
    categories: ['Founder'],
    picture: pictures.andreLoja,
    socials: {
      x: 'andreloja',
      linkedin: 'andreloja',
      nostr: 'npub1tdc9um9kqfp9cqvjqtwswzsvqzdsgzkpn9swamed3286kfwpaljsrr8r0y',
    },
    bio: 'André Loja is a native of Madeira, father of four, and a dedicated serial entrepreneur committed to fostering innovation and resilience on the archipelago. He founded FREE Madeira, an initiative focused on Bitcoin adoption, education, and community building. In 2024, he launched the first Bitcoin Atlantis Conference, which brought together global Bitcoin leaders to Madeira and highlighted the island’s potential on the international stage. His ventures include Basalto, a Bitcoin investment fund; Monstera Media, a publishing house for Bitcoin literature; and Satsflow, a user-friendly Lightning wallet. He also owns An Island Apart, a leading holiday rental company offering curated stays across Madeira, and helped establish Cowork Funchal, a vibrant coworking space supporting a growing community of remote professionals. Through these projects, André contributes to Madeira’s evolution as a more open, forward-looking, and globally connected island economy.',
  },
  {
    firstName: 'Henrique',
    lastName: 'Albuquerque',
    sex: 'male',
    categories: ['Head of Education'],
    socials: {
      nostr: 'npub1e6yjcxup0d90x3kvty7m54kc0r4c4smpggsvajvhtlyyeyfrkjtqhcl44p',
      x: 'liberspace',
    },
  },
  {
    firstName: 'Mafalda',
    lastName: 'Brazão',
    sex: 'female',
    picture: pictures.mafaldaBrazao,
    categories: ['Senior Project Manager'],
    socials: {},
  },
  {
    firstName: 'Luísa',
    lastName: 'Costa',
    sex: 'female',
    categories: ['Project Manager'],
    socials: {},
  },
  {
    firstName: 'Marília',
    lastName: 'Marques',
    sex: 'female',
    categories: ['Marketing & Communication'],
    socials: {},
  },
  {
    firstName: 'Carolina',
    lastName: 'Roovers',
    sex: 'female',
    categories: ['Designer'],
    socials: {},
  },
  {
    firstName: 'Inês',
    lastName: 'Louro',
    sex: 'female',
    categories: ['Education', 'Developer'],
    socials: {},
  },
];
