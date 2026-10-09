import { getCollection, type CollectionEntry } from 'astro:content'

export type PlainStatus = 'Live' | 'Testing' | 'Parked' | 'Closed'

/** Statuses shown in the main project grid. Closed projects live in an archive. */
export const STATUS_ORDER: PlainStatus[] = ['Live', 'Testing', 'Parked']

export const STATUS_EXPLAINER: Record<PlainStatus, string> = {
  Live: 'Running and open to real users or customers.',
  Testing: 'Being tested for real demand before more is built.',
  Parked: 'Paused, but could come back later.',
  Closed: 'Stopped for good. Kept as a record of what was tested.'
}

export const getStatus = (
  project: CollectionEntry<'projects'>
): PlainStatus => {
  const label = project.data.homepage?.statusLabel?.trim().toLowerCase()
  if (label === 'live') return 'Live'
  if (label === 'testing') return 'Testing'
  if (label === 'closed') return 'Closed'
  return 'Parked'
}

export const sortProjects = (
  p1: CollectionEntry<'projects'>,
  p2: CollectionEntry<'projects'>
) => {
  const rank = (p: CollectionEntry<'projects'>) => {
    const i = STATUS_ORDER.indexOf(getStatus(p))
    return i === -1 ? STATUS_ORDER.length : i
  }
  const statusDiff = rank(p1) - rank(p2)
  const orderDiff =
    (p1.data.homepage?.order ?? 999) - (p2.data.homepage?.order ?? 999)
  return statusDiff || orderDiff || p1.data.title.localeCompare(p2.data.title)
}

export const getProjects = async (tag?: string) => {
  const projects = await getCollection('projects')

  projects.sort(sortProjects)

  return projects.filter(
    (p) =>
      !tag || p.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

export const projectItemList = (
  projects: CollectionEntry<'projects'>[],
  site: string
) => ({
  name: 'The Unnamed Roads portfolio: companies started and tested with AI',
  items: projects.map((p) => ({
    name: p.data.title,
    url: `${site}/projects/${p.slug}/`,
    description: `${getStatus(p)}. ${p.data.homepage?.summary ?? p.data.description}`
  }))
})

export const isClosed = (project: CollectionEntry<'projects'>) =>
  getStatus(project) === 'Closed'

/** Live, Testing and Parked projects (everything except the Closed archive). */
export const getActiveProjects = async () =>
  (await getProjects()).filter((p) => !isClosed(p))
