// Centralized schema.org structured data (JSON-LD) for GEO/SEO.
// Nodes omit @context; compose them with graph() which adds it once.

export const SITE_URL = 'https://justinshenriksen.com'

const PERSON_ID = `${SITE_URL}/#person`
const ORG_ID = 'https://getlatest.ai/#organization'
const SITE_ID = `${SITE_URL}/#website`

export const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Justin S. Henriksen',
  url: SITE_URL,
  image: `${SITE_URL}/justin.jpg`,
  jobTitle: 'Founder & CEO',
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
}

export const websiteNode = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE_URL,
  name: 'Justin S. Henriksen',
  publisher: { '@id': PERSON_ID },
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
