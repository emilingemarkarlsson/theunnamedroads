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

/** Every portfolio entry is a software product or prototype. */
export const resolveProjectSchemaType = (): ProjectSchemaType =>
  'SoftwareApplication'

export const buildProjectJsonLd = (
  project: ProjectJsonLdInput,
  canonicalURL: string,
  organizationId: string
) => {
  const schemaType = resolveProjectSchemaType()
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
      disambiguatingDescription: `Status: ${project.statusLabel}`
    }),
    ...(schemaType === 'SoftwareApplication' && {
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      publisher: { '@id': organizationId }
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
