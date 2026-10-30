// Update inventory here to keep the homepage and category pages in sync.
export const bodyTypes = [
  { slug: 'convertible', label: 'Convertible', plural: 'Convertibles', shape: 'M16 61 L22 50 L60 46 L76 30 L85 30 L78 46 L130 46 L144 35 L151 38 L154 48 L181 52 L188 61 L188 73 L16 73 Z', windows: 'M65 46 L79 33 M130 46 L144 37' },
  { slug: 'coupe', label: 'Coupe', plural: 'Coupes', shape: 'M16 61 L23 51 L61 46 L83 29 L119 29 L147 47 L179 53 L188 62 L188 73 L16 73 Z', windows: 'M70 46 L87 34 L116 34 L136 47 Z M103 34 L103 47' },
  { slug: 'hatchback', label: 'Hatchback', plural: 'Hatchbacks', shape: 'M18 60 L27 49 L64 45 L84 26 L144 26 L161 46 L178 51 L185 62 L185 73 L18 73 Z', windows: 'M74 44 L88 31 L139 31 L150 45 Z M113 31 L113 45' },
  { slug: 'sedan', label: 'Sedan', plural: 'Sedans', shape: 'M14 61 L24 51 L56 46 L79 27 L124 27 L150 47 L180 52 L189 62 L189 73 L14 73 Z', windows: 'M67 45 L83 32 L121 32 L139 46 Z M103 32 L103 46' },
  { slug: 'suv', label: 'SUV', plural: 'SUVs', shape: 'M13 56 L23 46 L60 43 L77 22 L153 22 L168 43 L187 49 L191 61 L191 73 L13 73 Z', windows: 'M70 42 L81 27 L148 27 L157 43 Z M109 27 L109 43 M136 27 L136 43' },
  { slug: 'pickup', label: 'Pickup', plural: 'Pickups', shape: 'M12 54 L24 45 L61 43 L77 22 L120 22 L135 44 L190 44 L190 73 L12 73 Z', windows: 'M71 42 L81 27 L116 27 L126 43 Z M102 27 L102 43 M136 48 L136 67 L184 67' },
  { slug: 'minivan', label: 'Minivan', plural: 'Minivans', shape: 'M13 59 L24 47 L55 43 L75 22 L156 22 L179 44 L189 57 L189 73 L13 73 Z', windows: 'M65 42 L79 27 L151 27 L167 43 Z M103 27 L103 43 M135 27 L135 43' },
  { slug: 'other', label: 'Other', plural: 'Other Vehicles', shape: 'M14 61 L24 51 L56 46 L79 27 L147 27 L165 47 L180 52 L189 62 L189 73 L14 73 Z', windows: 'M67 45 L83 32 L143 32 L153 46 Z M103 32 L103 46 M130 32 L130 46' },
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
