export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  country: string;
  region: string;
  commodity: string;
  pathway: string;
  stage: string;
  summary: string;
  tags: string[];
  year: number;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'drdgold',
    title: 'DRDGOLD Ergo Tailings Retreatment',
    company: 'DRDGOLD',
    country: 'South Africa',
    region: 'Africa',
    commodity: 'Gold',
    pathway: 'Critical Minerals Recovery',
    stage: 'Operating',
    summary: 'DRDGOLD operates the world\'s largest surface gold tailings retreatment operation, processing historic Witwatersrand tailings dumps south of Johannesburg. The Ergo operation processes over 1.2 million tonnes per month, recovering residual gold while progressively rehabilitating a vast legacy tailings footprint.',
    tags: ['Gold', 'Legacy Tailings', 'Surface Retreatment', 'South Africa'],
    year: 2008,
  },
  {
    id: 'vale-silica',
    title: 'Vale Tailings Sand for Construction',
    company: 'Vale',
    country: 'Brazil',
    region: 'South America',
    commodity: 'Iron Ore',
    pathway: 'Construction Materials',
    stage: 'Operating',
    summary: 'Vale has developed a programme converting iron ore processing tailings into manufactured sand for the Brazilian construction sector. The project addresses dam safety risk by actively dewatering and reprocessing tailings, while generating a commercial product that offsets natural sand extraction.',
    tags: ['Iron Ore', 'Construction Sand', 'Dam Safety', 'Brazil'],
    year: 2019,
  },
  {
    id: 'scandinavian-lithium',
    title: 'Keliber Lithium Tailings Reuse — Finland',
    company: 'Keliber',
    country: 'Finland',
    region: 'Europe',
    commodity: 'Lithium',
    pathway: 'Critical Minerals Recovery',
    stage: 'Demonstration',
    summary: 'Keliber\'s lithium hydroxide project in Central Finland includes a tailings management strategy designed to minimise long-term storage liability. Process tailings are assessed for spodumene recovery efficiency and potential reuse as fill material in road and civil construction, with the EU battery materials supply chain as the end market.',
    tags: ['Lithium', 'Battery Materials', 'EU Supply Chain', 'Finland'],
    year: 2022,
  },
  {
    id: 'codelco-copper',
    title: 'Codelco Copper Tailings Reprocessing',
    company: 'Codelco',
    country: 'Chile',
    region: 'South America',
    commodity: 'Copper',
    pathway: 'Critical Minerals Recovery',
    stage: 'Pilot',
    summary: 'Codelco is advancing several tailings retreatment initiatives targeting residual copper and molybdenum in legacy storage facilities across the Atacama and central Chile. The strategy combines hydrometallurgical and bioleaching pathways to recover value from low-grade historic tailings while reducing the closure liability of aging facilities.',
    tags: ['Copper', 'Molybdenum', 'Bioleaching', 'Chile'],
    year: 2021,
  },
  {
    id: 'sandvik-paste',
    title: 'Paste Tailings Backfill — Canadian Underground Mines',
    company: 'Multiple Operators',
    country: 'Canada',
    region: 'North America',
    commodity: 'Various',
    pathway: 'Underground Backfill',
    stage: 'Operating',
    summary: 'Paste and cemented paste backfill (CPB) technology is now widely used across Canadian underground mines to return processed tailings into mined voids. This approach eliminates surface storage for a significant proportion of tailings, improves ground stability, and reduces long-term closure liability, with established operations at Glencore, Agnico Eagle, and Barrick sites.',
    tags: ['Backfill', 'Underground Mining', 'CPB', 'Canada'],
    year: 2005,
  },
  {
    id: 'rio-tinto-scandium',
    title: 'Rio Tinto Scandium Recovery from Titanium Tailings',
    company: 'Rio Tinto',
    country: 'Canada',
    region: 'North America',
    commodity: 'Scandium',
    pathway: 'Critical Minerals Recovery',
    stage: 'Operating',
    summary: 'Rio Tinto\'s RTFT operation in Quebec recovers scandium as a co-product from titanium and iron ore processing tailings. The facility produces scandium oxide for aerospace and solid oxide fuel cell applications, demonstrating the commercial viability of extracting critical materials previously discarded in processing residues.',
    tags: ['Scandium', 'Titanium', 'Critical Minerals', 'Quebec'],
    year: 2020,
  },
  {
    id: 'newmont-geotechnical',
    title: 'Newmont Tailings Storage Rationalisation — Nevada',
    company: 'Newmont',
    country: 'United States',
    region: 'North America',
    commodity: 'Gold',
    pathway: 'Construction Materials',
    stage: 'Pilot',
    summary: 'Newmont has been evaluating the reuse of historic tailings from Nevada operations as engineered fill and road base material for on-site infrastructure. The project reduces the active footprint of legacy facilities while generating a measurable cost offset against new aggregate sourcing.',
    tags: ['Gold', 'Nevada', 'Engineered Fill', 'Infrastructure'],
    year: 2020,
  },
  {
    id: 'lithium-battery-au',
    title: 'Australian Lithium Tailings Characterisation Study',
    company: 'Pilbara Minerals / CSIRO',
    country: 'Australia',
    region: 'Asia-Pacific',
    commodity: 'Lithium',
    pathway: 'Critical Minerals Recovery',
    stage: 'Concept',
    summary: 'A CSIRO-led characterisation study of spodumene processing tailings from Western Australian hard-rock lithium operations identified residual lithium, feldspar, and quartz fractions with commercial potential. The work informs future retreatment design and highlights the role of tailings databases in unlocking dormant resource value.',
    tags: ['Lithium', 'CSIRO', 'Western Australia', 'Spodumene'],
    year: 2023,
  },
];

export const regions = ['All', ...Array.from(new Set(caseStudies.map(c => c.region)))];
export const pathways = ['All', ...Array.from(new Set(caseStudies.map(c => c.pathway)))];
export const stages = ['All', ...Array.from(new Set(caseStudies.map(c => c.stage)))];
