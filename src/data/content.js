export const site = {
  name: 'Section33',
  email: 'nick@section33.io',
  github: 'https://github.com/nicholas-a-hall',
  linkedin: 'https://linkedin.com/in/nicholashall87',
}

export const enterprise = {
  id: 'enterprise',
  key: 'enterprise',
  navLabel: 'Fractional SRE / DevOps',
  navLabelShort: 'Fractional DevOps',
  modeChip: 'MODE: FRACTIONAL SRE/DEVOPS',
  modeLabel: 'Enterprise',
  color: 'cyan',
  eyebrow: 'Fractional SRE / DevOps',
  heading: 'Senior reliability engineering, without the full-time headcount.',
  sub: "20+ years running production systems under real pressure — broadcast uptime, observability at 20 billion log lines a week, a SOC 2 audit passed in 4 hours. I embed part-time with platform and infra teams that need that judgment now, not after a 6-month hire.",
  heroCard: {
    title: 'For platform, infra & eng teams',
    body: 'On-call load, reliability, CI/CD, and infrastructure — owned by someone who has carried the pager before, on a retainer that scales with what you actually need.',
  },
  contactCta: 'Talk about a retainer',
  contactSubject: 'Fractional SRE/DevOps inquiry',
  services: [
    {
      title: 'On-call is burning your team out',
      body: 'I take rotations, write runbooks that actually get followed, and fix the root cause instead of just clearing the page.',
    },
    {
      title: 'Nobody owns reliability',
      body: 'SLOs, error budgets, and a postmortem process with teeth — changes get made, not just written down.',
    },
    {
      title: 'Infra outgrew the docs',
      body: 'Infrastructure as code, reproducible environments, and a migration plan that doesn’t require a maintenance window nobody wants.',
    },
    {
      title: 'Dashboards nobody trusts',
      body: 'Metrics, logs, and traces wired to alerts that mean something. Built this exact thing at 20 billion log entries a week.',
    },
    {
      title: 'A compliance deadline is coming',
      body: 'Passed a SOC 2 Type II audit in 4 hours against a 3-day window. I can get your controls audit-ready without freezing the roadmap.',
    },
  ],
  proof: [
    {
      tag: 'BROADCAST',
      title: 'Kept a TV station on air',
      body: 'IT Manager for a broadcast operation — uptime with no room for "we’ll fix it Monday."',
    },
    {
      tag: 'SCALE',
      title: 'Observability at 20B log lines/week',
      body: 'Built the logging and monitoring platform underneath that volume — the alerts people actually trusted.',
    },
    {
      tag: 'COMPLIANCE',
      title: 'SOC 2 Type II in 4 hours',
      body: 'Audit window was 3 days. Controls were ready; the audit itself took an afternoon.',
    },
    {
      tag: 'STARTUP',
      title: 'Solo platform lead',
      body: 'Owned infra, on-call, and reliability for a startup platform team of one — me.',
    },
    {
      tag: 'MILITARY',
      title: 'U.S. Army veteran',
      body: 'Military intelligence systems. Mission tempo, real constraints, no do-overs.',
    },
  ],
  engagement: [
    {
      title: 'Scope call',
      body: '30 minutes, no charge. What’s actually breaking, what’s actually urgent, and whether I’m the right fit.',
    },
    {
      title: 'Reliability assessment',
      body: 'I look at your incidents, your on-call load, and your architecture before proposing anything — not a generic package.',
    },
    {
      title: 'Pick the engagement',
      body: 'Audit, embedded retainer, or on-call coverage. They ask different things of me, so they’re priced differently.',
    },
    {
      title: 'Start month-to-month',
      body: 'Defined scope, 30 days’ notice to change or end it. No multi-year lock-in.',
    },
    {
      title: 'You keep everything',
      body: 'Runbooks, IaC, dashboards, docs — all yours. No walled garden once the retainer ends.',
    },
  ],
  pricing: {
    intro: "Fractional work is priced by how much of my week it takes, not by the hour — same logic as hiring part-time, just senior. Numbers below are proposed market-rate starting points; final scope and price are set after the reliability assessment.",
    note: 'Proposed rates — confirm before quoting a client.',
    tiers: [
      {
        title: 'Reliability Audit',
        body: 'One-time architecture and incident review. Prioritized fix list, SLO recommendations, no ongoing commitment.',
        price: '$8,000–$15,000 · 2–4 weeks',
      },
      {
        title: 'Embedded Retainer',
        body: '1–2 days/week. On-call rotation, IaC, CI/CD, and ongoing reliability work as a standing part of your team.',
        price: '$7,500–$12,000/mo',
      },
      {
        title: 'Platform Retainer',
        body: '3+ days/week. Acting SRE/DevOps lead — incident command, roadmap ownership, the works.',
        price: '$16,000–$24,000/mo',
      },
      {
        title: 'Overflow / ad hoc',
        body: 'Outside a retainer, subject to availability — incident response, one-off migrations, second opinions.',
        price: '$195/hr',
      },
    ],
  },
}

