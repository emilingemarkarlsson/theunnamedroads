export type ProjectJsonLdInput = {
  name: string
  description: string
  url?: string
  startDate?: Date
  endDate?: Date | null
  statusLabel?: string
  tags?: string[]
}

export type ProjectSchemaType = 'SoftwareApplication' | 'CreativeWork'

const softwareTags = new Set([
  'saas',
  'consumer',
  'enterprise-ai',
  'automation',
  'ai-agents',
  'sports-data',
  'family',
  'hockey-analytics'
])

export const resolveProjectSchemaType = (
  project: ProjectJsonLdInput
): ProjectSchemaType => {
  if (project.url) return 'SoftwareApplication'
  if (project.tags?.some((tag) => softwareTags.has(tag))) {
    return 'SoftwareApplication'
  }
  return 'CreativeWork'
}

export const buildProjectJsonLd = (
  project: ProjectJsonLdInput,
  canonicalURL: string,
  organizationId: string
) => {
  const schemaType = resolveProjectSchemaType(project)
  const projectId = `${canonicalURL}#project`

  return {
    '@type': schemaType,
    '@id': projectId,
    name: project.name,
    description: project.description,
    url: project.url ?? canonicalURL,
    creator: { '@id': organizationId },
    ...(project.startDate && {
      dateCreated: project.startDate.toISOString()
    }),
    ...(project.endDate && {
      dateModified: project.endDate.toISOString()
    }),
    ...(project.statusLabel && {
      disambiguatingDescription: `Studio status: ${project.statusLabel}`
    }),
    ...(schemaType === 'SoftwareApplication' && {
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web'
    })
  }
}

export const buildContactPageJsonLd = (
  canonicalURL: string,
  title: string,
  description: string,
  websiteId: string,
  organizationId: string
) => ({
  '@type': 'ContactPage',
  '@id': `${canonicalURL}#contactpage`,
  url: canonicalURL,
  name: title,
  description,
  isPartOf: { '@id': websiteId },
  about: { '@id': organizationId },
  mainEntity: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: canonicalURL,
    availableLanguage: ['en']
  }
})
