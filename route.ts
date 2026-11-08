import { CONTACTS, SITE } from '@/lib/site';
import { PROJECTS, TOOLS } from '@/lib/data';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    '## Pages',
    `- [Home](${SITE.url}/): single-page portfolio (skills, timeline, selected works, about, contact)`,
    '',
    '## What I do',
    '- Video editing: high-retention cinematic edits, motion graphics, colour grading',
    '- Telegram bots: async Python bots, moderation, automation',
    '- Ethical hacking: Linux, security audits, hardened setups',
    '- Web design: responsive, accessible, light/dark interfaces',
    '',
    '## Tools',
    ...TOOLS.map((t) => `- ${t.name}: ${t.field}`),
    '',
    '## Selected works',
    ...PROJECTS.map((p) => `- ${p.title} (${p.category}, ${p.year}): ${p.description}`),
    '',
    '## Contact',
    ...(CONTACTS.telegram ? [`- Telegram: ${CONTACTS.telegram}`] : []),
    ...(CONTACTS.channel ? [`- Telegram channel: ${CONTACTS.channel}`] : []),
    ...(CONTACTS.youtube ? [`- YouTube: ${CONTACTS.youtube}`] : []),
    ...(CONTACTS.email ? [`- Email: ${CONTACTS.email}`] : []),
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
}