export const local = {
  id: 'local',
  key: 'local',
  navLabel: 'Local Builder',
  navLabelShort: 'Local',
  modeChip: 'MODE: LOCAL BUILDER',
  modeLabel: 'Local',
  color: 'amber',
  eyebrow: 'Nick Hall · Hillsboro, IL',
  heading: "I find the boring stuff eating your time. Then I build my way around it.",
  sub: "I build software, electronics, automation, and practical AI tools for people around Macoupin, Montgomery, and Christian counties — Hillsboro, Litchfield, Carlinville, Taylorville, Gillespie, and everywhere in between. Sometimes it's a business process wasting three hours every Friday. Sometimes it's a barn you need to keep an eye on. Sometimes you want Home Assistant running the house, a custom arcade in the basement, or some weird electronic thing that doesn't exist yet. Tell me what you're trying to accomplish. I'll tell you whether technology can actually make it better, what it'll cost, and whether I think it's worth doing before you spend anything.",
  heroCard: {
    title: 'For businesses, farms, schools, churches & weird projects',
    body: "20+ years building systems for large companies. Now I use the same skill set closer to home. Not computer repair. Not a help desk. If your router needs rebooted, I'm probably not your guy. If you want something built, though, keep reading.",
  },
  contactCta: 'Tell me what you want to solve or build',
  contactSubject: 'Local project inquiry',
  services: [
    {
      title: "You're still doing it by hand",
      body: "A spreadsheet, a notebook, a clipboard, a whiteboard, or some process only one person understands. I build the small tool that handles the repetitive part so you don't have to.",
    },
    {
      title: "Nobody answers when you're slammed",
      body: 'An AI phone assistant can handle common questions, bookings, and basic intake, then hand the call to a real person when it should. Built around your business, not somebody else’s script.',
    },
    {
      title: "You need eyes on something when you're not there",
      body: 'Temperature, water, doors, equipment, pumps, freezers, buildings — whatever matters. Sensors, alerts, dashboards, and automation that tell you something is wrong before it becomes expensive.',
    },
    {
      title: 'The stream needs a babysitter',
      body: 'Church service, ballgame, school event, meeting, performance. I build audio and streaming setups that normal people can operate without becoming part-time broadcast engineers.',
    },
    {
      title: 'You want the house to actually be smart',
      body: 'Home Assistant, dashboards, sensors, automations, lighting, buttons, and weird integrations — built around how you live instead of whichever ecosystem a manufacturer is trying to lock you into.',
    },
    {
      title: "You've got a project nobody else seems to do",
      body: "Custom arcade cabinet. Sim rig. Drone setup. Retro gaming system. Wall dashboard. Electronics project. ESP32 contraption. If the question starts with “Do you think you could make…” you've probably found the right person.",
    },
  ],
  proof: [
    {
      tag: 'HARDWARE + SOFTWARE',
      title: 'OpenLaneLink',
      body: 'A custom real-time lane-management platform for an 8-lane bowling center: sensors on every lane, lane controls, kiosk displays, reservation integration, and custom software tying decades-old equipment into a modern system.',
    },
    {
      tag: 'DASHBOARD',
      title: 'ScoreDash',
      body: 'Live scores, strikes, player stats, ball speed, and game state on screens around the building — pulled directly from the lane system with no manual updates.',
    },
    {
      tag: 'AI VOICE',
      title: 'Theia & Rook',
      body: "Theia answers a business's phone, handles common questions and booking conversations, and knows when a person needs to take over. Rook is my personal version — built for me first, using the same pattern.",
    },
    {
      tag: 'COMMUNITY SOFTWARE',
      title: 'Backfence',
      body: "A local directory built one town at a time — Hillsboro first — for finding who around here does what: who plows driveways, who fixes mowers, who's got eggs for sale, and the other things everybody knows somebody knows.",
    },
  ],
  engagement: [
    {
      title: 'Start with a conversation',
      body: "For business and organization projects, the first conversation is free. Tell me what's frustrating you, what you're doing now, or what you wish existed instead. You don't need the technical words for it.",
    },
    {
      title: 'I learn how it works today',
      body: 'Before I build anything, I need to understand the actual problem — the process, the equipment, the people using it, and where the time or money is really disappearing.',
    },
    {
      title: "I tell you whether it's worth doing",
      body: "Sometimes the answer is custom software. Sometimes it's a $40 sensor, an existing app, or doing absolutely nothing. If I don't think the project will meaningfully save you time, money, or aggravation, I'll tell you before we build it.",
    },
    {
      title: 'You get a clear price',
      body: "For defined work, I prefer fixed quotes. You'll know what I'm building, what it costs, what's included, and what isn't. Hardware, hosting, API usage, and other third-party costs stay separate so you can see exactly what you're paying for.",
    },
    {
      title: 'You decide what happens afterward',
      body: 'I can hand it over, host and maintain it, keep the underlying design reusable, make it locally exclusive, or transfer full ownership. We decide that before the project starts — no surprise lock-in later.',
      ownership: [
        { title: 'Reusable', body: 'Default for most projects. You get the finished solution; I can reuse general building blocks and ideas elsewhere.' },
        { title: 'Local exclusive', body: "I won't build the same solution for a nearby competitor. Quoted case by case." },
        { title: 'Full ownership', body: 'The custom work is entirely yours and I give up reuse rights. Premium, because you are buying the work itself.' },
      ],
    },
  ],
  pricing: {
    intro: "Small-town projects should have small-business-sized prices. I keep overhead low and scope projects tightly so useful technology doesn't automatically become a five-figure consulting engagement. The numbers below are realistic starting points, not promises before I've seen the job. Parts, hardware, hosting, APIs, and other third-party costs are separate and billed at actual cost.",
    note: "If it doesn't fit a box below, that's fine. Tell me what you want it to do and I'll quote the work before I start.",
    groups: [
      {
        label: 'Common projects',
        blurb: 'Things I see often enough that I can give you a useful starting point before we talk.',
        tiers: [
          {
            title: 'Automated tedium',
            body: "Scripts, bots, forms, reporting tools, receipt processing, spreadsheet replacement, data cleanup — the small thing that kills one repetitive task.",
            price: 'Starting around $150',
          },
          {
            title: 'Business website',
            body: 'A straightforward site explaining who you are, what you do, hours, contact information, services, and optionally booking. Built and handed over — not a template subscription you are trapped in.',
            price: 'Starting around $300',
          },
          {
            title: 'Booking & scheduling',
            body: 'Online appointments, calendar sync, reminders, intake questions, and simple scheduling workflows.',
            price: 'Starting around $250',
          },
          {
            title: 'AI phone assistant',
            body: 'A voice assistant built around your business that can handle common questions, basic intake, and booking flows, then hand off when a person should take over.',
            price: 'Starting around $500',
          },
          {
            title: 'Remote monitoring',
            body: "Sensors, alerts, and dashboards for things you can't watch all day — coolers, pumps, barns, equipment, doors, temperature, water, or whatever matters.",
            price: 'Starting around $250 + hardware',
          },
          {
            title: 'Live dashboard / scoreboard',
            body: 'A screen showing the numbers people actually need to see — scores, appointments, queue state, equipment status, inventory, production, or whatever matters.',
            price: 'Starting around $300',
          },
          {
            title: 'Livestream automation',
            body: 'Audio, video, switching, streaming, and controls designed so the same volunteer does not have to babysit a laptop forever.',
            price: 'Starting around $500',
          },
          {
            title: 'Digital signage / kiosk',
            body: 'Menus, schedules, announcements, wait times, directories, check-in screens, and information displays.',
            price: 'Starting around $200',
          },
          {
            title: 'Home Assistant setup',
            body: 'Integrations, dashboards, sensors, automations, lighting, controls, and the glue that makes the pieces work together.',
            price: 'Starting around $300 + hardware',
          },
          {
            title: 'Custom arcade / gaming setup',
            body: 'Arcade cabinets, retro systems, controllers, displays, emulation setups, custom interfaces, sim rigs, and other gaming projects.',
            price: 'Starting around $500 + hardware',
          },
          {
            title: 'Drone setup & technology projects',
            body: 'Initial setup, configuration, controller and app integration, accessories, data workflows, and other technical help around the system.',
            price: 'Usually $100–$300',
          },
          {
            title: 'Inventory / simple tracking tool',
            body: "Replace the whiteboard or the spreadsheet nobody trusts with one small tool that tracks what matters without turning into an ERP project.",
            price: 'Starting around $300',
          },
        ],
      },
      {
        label: 'Ownership & hosting',
        blurb: "You won't accidentally get trapped. We decide who owns what and who keeps it running before the project starts.",
        tiers: [
          {
            title: 'Reusable / standard',
            body: 'The normal arrangement. You get the finished solution and documentation; I keep the right to reuse general code, patterns, and ideas elsewhere.',
            price: 'Included in the project price',
          },
          {
            title: 'Hosted & maintained',
            body: 'I host it, keep it running, handle routine maintenance, and remain responsible for the operational side.',
            price: 'Typically $15–$75/mo after setup',
          },
          {
            title: 'Local exclusive',
            body: "Built for you, and I won't turn around and sell the same solution to a nearby competitor.",
            price: 'Quoted by project',
          },
          {
            title: 'Full ownership',
            body: 'You own the custom work outright and I give up reuse rights to it.',
            price: 'Premium · quoted by project',
          },
        ],
      },
      {
        label: 'Advice & consulting',
        blurb: "Sometimes you don't need me to build anything. You just need somebody technical to look at the problem and tell you what makes sense.",
        tiers: [
          {
            title: 'Technology consultation',
            body: 'Up to one hour to talk through a personal project, purchase, system, automation idea, or technical problem. If you hire me for the project afterward, I credit this toward the work.',
            price: '$75',
          },
          {
            title: 'Hourly',
            body: 'For hands-on work that does not make sense as a fixed project. Business project discovery and estimates are still free.',
            price: '$85/hr + parts/software as needed',
          },
          {
            title: 'Monthly',
            body: 'A standing block for organizations that regularly have small software, automation, electronics, or technology jobs.',
            price: '$280/mo for 4 hours · extra hours at $75/hr',
          },
          {
            title: 'One-off project day',
            body: 'A defined block of hands-on work when you would rather buy the time as one number than watch a running clock.',
            price: '$350 half-day · $600 full day',
          },
        ],
      },
      {
        label: 'Community work',
        blurb: 'Some projects matter more than the margin. This is a deliberately subsidized rate for genuinely community-focused work.',
        tiers: [
          {
            title: 'Schools, churches & nonprofits',
            body: 'Reduced-rate engineering for schools, churches, nonprofits, civic groups, and similar community projects. Hardware and software stay at actual cost.',
            price: '$35/hr labor + parts/software at cost',
          },
        ],
      },
    ],
  },
}

