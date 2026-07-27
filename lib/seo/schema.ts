// Centralized schema.org structured data (JSON-LD) for GEO/SEO.
// Nodes omit @context; compose them with graph() which adds it once.

export const SITE_URL = 'https://justinshenriksen.com'

const PERSON_ID = `${SITE_URL}/#person`
const ORG_ID = 'https://getlatest.ai/#organization'
const SITE_ID = `${SITE_URL}/#website`

const FENIX_ID = `${SITE_URL}/#fenix`

export const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Justin S. Henriksen',
  givenName: 'Justin',
  familyName: 'Henriksen',
  url: SITE_URL,
  image: `${SITE_URL}/justin.jpg`,
  email: 'mailto:justin.henriksen@gmail.com',
  jobTitle: 'Founder & CEO',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Salt Lake City',
    addressRegion: 'UT',
    addressCountry: 'US',
  },
  award: [
    '2024 Utah Fast 50',
    '2023 Utah 100',
    '2020 Microsoft Leadership Spotlight',
    '2019 Microsoft Manager of the Year',
    '2015 Microsoft Circle of Excellence',
  ],
  hasCredential: [
    'MBA, University of Utah',
    'BA Computer Science, Weber State University',
    'Microsoft Professional Program, Data Science',
    'Microsoft Professional Program, Big Data',
    'Azure Microsoft Certified Solutions Expert (MCSE)',
    'Microsoft AI-900, AZ-900, DP-100, DP-900',
    'Deep Learning Specialization, Andrew Ng',
    'Six Sigma Green Belt',
  ],
  description:
    'Founder and CEO of GetLatest AI and Fenix Venture. Former Microsoft Sr. Director of the Partner Ecosystem, where he set AI/ML strategy and drove its adoption across thousands of independent companies that did not report to him. Builds production multi-agent AI systems, invests, and leads AI adoption and enablement programs for companies making the transition.',
  worksFor: { '@id': ORG_ID },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Utah' },
    { '@type': 'CollegeOrUniversity', name: 'Weber State University' },
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Enterprise AI strategy',
    'AI adoption and transformation',
    'AI enablement and upskilling programs',
    'Multi-agent systems',
    'AI governance',
    'Azure architecture',
    'Fractional AI leadership',
    'Data science',
    'Software engineering',
    'Go-to-market strategy',
  ],
  sameAs: ['https://www.linkedin.com/in/henriksenjustin'],
}

export const organizationNode = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'GetLatest AI',
  url: 'https://getlatest.ai',
  founder: { '@id': PERSON_ID },
  description:
    'Builds and operates teams of AI agents that embed into a client\'s operations, plus the marketing that brings new customers in.',
}

export const fenixNode = {
  '@type': 'Organization',
  '@id': FENIX_ID,
  name: 'Fenix Venture',
  founder: { '@id': PERSON_ID },
  description:
    'Justin Henriksen\'s personal investment vehicle. Invests directly and works with leadership teams on strategy, structure, and execution.',
}

export const websiteNode = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE_URL,
  name: 'Justin S. Henriksen',
  inLanguage: 'en-US',
  publisher: { '@id': PERSON_ID },
}

// The homepage is a profile page. Naming the entity it is about helps search
// engines and answer engines resolve "who is Justin Henriksen" to this page.
export const profilePageNode = {
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profile`,
  url: SITE_URL,
  name: 'Justin S. Henriksen',
  isPartOf: { '@id': SITE_ID },
  about: { '@id': PERSON_ID },
  mainEntity: { '@id': PERSON_ID },
}

export function serviceNode(opts: {
  name: string
  description: string
  url: string
  serviceType: string
}) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: opts.url,
    provider: { '@id': PERSON_ID },
    areaServed: { '@type': 'Country', name: 'United States' },
  }
}

export function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

export function graph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}
