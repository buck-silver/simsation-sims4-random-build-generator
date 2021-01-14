export class PackData {
  constructor(
    public name: string = '',
    public icon: string = '',
    public enabled: boolean = false,
    public category: string = ''
  ) {}
}

export const SIMS_4_PACKS: PackData[] = [
  {
    name: 'Get to Work',
    icon: 'EP01 Get To Work.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'Get Together',
    icon: 'EP02 Get Together.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'City Living',
    icon: 'EP03 City Living.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'Cats & Dogs',
    icon: 'EP04 Cats and Dogs.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'Get Famous',
    icon: 'EP06 Get Famous.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'Island Living',
    icon: 'EP07 Island Living.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'Discover University',
    icon: 'EP08 Discover University.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'Eco Lifestyle',
    icon: 'EP09 Eco Lifestyle.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'Snowy Escape',
    icon: 'EP10 Snowy Escape.png',
    enabled: true,
    category: 'Expansion',
  },
  {
    name: 'Spa Day',
    icon: 'GP02 Spa Day.png',
    enabled: true,
    category: 'Game',
  },
  {
    name: 'Vampires',
    icon: 'GP04 Vampires.png',
    enabled: true,
    category: 'Game',
  },
  {
    name: 'StrangerVille',
    icon: 'GP07 Strangerville.png',
    enabled: true,
    category: 'Game',
  },
  {
    name: 'Realm of Magic',
    icon: 'GP08 Realm of Magic.png',
    enabled: true,
    category: 'Game',
  },
  {
    name: 'Bowling Night',
    icon: 'SP10 Bowling Night Stuff.png',
    enabled: true,
    category: 'Stuff',
  },
];