export const faq = [
  {
    track: 'both',
    q: "Who's actually doing the work?",
    a: "Me — Nick Hall. 21 years in systems and platform engineering, most of it under real pressure. My job has always been walking into systems I didn't design, learning how they actually work, and making them better — whether that's a production platform, a phone agent, or a bowling lane.",
    list: [
      'Kept a TV station on air as IT Manager',
      'Built observability for a platform handling 20 billion log entries a week',
      'Passed a SOC 2 audit in 4 hours against a 3-day window',
      'Built and operated an 8-lane bowling center on custom hardware and software',
      'U.S. Army veteran, military intelligence systems',
    ],
  },
  {
    track: 'enterprise',
    q: 'Remote or on-site?',
    a: 'Remote-first. On-site for kickoffs or a major incident if it actually matters.',
  },
  {
    track: 'enterprise',
    q: 'How is this different from hiring an SRE?',
    a: 'Fractional cost, senior judgment from day one, no ramp-up, no benefits overhead — and it scales down the month you don’t need it.',
  },
  {
    track: 'enterprise',
    q: 'Do you sign an NDA or go through security review?',
    a: "Yes, standard for this kind of engagement. Background includes cleared military intelligence systems work.",
  },
  {
    track: 'enterprise',
    q: 'What size company is this for?',
    a: 'Teams running production systems with no dedicated SRE/DevOps function yet — or one person doing it as a second job on top of everything else.',
  },
  {
    track: 'local',
    q: 'How does this start?',
    a: "Tell me what you're trying to accomplish, what's eating your time, or what you wish existed. I'll figure out whether the answer is software, electronics, automation, AI, something off the shelf, or nothing at all. Business project discovery is free.",
  },
  {
    track: 'local',
    q: 'What counties do you actually cover?',
    a: 'Primarily Macoupin, Montgomery, and Christian counties — Hillsboro, Litchfield, Carlinville, Gillespie, Staunton, Nokomis, Taylorville, Pana, Girard, Virden, and the towns around them. For the right project, I can go farther. Not on this list? Ask anyway.',
  },
  {
    track: 'local',
    q: 'What do you actually build?',
    a: "Useful things that don't fit neatly into a computer-repair shop. One week that might be a sensor and dashboard for a building. The next it might be Home Assistant, an AI phone agent, a custom arcade, or a small app that replaces three hours of paperwork.",
    list: [
      'Automation & small software tools',
      'AI tools & phone agents',
      'Dashboards & kiosks',
      'Electronics, sensors & IoT',
      'Home Assistant & smart-home projects',
      'Arcades, retro gaming & sim rigs',
      'Drone setup & technical workflows',
      'Streaming, A/V & DMX lighting',
      'Robotics & unusual integrations',
    ],
  },
  {
    track: 'local',
    q: 'Do you work on personal projects?',
    a: "Absolutely. Home Assistant, arcade machines, drones, wall dashboards, electronics, gaming setups, automation, and weird ideas are all fair game. If you're asking whether something can be built rather than whether your laptop can be repaired, you're probably in the right place.",
  },
  {
    track: 'local',
    q: 'Is this computer repair, or general IT support?',
    a: "No. I don't want to be your outsourced help desk, and I'm probably not the person to call for a slow laptop, virus cleanup, printer trouble, password resets, or routine router and Wi-Fi support. Section33 is for building, integrating, automating, and figuring out unusual technology problems.",
  },
  {
    track: 'local',
    q: 'Am I locked into you after you build it?',
    a: "No. I strongly prefer building things that can survive without me. If you want ongoing hosting or maintenance, I can provide it. If you want the keys and documentation and never want to call me again, that's fine too. Ownership and reuse rights are agreed before work starts.",
  },
]

export const contact = {
  heading: 'Start a conversation',
  sub: "No pitch deck. Tell me what you're trying to solve or build.",
}

export const footer = {
  left: 'Section33 · Hillsboro, IL',
  right: 'Practical engineering for production systems, local problems, and weird ideas.',
}
