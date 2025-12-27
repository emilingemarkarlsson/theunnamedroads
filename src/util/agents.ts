import type { Agent } from '@/types'

export const agents: Agent[] = [
  {
    id: 'aion',
    name: 'AION',
    role: 'Lead AI Engineer',
    strengths: 'Speed, precision, multi-project execution',
    bio: 'Turns strategic intent into hardened systems—from backend services to production-ready apps.',
    status: 'active',
    icon: 'tabler--code',
    color: 'blue'
  },
  {
    id: 'nexus',
    name: 'NEXUS',
    role: 'Strategic Intelligence',
    strengths: 'Pattern recognition, market analysis, opportunity identification',
    bio: 'Monitors signals across culture, capital, and technology to identify asymmetric opportunities.',
    status: 'active',
    icon: 'tabler--brain',
    color: 'purple'
  },
  {
    id: 'flux',
    name: 'FLUX',
    role: 'Rapid Experimentation Lead',
    strengths: 'Hypothesis formation, experiment design, data synthesis',
    bio: 'Designs and executes 12-week proof cycles, turning ideas into validated learnings.',
    status: 'active',
    icon: 'tabler--flask',
    color: 'orange'
  },
  {
    id: 'echo',
    name: 'ECHO',
    role: 'Content & Narrative',
    strengths: 'Technical writing, knowledge synthesis, documentation',
    bio: 'Transforms operational learnings into actionable frameworks and thought leadership.',
    status: 'active',
    icon: 'tabler--pencil',
    color: 'green'
  },
  {
    id: 'forge',
    name: 'FORGE',
    role: 'Product Architecture',
    strengths: 'System design, infrastructure, scalability',
    bio: 'Architects AI-native products from concept to production, ensuring technical excellence.',
    status: 'active',
    icon: 'tabler--tools',
    color: 'cyan'
  },
  {
    id: 'core',
    name: 'CORE',
    role: 'Infrastructure Lead',
    strengths: 'Platform management, resource orchestration, self-hosted infrastructure',
    bio: 'Manages the entire Coolify platform and infrastructure resources—MinIO, LiteLLM, and all self-hosted services that power our operations.',
    status: 'active',
    icon: 'tabler--server',
    color: 'pink'
  }
]

export const getAgent = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id)
}

export const getAgentById = async (id: string): Promise<Agent | undefined> => {
  return agents.find(agent => agent.id === id)
}

export const getAgentByName = async (name: string): Promise<Agent | undefined> => {
  return agents.find(agent => agent.name.toLowerCase() === name.toLowerCase())
}

