// Update inventory here to keep the homepage and category pages in sync.
export const bodyTypes = [
  { slug: 'sedan', image: 'https://images.ctfassets.net/rjpp1vai5vu3/7wl2mkpKiCi2VYnJbh6LS0/a6480e94b9302a44660f109f0992dc31/BMW_3-sarja.png?fit=fill&fm=webp&q=80&w=640', imageAlt: 'BMW 3 Series side profile', label: 'Sedan', plural: 'Sedans', shape: 'M14 61 L24 51 L56 46 L79 27 L124 27 L150 47 L180 52 L189 62 L189 73 L14 73 Z', windows: 'M67 45 L83 32 L121 32 L139 46 Z M103 32 L103 46' },
  { slug: 'suv', image: 'https://toyotacanada.scene7.com/is/image/toyotacanada/b26_gzrbht_pl_0089_a?fmt=png-alpha&wid=640', imageAlt: 'Toyota Highlander side profile', label: 'SUV', plural: 'SUVs', shape: 'M13 57 L22 44 L57 41 L73 20 L164 20 L178 40 L189 47 L191 73 L13 73 Z', windows: 'M67 40 L78 25 L158 25 L168 41 Z M107 25 L107 41 M139 25 L139 41' },
  { slug: 'coupe', image: 'https://platform.cstatic-images.com/in/v2/stock_photos/ae2a1e39-b886-4577-9007-65183113e867/c3ace1b7-3135-41dc-a926-673fa462cc83.png', imageAlt: 'Nissan GT-R side profile', label: 'Coupe', plural: 'Coupes', shape: 'M13 64 L23 54 L66 48 L91 34 Q112 29 128 36 L150 49 L182 55 L191 65 L191 73 L13 73 Z', windows: 'M79 47 L94 38 Q111 34 124 40 L137 48 Z M114 37 L114 48' },
  { slug: 'hatchback', image: 'https://storage.googleapis.com/adtorque-edge/api/vw/golf/colours/comfortline/pure-white.png', imageAlt: 'Volkswagen Golf side profile', label: 'Hatchback', plural: 'Hatchbacks', shape: 'M18 60 L27 50 L59 46 L79 28 L133 28 L153 48 L164 54 L168 73 L18 73 Z', windows: 'M69 45 L83 33 L129 33 L142 47 Z M108 33 L108 46' },
  { slug: 'minivan', image: 'https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2024/honda/odyssey/ex-l-/minivan/exteriorColors/2024_honda_odyssey_ex-l_001_nh883p.png', imageAlt: 'Honda Odyssey side profile', label: 'Minivan', plural: 'Minivans', shape: 'M13 61 L23 50 L48 46 L72 21 Q76 17 84 17 L164 17 Q180 18 184 36 L190 60 L190 73 L13 73 Z', windows: 'M60 44 L77 23 L160 23 Q171 24 175 43 Z M101 23 L101 44 M137 23 L137 44 M105 49 L105 64 L174 64 M112 52 L124 52' },
  { slug: 'pickup', image: 'https://platform.cstatic-images.com/in/v2/stock_photos/a9cea891-99b7-4db2-81c7-486feebb4447/a8ac192e-bf39-412b-a18a-48e531a5dccd.png', imageAlt: 'Ford F-150 side profile', label: 'Pickup Truck', plural: 'Pickup Trucks', shape: 'M12 57 L21 45 L58 43 L75 23 L117 23 L131 44 L185 44 L190 50 L190 73 L12 73 Z', windows: 'M68 42 L79 28 L112 28 L121 43 Z M99 28 L99 43 M132 45 L132 64 L185 64' },
] as const;

export type BodyType = typeof bodyTypes[number];
export type Vehicle = { year: number; make: string; model: string; price: number; category: BodyType['label']; number: string };
export const vehicles: Vehicle[] = [
  { year: 2017, make: 'Nissan', model: 'Sentra SV', price: 5990, category: 'Sedan', number: '01' },
  { year: 2011, make: 'Honda', model: 'Odyssey', price: 6990, category: 'Minivan', number: '02' },
  { year: 2013, make: 'Acura', model: 'ILX', price: 10990, category: 'Sedan', number: '03' },
];
export const phone = '416-346-9568';
export const email = 'reviivmotors@gmail.com';
export const money = (amount: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(amount);
