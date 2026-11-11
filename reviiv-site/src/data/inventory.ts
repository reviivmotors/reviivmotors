// Inventory is managed through the private Pages CMS dashboard.
export const bodyTypes = [
  { slug: 'sedan', image: 'https://images.ctfassets.net/rjpp1vai5vu3/7wl2mkpKiCi2VYnJbh6LS0/a6480e94b9302a44660f109f0992dc31/BMW_3-sarja.png?fit=fill&fm=webp&q=80&w=640', imageAlt: 'BMW 3 Series side profile', label: 'Sedan', plural: 'Sedans', shape: 'M14 61 L24 51 L56 46 L79 27 L124 27 L150 47 L180 52 L189 62 L189 73 L14 73 Z', windows: 'M67 45 L83 32 L121 32 L139 46 Z M103 32 L103 46' },
  { slug: 'suv', image: 'https://toyotacanada.scene7.com/is/image/toyotacanada/b26_gzrbht_pl_0089_a?fmt=png-alpha&wid=640', imageAlt: 'Toyota Highlander side profile', label: 'SUV', plural: 'SUVs', shape: 'M13 57 L22 44 L57 41 L73 20 L164 20 L178 40 L189 47 L191 73 L13 73 Z', windows: 'M67 40 L78 25 L158 25 L168 41 Z M107 25 L107 41 M139 25 L139 41' },
  { slug: 'coupe', image: 'https://platform.cstatic-images.com/in/v2/stock_photos/ae2a1e39-b886-4577-9007-65183113e867/c3ace1b7-3135-41dc-a926-673fa462cc83.png', imageAlt: 'Nissan GT-R side profile', label: 'Coupe', plural: 'Coupes', shape: 'M13 64 L23 54 L66 48 L91 34 Q112 29 128 36 L150 49 L182 55 L191 65 L191 73 L13 73 Z', windows: 'M79 47 L94 38 Q111 34 124 40 L137 48 Z M114 37 L114 48' },
  { slug: 'hatchback', image: 'https://storage.googleapis.com/adtorque-edge/api/vw/golf/colours/comfortline/pure-white.png', imageAlt: 'Volkswagen Golf side profile', label: 'Hatchback', plural: 'Hatchbacks', shape: 'M18 60 L27 50 L59 46 L79 28 L133 28 L153 48 L164 54 L168 73 L18 73 Z', windows: 'M69 45 L83 33 L129 33 L142 47 Z M108 33 L108 46' },
  { slug: 'minivan', image: 'https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2024/honda/odyssey/ex-l-/minivan/exteriorColors/2024_honda_odyssey_ex-l_001_nh883p.png', imageAlt: 'Honda Odyssey side profile', label: 'Minivan', plural: 'Minivans', shape: 'M13 61 L23 50 L48 46 L72 21 Q76 17 84 17 L164 17 Q180 18 184 36 L190 60 L190 73 L13 73 Z', windows: 'M60 44 L77 23 L160 23 Q171 24 175 43 Z M101 23 L101 44 M137 23 L137 44 M105 49 L105 64 L174 64 M112 52 L124 52' },
  { slug: 'pickup', image: 'https://platform.cstatic-images.com/in/v2/stock_photos/a9cea891-99b7-4db2-81c7-486feebb4447/a8ac192e-bf39-412b-a18a-48e531a5dccd.png', imageAlt: 'Ford F-150 side profile', label: 'Pickup Truck', plural: 'Pickup Trucks', shape: 'M12 57 L21 45 L58 43 L75 23 L117 23 L131 44 L185 44 L190 50 L190 73 L12 73 Z', windows: 'M68 42 L79 28 L112 28 L121 43 Z M99 28 L99 43 M132 45 L132 64 L185 64' },
] as const;

export type BodyType = typeof bodyTypes[number];
export type Vehicle = {
  slug: string; year: number; make: string; model: string; price: number;
  category: BodyType['label']; number: string; status: 'Available' | 'Sold';
  published: boolean; featured: boolean; order: number; photos: string[];
  description: string; mileage?: number; transmission?: string; fuel?: string;
  colour?: string; stockNumber?: string;
};
type VehicleEntry = Omit<Vehicle, 'slug' | 'number'>;
const entries = import.meta.glob<VehicleEntry>('./vehicles/*.json', { eager: true, import: 'default' });
export const allVehicles: Vehicle[] = Object.entries(entries).map(([file, data]) => {
  const slug = file.split('/').pop()!.replace(/\.json$/, '');
  const fail = (message: string): never => { throw new Error(`Inventory ${slug}: ${message}`); };
  if (!Number.isInteger(data.year) || data.year < 1900 || data.year > 2100) fail('Enter a valid model year.');
  if (typeof data.make !== 'string' || !data.make.trim() || typeof data.model !== 'string' || !data.model.trim()) fail('Make and model are required.');
  if (!Number.isFinite(data.price) || data.price < 0) fail('Price must be a non-negative number.');
  if (!bodyTypes.some((type) => type.label === data.category)) fail('Choose one of the six body types.');
  if (data.status !== 'Available' && data.status !== 'Sold') fail('Status must be Available or Sold.');
  if (data.mileage != null && (!Number.isFinite(data.mileage) || data.mileage < 0)) fail('Mileage must be a non-negative number.');
  const photos = data.photos ?? [];
  if (!Array.isArray(photos) || photos.some((photo) => typeof photo !== 'string' || !photo.startsWith('/uploads/vehicles/') || photo.includes('..'))) fail('Photos must come from the vehicle photo library.');
  return { ...data, slug, make: data.make.trim(), model: data.model.trim(), photos,
    published: data.published !== false, featured: data.featured !== false,
    order: Number.isFinite(data.order) ? data.order : 100, description: data.description ?? '', number: '' };
}).sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug))
  .map((car, index) => ({ ...car, number: String(index + 1).padStart(2, '0') }));
export const vehicles = allVehicles.filter((car) => car.published);
export const featuredVehicles = vehicles.filter((car) => car.featured);
export const phone = '416-346-9568';
export const email = 'reviivmotors@gmail.com';
export const money = (amount: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(amount);
