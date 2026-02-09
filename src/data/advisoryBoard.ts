import type { StaticImageData } from 'next/image';
import { pictures } from '@/assets/images/advisory-board';
import type { Social } from '@/components/ui/atoms/SocialButton';
export interface AdvisoryBoardMember {
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  category?: string;
  picture?: StaticImageData;
  socials?: Partial<Record<Social, string>>;
  bio?: string;
}

export const advisoryBoardMembers: AdvisoryBoardMember[] = [
  {
    firstName: 'Jeff',
    lastName: 'Booth',
    sex: 'male',
    category: 'Strategy',
    socials: {
      x: 'JeffBooth',
      nostr: 'npub1s05p3ha7en49dv8429tkk07nnfa9pcwczkf5x5qrdraqshxdje9sq6eyhe',
      linkedin: 'jeffdbooth',
    },
    picture: pictures.jeffBooth,
    bio: "Jeff Booth is a visionary leader, technology entrepreneur, Founding Partner at ego death capital and best-selling author of The Price of Tomorrow – Why Deflation is Key to an Abundant Future.  With a profound grasp of technology, system thinking, and design, he stands at the forefront of a shift from an outdated economic model to one designed for tomorrow. Jeff's insights and achievements have earned him the BC Technology Industry Association's Person of the Year in 2015 and in October 2023, he was honored with induction into the prestigious BCTIA's Hall of Fame.  Furthermore, in 2016, he gained recognition from Goldman Sachs, who named him one of the 100 Most Intriguing Entrepreneurs. In addition to his work investing and helping entrepreneurs build on the rails of Bitcoin, he is a Co-Founder of addy and NocNoc. Jeff also actively serves on the boards of Core Scientific, Fedi, and Breez, in addition to several advisory boards. A dedicated member of the Young Presidents Organization since 2004, he further contributes as a Founding Fellow at the Creative Destruction Lab.",
  },
  {
    firstName: 'Rob',
    lastName: 'Brinded',
    sex: 'male',
    category: 'Education',
    socials: {
      x: 'RobBrinded',
      nostr: 'npub1de8jsek5aykkng5ytlvhvjxjwmdnpjwjcly0q6mu3566tfm00g5sfy0ezd',
      linkedin: 'rob-brinded-4887817',
    },
    picture: pictures.robBrinded,
    bio: "Dedicated Personal Advisor and Educator specializing in elite athletes, CEOs, and entrepreneurs. Spearheading strength & conditioning and injury prevention initiatives for Chelsea FC while offering strategic insights as an Athlete Consultant for Barcelona FC. Trusted Consultant for the English National Ballet School. Pioneering Founder and Creator of EnergeticsOS & MeditationOS performance systems, optimizing mental and physical performance. Author of the transformative book 'Mind Decentralised: Becoming Masterless,' advocating for personal mastery and holistic development.",
  },
  {
    firstName: 'Max',
    lastName: 'DeMarco',
    sex: 'male',
    category: 'Marketing & Events',
    socials: {
      x: 'itsmaxdemarco',
      nostr: 'npub1lelkh3hhxw9hdwlcpk6q9t0xt9f7yze0y0nxazvzqjmre3p98x3sthkvyz',
      youtube: 'MaxDeMarco',
    },
    picture: pictures.maxDeMarco,
    bio: 'Max DeMarco is a filmmaker and founder of 21c Studios, with a strong commitment to creating videos centered around themes of freedom and innovation, particularly in the realms of Bitcoin and the Nostr protocol. He gained recognition for directing the first documentary on Nostr, which features insightful discussions with industry leaders, including Jack Dorsey. Through his work, Max seeks to inspire audiences to engage thoughtfully with the evolving landscape of digital freedom and embrace personal responsibility.',
  },
  {
    firstName: 'John',
    lastName: 'Dennehy',
    sex: 'male',
    category: 'Education',
    socials: {
      x: 'jdennehy_writes',
      nostr: 'nprofile1qqsywnwsaj4jk7amaq90su86s4uzvmhjgyk53pgzjlw5wg7unh543ecdpnxs0',
    },
    picture: pictures.johnDennehy,
    bio: 'John Dennehy was born in New York and became an activist in the wake of September 11th. While in jail after protesting the Iraq War, he decided to leave the country and moved to Ecuador in 2005. He is a best-selling author, award-winning journalist and has written about Bitcoin in Latin America for places such as the Guardian, Al-Jazeera, and the BBC. He moved to El Salvador in August of 2021 to found My First Bitcoin. In a world at the crossroads, he sees Bitcoin as humanity’s best chance to build something better. His first child was born in San Salvador in 2023.',
  },
  {
    firstName: 'Bert',
    lastName: 'de Groot',
    sex: 'male',
    category: 'Energy',
    socials: {
      x: 'BdGBertdeGroot',
      nostr: 'npub1jqs0u7zhh53e94gyhm4eu458wm6sw7z0kk66jjhhkhh346tcq2ysfgr247',
    },
    picture: pictures.bertDeGroot,
    bio: 'Bert de Groot keeps companies warm with bitcoin miners and helps businesses, families and plebs on their bitcoin journey. Green houses, workshops, warehouses and offices are being heated with bitcoin miners. In one of the greenhouses flowers are being grown. His company bitcoinbrabant.com is the official reseller of open source signing devices (hardware wallets). He has helped thousands of people with storage and payment solutions, Dutch bitcoin books, and much more.',
  },
  {
    firstName: 'Max',
    lastName: 'Hillebrand',
    sex: 'male',
    category: 'Technology',
    socials: {
      nostr: 'npub1klkk3vrzme455yh9rl2jshq7rc8dpegj3ndf82c3ks2sk40dxt7qulx3vt',
    },
    picture: pictures.maxHillebrand,
    bio: 'As a praxeologist, Max contributes to open-source projects, sharing his work freely to foster collaboration and innovation. His goal is to help build a parallel economy based on sound money, individual sovereignty, and free markets, where entrepreneurs can thrive without central authority.',
  },
  {
    firstName: 'Max',
    lastName: 'Kei',
    sex: 'male',
    socials: {
      x: 'keidunm',
      linkedin: 'mkei',
    },
    category: 'Finance',
    picture: pictures.maxKei,
    bio: 'CEO of Debifi and adviser to Hodl Hodl, and Organizer of the The Baltic Honeybadger conference. His expertise lies in building non-custodial Bitcoin tools, ranging from P2P retail trading to enterprise lending.',
  },
  {
    firstName: 'Stiven',
    lastName: 'Kerestegian',
    sex: 'male',
    category: 'Strategy',
    socials: {
      x: 'stiven_hey_',
      nostr: 'nprofile1qqsqu8ua4wwccjpmujttq6p6v5thnxvdg8fxlemj4fgy3gergvshj8qhpguq6',
      linkedin: 'stivenk',
    },
    picture: pictures.stivenKerestegian,
    bio: 'Stiven is a visionary product and venture designer whose award-winning career has shaped innovation across global markets. His experience includes strategic design for Microsoft, spearheading open innovation at LEGO Future Lab, and leading as Head of Global Innovation at IKEA Group. As co-founder of caos.global, a Bitcoin strategic design studio, and senior advisor to PlanB Network, Stiven continues to envision bold ideas, transforming them into impactful realities in the intersections of people, technology and business.',
  },
  {
    firstName: 'Janet',
    lastName: 'Maingi',
    sex: 'female',
    socials: {
      x: 'nduku_jay',
      linkedin: 'janet-maingi',
    },
    category: 'Energy',
    picture: pictures.janetMaingi,
    bio: 'Janet Maingi is the Co-Founder and Chief Operating Officer (COO) at Gridless, which deploys bitcoin mining on renewable energy mini grids to catalyse new energy generation and electrification in rural Africa. With 25+ years expertise in strategy implementation, project management, and people operations, Janet is passionate about fostering innovation, transparency, and transformative impact through operational excellence. ',
  },
  {
    firstName: 'Samson',
    lastName: 'Mow',
    sex: 'male',
    category: 'Strategy',
    socials: {
      x: 'Excellion',
      linkedin: 'samson',
    },
    picture: pictures.samsonMow,
    bio: 'Bitcoin philosopher and game developer with a degree in Business Administration. Samson is credited on the development of two of the most highly rated real-time strategy games of all time: "Dawn of War" and "Company of Heroes". He is a frequent headline speaker at conferences and often provides television commentary on Bitcoin.',
  },
  {
    firstName: 'Joe',
    lastName: 'Nakamoto',
    sex: 'male',
    category: 'Marketing & Events',
    socials: {
      x: 'JoeNakamoto',
      nostr: 'npub1lr2zzf989mvf393y0tv39ara6a4vddkd6y87z784up9vl6ks6j3qtudl6a',
      linkedin: 'Joenakamoto',
    },
    picture: pictures.joeNakamoto,
    bio: '@joenakamoto is a journalist, documentary maker & MC. As an independent journalist, Joe pushes the boundaries of Bitcoin content, giving away free Sats to strangers and shooting Youtube-friendly challenge videos. Joe is multi-lingual and travels the world trying to make sense of Bitcoin.',
  },
  {
    firstName: 'Adam',
    lastName: 'Nili',
    sex: 'male',
    socials: {
      x: 'adam_nili',
      nostr: 'npub18rtjz55wndqwlmgzpjjl9nr9msutvymc08znv2s0a9r5gk53cwjstc8a7u',
      linkedin: 'adam-nili',
    },
    picture: pictures.adamNili,
    bio: 'Adam is a lifelong entrepreneur and CEO of Methodos Global, an international advisory organization driving global impact through education, technology, and innovation. With a focus on Bitcoin education and technological advancement, Adam has developed educational initiatives that have reached 25 countries and has integrated modern financial literacy into university curricula. Currently, Adam leads and advises global projects in energy, education, and health in communities around the world.',
  },
  {
    firstName: 'Paulo',
    lastName: 'Pereira',
    sex: 'male',
    category: 'Legal & Governance',
    socials: {
      x: 'PauloPe63416386',
      linkedin: 'paulo-pereira-82803579',
    },
    picture: pictures.pauloPereira,
    bio: "Bachelor's degree in Economics with a postgraduate qualification in Corporate Finance, experienced in commercial banking for individuals and companies, as well as financial management in family-owned businesses leading their sectors in areas such as automotive distribution, car rentals, tourist real estate, and software development. For the past 11 years, he has been co-CEO of a Corporate Finance boutique and regularly participates in the governing bodies of companies. He loves Freedom and despises the State.",
  },
  {
    firstName: 'Daniel',
    lastName: 'Prince',
    sex: 'male',
    category: 'Strategy',
    socials: {
      x: 'Princey21M',
      nostr: 'npub1hghnjjpnvkz8t6gkszuf37d7puwc2qtxc65rnklqsngzv6kkug9qhhfyz2',
    },
    picture: pictures.danielPrince,
    bio: "Daniel is the author of the book Choose Life and host of the Bitcoin Podcast Once Bitten which is focused on sharing real-life stories of how Bitcoin has changed and shaped individuals' and families' lives forever.",
  },
  {
    firstName: 'Knut',
    lastName: 'Svanholm',
    sex: 'male',
    category: 'Strategy',
    socials: {
      x: 'knutsvanholm',
      nostr: 'npub1jt97tpsul3fp8hvf7zn0vzzysmu9umcrel4hpgflg4vnsytyxwuqt8la9y',
      linkedin: 'knut-svanholm-93591673',
    },
    picture: pictures.knutSvanholm,
    bio: "Knut Svanholm is a Bitcoin author, educator, and armchair philosopher. His first work, 'Bitcoin: Sovereignty through Mathematics,' is widely regarded as a classic in the space, earning recognition as a recommended read on numerous educational platforms, including MicroStrategy's Bitcoin site hope.com. Knut is credited with coining the popular meme 'Everything Divided by 21 Million,' a phrase that encapsulates the scarcity and mathematical principles underpinning Bitcoin. Knut is also the host of The Bitcoin Infinity Show.",
  },
  {
    firstName: 'Hermann',
    lastName: 'Vivier',
    sex: 'male',
    category: 'Community',
    socials: {
      x: 'BitcoinEkasi',
    },
    picture: pictures.hermannVivier,
    bio: 'Hermann Buhr Vivier is the founder of Bitcoin Ekasi, est. 2021. Bitcoin Ekasi is a Bitcoin circular economy project based in Mossel Bay, South Africa. The project is inspired by Bitcoin Beach (El Salvador) and utilizes The Surfer Kids, a social development & youth empowerment non-profit that Hermann co-founded in 2010, as a community platform. Hermann’s involvement with Bitcoin dates back to late 2013 when he stumbled across an early print copy of Bitcoin Magazine. Later, in 2015, an international tourism business he co-owns with his wife was separated from its client base due to financial sanctions. Bitcoin became a way to receive payments, bypassing sanctions and saving their business. This experience triggered a deep interest in Bitcoin as a solution to immediate problems, related specifically to its use as an uncensorable medium of exchange.',
  },
  {
    firstName: 'Peter',
    lastName: 'Young',
    sex: 'male',
    socials: {
      x: 'petermiyoung',
      nostr: 'nprofile1qqs0cfrsa5vksqwa4nju9093fffl5hhflq0wxedlf9v0jnrpzlv7ufcvg8qer',
      linkedin: 'peter-young-70b80a42',
    },
    picture: pictures.peterYoung,
    bio: "Peter is the Managing Director of the Free Cities Foundation, a non-profit dedicated to advancing self-governing territories that uphold individual rights, freedoms, and voluntary governance. The foundation's partners include autonomous zones like the ZEDEs in Honduras, intentional communities such as Montelibero in Montenegro, and self-governing territories such as Sark and Madeira. A Bitcoiner since 2017, Peter previously worked alongside Saifedean Ammous, supporting his online learning platform and contributing to educational resources on bitcoin, sound money and economic freedom.",
  },
];
