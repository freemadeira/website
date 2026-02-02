import type { StaticImageData } from 'next/image';
import type { Social } from '@/components/ui/atoms/SocialButton';
import { pictures } from '@/assets/images/team';

export interface TeamMember {
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  role: string;
  picture?: StaticImageData;
  socials?: Partial<Record<Social, string>>;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    firstName: 'André',
    lastName: 'Loja',
    sex: 'male',
    role: 'Founder',
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
    picture: pictures.henriqueAlbuquerque,
    sex: 'male',
    role: 'Head of Education',
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
    role: 'Senior Project Manager',
    bio: 'She coordinates and delivers projects, connecting people, ideas, and resources — with a clear focus on solving problems and making things happen.',
  },
  {
    firstName: 'Luísa',
    lastName: 'Costa',
    sex: 'female',
    role: 'Project Manager',
    picture: pictures.luisaCosta,
  },
  {
    firstName: 'Marília',
    lastName: 'Marques',
    picture: pictures.mariliaMarques,
    sex: 'female',
    role: 'Social Media Manager',
    socials: {
      x: 'mariliasm03',
      nostr: 'npub1lt5sun5fgd2vce2p5yeku9njyka8s6e4e4nkpvncycx84vv8xf9q032gtn',
    },
    bio: 'Bitcoin enthusiast working in digital communication, with experience in content creation, video editing, and social media management. Her work aims to deepen Bitcoin education and increase awareness of its economic, technological, and cultural relevance.',
  },
  {
    firstName: 'Carolina',
    lastName: 'Roovers',
    picture: pictures.carolinaRoovers,
    sex: 'female',
    role: 'Designer & Project Manager',
    bio: 'A designer who combines creativity and strategy, and supports event coordination by connecting concepts, people, and experiences.',
  },
  {
    firstName: 'Inês',
    lastName: 'Louro',
    picture: pictures.inesLouro,
    sex: 'female',
    role: 'Education Builder & Software Developer',
    socials: {
      nostr: 'npub1yaz5asg4uzj2zckgq2n5sjkwj7u7cdmz0hk2905xgkuc7d5vj98qwyhh3p',
    },
    bio: 'Inês Louro is a software developer and Bitcoin enthusiast who enjoys teaching. She has taught coding and now teaches Bitcoin, designing and creating educational content to empower others through knowledge.',
  },
];
