/**
 * Central catalogue of imagery & metadata for every service
 * used across the site (homepage cards + the 12 individual
 * "/services/*" pages).  Keep this as an **array** so callers
 * can safely use `.find()`.
 */

export interface ServiceImageEntry {
  id: string
  slug: string
  title: string
  description: string
  /** First image is treated as the hero. */
  images: { src: string; alt: string }[]
}

export const serviceImages: ServiceImageEntry[] = [
  {
    id: "concreting",
    slug: "concreting",
    title: "Concreting",
    description: "High-quality concrete work for driveways, patios, and more.",
    images: [
      { src: "/projects/concrete-slab-day.jpeg", alt: "Freshly poured concrete slab" },
      { src: "/projects/concrete-pathway.jpeg", alt: "Concrete pathway through garden" },
      { src: "/projects/concrete-pour-sunset.jpeg", alt: "Concrete pour at sunset" },
      { src: "/projects/concrete4.jpeg", alt: "Smooth concrete finish" },
      { src: "/projects/modern-house-lighting.jpeg", alt: "Modern house with concrete lighting" },
      { src: "/projects/concrete-driveway-1.jpeg", alt: "Concrete driveway" },
      { src: "/projects/concrete-driveway-2.jpeg", alt: "Another concrete driveway" },
      { src: "/projects/residential-steps-walkway.jpeg", alt: "Residential steps and walkway" },
      { src: "/projects/concrete-fire-pit-area.jpeg", alt: "Concrete fire pit area" },
      { src: "/projects/modern-house-driveway.jpeg", alt: "Modern house driveway" },
      { src: "/projects/house-concrete-walkway.jpeg", alt: "House with concrete walkway" },
    ],
  },
  {
    id: "landscaping",
    slug: "landscaping",
    title: "Landscaping",
    description: "Professional landscaping services to transform your outdoor space.",
    images: [
      { src: "/projects/modern-landscape-design.jpeg", alt: "Modern landscape design" },
      { src: "/projects/front-yard-landscaping.avif", alt: "Front yard transformation" },
      { src: "/projects/landscaping-before.jpeg", alt: "Backyard before landscaping" },
      { src: "/projects/curved-retaining-wall.jpeg", alt: "Curved retaining wall" },
      { src: "/projects/artificial-grass-pathway.jpeg", alt: "Artificial grass pathway" },
      { src: "/projects/exposed-aggregate-landscape.jpeg", alt: "Exposed aggregate landscape" },
      { src: "/projects/elegant-courtyard-pool.jpeg", alt: "Elegant courtyard with pool" },
      { src: "/projects/house-concrete-walkway.jpeg", alt: "House with concrete walkway" },
    ],
  },
  {
    id: "landscaping-design",
    slug: "landscaping-design",
    title: "Landscaping Design",
    description: "Custom landscape design solutions for your property.",
    images: [
      { src: "/projects/modern-landscape-design.jpeg", alt: "3D landscape render" },
      { src: "/projects/elegant-courtyard-pool.jpeg", alt: "Elegant courtyard with pool" },
      { src: "/projects/curved-retaining-wall.jpeg", alt: "Curved retaining wall in design" },
      { src: "/projects/outdoor-lighting-garden.jpeg", alt: "Garden lighting design" },
      { src: "/projects/landscaping-before.jpeg", alt: "Landscape design before" },
      { src: "/projects/artificial-grass-1.jpeg", alt: "Artificial grass design" },
      { src: "/projects/front-yard-landscaping.avif", alt: "Landscape concept plan" },
    ],
  },
  {
    id: "artificial-grass",
    slug: "artificial-grass",
    title: "Artificial Grass",
    description: "Premium artificial grass installation for low-maintenance lawns.",
    images: [
      { src: "/projects/artificial-grass-1.jpeg", alt: "Artificial grass installation" },
      { src: "/projects/artificial-grass-pool.jpeg", alt: "Pool area with synthetic turf" },
      { src: "/projects/artificial-grass-pathway.jpeg", alt: "Pathway surrounded by turf" },
      { src: "/projects/artificial-grass-2.jpeg", alt: "Artificial grass lawn" },
      { src: "/projects/artificial-grass-3.jpeg", alt: "Artificial grass backyard" },
      { src: "/projects/artificial-grass-4.jpeg", alt: "Artificial grass for pets" },
      { src: "/projects/artificial-grass-5.jpeg", alt: "Artificial grass for play area" },
      { src: "/projects/artificial-grass-modern.jpeg", alt: "Modern artificial grass" },
      { src: "/projects/artificial-grass-deck.jpeg", alt: "Artificial grass on deck" },
      { src: "/projects/modern-pergola-dining.jpeg", alt: "Pergola with artificial grass" },
      { src: "/projects/elegant-courtyard-pool.jpeg", alt: "Courtyard with artificial grass" },
    ],
  },
  {
    id: "exposed-concrete",
    slug: "exposed-concrete",
    title: "Exposed Concrete",
    description: "Decorative exposed aggregate concrete finishes.",
    images: [
      { src: "/projects/exposed-aggregate-modern.jpeg", alt: "Modern exposed aggregate" },
      { src: "/projects/exposed-aggregate-landscape.jpeg", alt: "Aggregate patio area" },
      { src: "/projects/exposed-aggregate-clean.jpeg", alt: "Clean exposed aggregate finish" },
      { src: "/projects/concrete4.jpeg", alt: "Exposed concrete texture" },
      { src: "/projects/concrete-pathway.jpeg", alt: "Exposed concrete pathway" },
      { src: "/projects/modern-house-lighting.jpeg", alt: "Exposed concrete driveway" },
    ],
  },
  {
    id: "driveway-construction",
    slug: "driveway-construction",
    title: "Driveway Construction",
    description: "Durable driveway construction and resurfacing services.",
    images: [
      { src: "/projects/concrete-driveway-1.jpeg", alt: "New concrete driveway" },
      { src: "/projects/concrete-driveway-2.jpeg", alt: "Driveway resurfacing" },
      { src: "/projects/modern-house-driveway.jpeg", alt: "Modern driveway design" },
      { src: "/projects/concrete-driveway-install.avif", alt: "Driveway installation process" },
      { src: "/projects/modern-house-lighting.jpeg", alt: "Driveway with modern lighting" },
      { src: "/projects/residential-steps-walkway.jpeg", alt: "Driveway with steps" },
      { src: "/projects/exposed-aggregate-clean.jpeg", alt: "Exposed aggregate driveway" },
      { src: "/projects/house-concrete-walkway.jpeg", alt: "Concrete walkway to house" },
      { src: "/projects/concrete-pour-sunset.jpeg", alt: "Driveway concrete pour" },
      { src: "/projects/concrete-slab-day.jpeg", alt: "Driveway slab" },
    ],
  },
  {
    id: "mulching",
    slug: "mulching",
    title: "Mulching",
    description: "Professional mulching services for garden health and aesthetics.",
    images: [
      { src: "/projects/stone-edging-mulch.webp", alt: "Stone edging with mulch" },
      { src: "/projects/modern-mulch-border.webp", alt: "Modern mulch border" },
      { src: "/projects/outdoor-lighting-garden.jpeg", alt: "Mulched garden with lighting" },
      { src: "/projects/landscaping-before.jpeg", alt: "Garden before mulching" },
      { src: "/projects/artificial-grass-pathway.jpeg", alt: "Mulch along artificial grass" },
      { src: "/projects/artificial-grass-1.jpeg", alt: "Mulch in artificial grass area" },
    ],
  },
  {
    id: "letterbox-installation",
    slug: "letterbox-installation",
    title: "Letterbox Installation",
    description: "Custom letterbox installation and replacement services.",
    images: [
      { src: "/projects/stone-veneer-mailbox.jpeg", alt: "Stone veneer letterbox" },
      { src: "/projects/brick-stone-mailbox.jpeg", alt: "Brick & stone mailbox" },
      { src: "/projects/wooden-letterbox-post.jpeg", alt: "Timber letterbox post" },
      { src: "/projects/residential-steps-walkway.jpeg", alt: "Letterbox with steps" },
      { src: "/projects/concrete-slab-day.jpeg", alt: "Letterbox on concrete slab" },
      { src: "/projects/concrete-pathway.jpeg", alt: "Letterbox by pathway" },
      { src: "/projects/landscaping-before.jpeg", alt: "Letterbox before landscaping" },
    ],
  },
  {
    id: "garden-maintenance",
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    description: "Regular garden maintenance and care services.",
    images: [
      { src: "/projects/stone-edging-mulch.webp", alt: "Garden with stone edging and mulch" },
      { src: "/projects/curved-retaining-wall.jpeg", alt: "Garden with curved retaining wall" },
      { src: "/projects/outdoor-lighting-garden.jpeg", alt: "Maintained garden with lighting" },
      { src: "/projects/modern-landscape-design.jpeg", alt: "Modern garden maintenance" },
      { src: "/projects/landscaping-before.jpeg", alt: "Garden before maintenance" },
      { src: "/projects/artificial-grass-1.jpeg", alt: "Garden with artificial grass" },
      { src: "/projects/artificial-grass-pathway.jpeg", alt: "Garden pathway maintenance" },
    ],
  },
]

/** Safe helpers used by homepage cards etc. */
export function getServiceEntry(key: string) {
  return serviceImages.find((s) => s.id === key || s.slug === key || s.title.toLowerCase().replace(/\s+/g, "-") === key)
}

export function getServiceImage(key: string): string {
  return getServiceEntry(key)?.images[0]?.src ?? "/placeholder.svg?height=400&width=600"
}

export function getServiceImages(key: string): { src: string; alt: string }[] {
  const entry = getServiceEntry(key)
  return entry?.images || [{ src: "/placeholder.svg?height=400&width=600", alt: "Placeholder image" }]
}
