# Manual Content Creation Guide

## Weekly Content Publishing Process

This guide helps you manually create and publish one article per week based on your SEO topical backbone.

## Quick Reference: Top 5 Articles to Start With

1. **"What's the difference between reactive and proactive agents?"**
   - Pillar: Auto Agent Workflows
   - Priority: HIGH (Foundation)
   - Target: 900-1100 words

2. **"How do you set up approval workflows for AI agents?"**
   - Pillar: Auto Agent Workflows
   - Priority: HIGH (Practical)
   - Target: 1000-1200 words

3. **"What makes a product AI-native vs AI-enhanced?"**
   - Pillar: AI-Native Product Development
   - Priority: HIGH (Educational)
   - Target: 800-1000 words

4. **"How do you test AI agents before deployment?"**
   - Pillar: Auto Agent Workflows
   - Priority: MEDIUM-HIGH
   - Target: 1000-1200 words

5. **"How do you run multiple experiments in parallel?"**
   - Pillar: Rapid Experimentation Frameworks
   - Priority: MEDIUM-HIGH
   - Target: 1000-1200 words

## Article Template

Use this template when creating new articles:

```markdown
---
title: [Question as title, without question mark]
description: [Compelling 150-160 character description that includes the main keyword]
publishedDate: YYYY-MM-DD
author: [Agent Name, e.g., AION, NEXUS, FLUX, ECHO, FORGE]
authorAgent: [agent-id, e.g., aion, nexus, flux, echo, forge]
tags: ['[pillar-slug]', 'ai-native', 'methodology']
draft: false
---

# [Question as H1]

> **Part of our [Pillar Name](/insights/[pillar-slug]) pillar** — [Brief context about why this matters]

[Direct answer in first paragraph - 2-3 sentences]

## [Main Section 1]

[Content with examples, frameworks, or step-by-step guidance]

## [Main Section 2]

[More detailed content]

## [Main Section 3]

[Additional insights or practical tips]

## Related Resources

- **[Pillar Name](/insights/[pillar-slug])** — [Why this link is relevant]
- **[Related Article](/posts/[slug])** — [Connection]
- **[Related Project](/projects/[slug])** — [If applicable]

---

_[Optional closing thought or call to action]_
```

## Choosing the Right Agent

Each agent has a specialty. Match your article topic to the right agent:

- **AION** (Lead AI Engineer): Technical articles, infrastructure, implementation details
- **NEXUS** (Strategic Intelligence): Market analysis, opportunity identification, strategic frameworks
- **FLUX** (Rapid Experimentation Lead): Experiment methodology, 12-week framework, validation
- **ECHO** (Content & Narrative): Thought leadership, frameworks, knowledge synthesis
- **FORGE** (Product Architecture): Product design, system architecture, scalability
- **CORE** (Infrastructure Lead): Platform management, Coolify, self-hosted services, infrastructure optimization

## Weekly Workflow

### Step 1: Choose Your Question & Agent (5 min)
- Pick the next question from the quick-wins list above
- Or choose any question from `seo-topical-backbone.json` that interests you
- Check that you haven't already covered it

### Step 2: Research & Outline (15-20 min)
- Review the pillar page: `/insights/[pillar-slug]`
- Check existing related content for internal links
- Outline 3-5 main sections
- Note examples from your projects to include

### Step 3: Write the Article (60-90 min)
- Use the template above
- Target 800-1200 words
- Include at least 3 internal links (pillar + 2 related)
- Add real examples from your experience
- Include actionable frameworks or steps

### Step 4: Review & Polish (15 min)
- Check word count (800-1200 words)
- Verify all internal links work
- Ensure pillar link is included
- Check description is 150-160 characters
- Review for typos and clarity

### Step 5: Create File & Publish (5 min)
- Create file: `src/content/posts/[slug].md`
- Use slug format: `how-to-setup-approval-workflows-ai-agents`
- Commit and push
- Verify it appears on site

## Internal Linking Checklist

Every article must include:
- ✅ Link to relevant pillar page: `/insights/[pillar-slug]`
- ✅ Link to at least 1 related existing article
- ✅ Link to at least 1 related project (if applicable)
- ✅ "Part of our [Pillar] pillar" callout at top

## Content Quality Checklist

Before publishing, verify:
- ✅ Question answered directly in first paragraph
- ✅ 800-1200 words
- ✅ Includes real examples or case studies
- ✅ Actionable frameworks or step-by-step guidance
- ✅ At least 3 internal links
- ✅ Pillar link included
- ✅ Related Resources section at end
- ✅ Description is 150-160 characters
- ✅ Tags include pillar-slug

## Finding More Questions

To find more article ideas:
1. Open `seo-topical-backbone.json`
2. Browse the `questions` array in each pillar
3. Pick questions that:
   - You can answer with real experience
   - Have high search intent (how/why/what)
   - Link well to existing content

## Publishing Schedule Recommendation

**Week 1**: "What's the difference between reactive and proactive agents?"
**Week 2**: "How do you set up approval workflows for AI agents?"
**Week 3**: "What makes a product AI-native vs AI-enhanced?"
**Week 4**: "How do you test AI agents before deployment?"
**Week 5**: "How do you run multiple experiments in parallel?"

After these 5, continue with other questions from `seo-topical-backbone.json`.

## Tips for Better Articles

1. **Start with the answer**: Don't bury the answer. Give it in the first paragraph.

2. **Use your projects**: Reference The Agent Fabric, Post-Human Venture Engine, etc. as examples.

3. **Be specific**: Instead of "use AI tools", say "use Claude for strategy and GPT-4 for code review".

4. **Include frameworks**: Readers love step-by-step processes they can follow.

5. **Link strategically**: Every internal link should add value, not just fill a quota.

6. **Update pillar pages**: When you publish, add the new article link to the relevant pillar page.

## Tracking Your Progress

Keep a simple list of published articles:
- Date published
- Question/title
- Pillar
- Word count
- Performance (check Google Search Console after 2-4 weeks)

This helps you see what works and what to create more of.

