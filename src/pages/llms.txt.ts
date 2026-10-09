import type { APIRoute } from 'astro'
import { buildAssistantBrief } from '@/util/assistantBrief'

export const GET: APIRoute = async () =>
  new Response(await buildAssistantBrief(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
