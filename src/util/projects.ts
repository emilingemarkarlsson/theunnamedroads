import { getCollection, type CollectionEntry } from 'astro:content'

export type PlainStatus = 'Live' | 'Testing' | 'Parked'

export const STATUS_ORDER: PlainStatus[] = ['Live', 'Testing', 'Parked']

export const STATUS_EXPLAINER: Record<PlainStatus, string> = {
  Live: 'Running and open to real users or customers.',
  Testing: 'Being tested for real demand before more is built.',
  Parked: 'Paused. Kept public so the lessons stay visible.'
}

export const getStatus = (
  project: CollectionEntry<'projects'>
): PlainStatus => {
  const label = project.data.homepage?.statusLabel?.trim().toLowerCase()
  if (label === 'live') return 'Live'
  if (label === 'testing') return 'Testing'
  return 'Parked'
}

export const sortProjects = (
  p1: CollectionEntry<'projects'>,
  p2: CollectionEntry<'projects'>
) => {
  const statusDiff =
    STATUS_ORDER.indexOf(getStatus(p1)) - STATUS_ORDER.indexOf(getStatus(p2))
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
