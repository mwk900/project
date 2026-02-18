export const siteConfig = {
  agency: {
    name: 'NorthSummit',
    domain: 'NorthSummit.agency',
    email: 'mwk_ai@tuta.io',
    tagline: 'Websites that work as hard as you do.',
    description:
      'We design and build fast, modern websites for trades and local businesses across the UK & Europe.',
    location: 'UK & Europe',
  },

  navigation: [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ],

  process: [
    {
      step: 1,
      title: 'Quick brief',
      description: 'Send us an email with what you need. No lengthy forms — just the basics.',
    },
    {
      step: 2,
      title: 'Build & refine',
      description: 'We design and develop your site, sharing progress so you stay in the loop.',
    },
    {
      step: 3,
      title: 'Launch & optimise',
      description: 'Your site goes live. We handle hosting, speed, and SEO out of the box.',
    },
    {
      step: 4,
      title: 'Support & improve',
      description: 'Ongoing tweaks, updates, and support whenever you need it.',
    },
  ],

  pricing: [
    {
      name: 'Starter',
      price: '£497',
      popular: false,
      description: 'Perfect for tradespeople who need a professional online presence — fast.',
      features: [
        'Single-page responsive website',
        'Mobile-first design',
        'Contact form & Google Maps',
        'Basic SEO setup',
        'Hosting setup included',
        '2 rounds of revisions',
      ],
    },
    {
      name: 'Growth',
      price: '£997',
      popular: true,
      description: 'For businesses ready to stand out and convert more visitors into customers.',
      features: [
        'Up to 5 pages',
        'Custom design & branding',
        'Blog or portfolio section',
        'Advanced SEO & performance',
        'Analytics integration',
        'Speed optimisation',
        '3 rounds of revisions',
      ],
    },
    {
      name: 'Premium',
      price: '£1,997',
      popular: false,
      description: 'Full-service build for businesses that need dynamic features and ongoing support.',
      features: [
        'Up to 10 pages',
        'CMS integration',
        'Booking or enquiry system',
        'E-commerce ready',
        'Priority support (30 days)',
        'Monthly performance report',
        'Unlimited revisions during build',
      ],
    },
  ],

  projects: [
    {
      id: 'roofing01',
      title: 'Roofing Business',
      description: 'Clean, professional site for a roofing contractor with service pages and quote request.',
      image: '/projects/roofing01.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Netlify', 'Static'],
      link: 'https://roofing01.netlify.app/',
    },
    {
      id: 'plumber001',
      title: 'Plumber',
      description: 'Fast-loading plumber website with emergency callout info and service area coverage.',
      image: '/projects/plumber001.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Netlify', 'Static'],
      link: 'https://plumber001.netlify.app/',
    },
    {
      id: 'digital-agency',
      title: 'Digital Agency',
      description: 'Modern agency landing page with animated sections, portfolio showcase, and contact flow.',
      image: '/projects/digital-agency.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Netlify', 'Static'],
      link: 'https://eclectic-melomakarona-8521c0.netlify.app/',
    },
    {
      id: 'garagecar',
      title: 'Garage / Car Service',
      description: 'Auto repair shop website with service listings, pricing, and online booking prompt.',
      image: '/projects/garagecar.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Cloudflare Pages', 'Static'],
      link: 'https://garagecar.pages.dev/',
    },
    {
      id: 'gym001',
      title: 'Gym / Personal Trainer',
      description: 'Energetic fitness site with class schedules, trainer profiles, and membership sign-up.',
      image: '/projects/gym001.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Static'],
      link: 'https://gym001.vercel.app/',
    },
    {
      id: 'cleaners',
      title: 'Cleaners',
      description: 'Cleaning service site with dynamic pricing calculator and instant quote functionality.',
      image: '/projects/cleaners.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Non-static'],
      link: 'https://cleaners-nonstatic.vercel.app/',
    },
    {
      id: 'sonia-vet',
      title: 'Veterinary Surgeon',
      description: 'Warm, trustworthy vet practice site with services, team bios, and appointment booking.',
      image: '/projects/sonia-vet.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Cloudflare Pages', 'Static'],
      link: 'https://sonia-e6b.pages.dev/',
    },
  ],
} as const;
