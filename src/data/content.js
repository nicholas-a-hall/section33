export const site = {
  name: 'Section33',
  email: 'nick@section33.io',
  github: 'https://github.com/nicholas-a-hall',
  linkedin: 'https://linkedin.com/in/nicholashall87',
  portfolio: 'https://nicholas-a-hall.github.io',
}

export const enterprise = {
  id: 'enterprise',
  key: 'enterprise',
  navLabel: 'Fractional SRE / DevOps',
  navLabelShort: 'Fractional DevOps',
  modeChip: 'MODE: FRACTIONAL SRE/DEVOPS',
  modeLabel: 'Enterprise',
  color: 'cyan',
  heroVisual: '/graphics/platform-stack.svg',
  heroVisualAlt: 'Product teams using a shared platform layer for delivery, observability, reliability, and security',
  systemVisual: '/graphics/problem-system-outcome.svg',
  stats: [
    { value: '60 → 6 min', label: 'build + deploy feedback' },
    { value: '20B/week', label: 'logs operated at scale' },
    { value: '$4M/yr', label: 'cloud spend removed' },
    { value: '1 wk → 30m', label: 'tenant setup' },
  ],
  eyebrow: 'Fractional SRE / DevOps',
  heading: 'I find the platform problem underneath the operational symptoms.',
  sub: "Slow delivery, noisy on-call, cloud spend, inconsistent environments, observability nobody trusts — those usually aren't separate problems. I find the leverage point, fix it hands-on, and leave behind a system the team can keep using without me.",
  heroCard: {
    title: 'For teams that outgrew the way they built it the first time',
    body: "Kubernetes, delivery, observability, reliability, cloud architecture, incident response — I work at the platform layer where recurring operational pain usually turns out to have a common cause.",
  },
  contactCta: 'Talk about a retainer',
  contactSubject: 'Fractional SRE/DevOps inquiry',
  services: [
    {
      title: 'Every deploy is its own adventure',
      body: "If each service needs a different pipeline, release ritual, or infrastructure expert, the problem isn't the individual deploy. I build the common path underneath it so teams can ship without relearning production every time.",
    },
    {
      title: 'On-call is a symptom, not the system',
      body: "I'll help carry the pager when that is useful, but the real work is finding why the same classes of incidents keep coming back: ownership gaps, bad signals, fragile dependencies, missing automation, or architecture that stopped scaling.",
    },
    {
      title: 'Nobody trusts the observability',
      body: "More dashboards won't fix that. I work backward from the decisions engineers actually need to make, then wire metrics, logs, traces, alerts, and incident context around those questions.",
    },
    {
      title: 'Cloud cost grew faster than the product',
      body: "Cost is an architecture signal. I look at what the system is buying you, where the waste actually comes from, and what can change without quietly trading away reliability.",
    },
    {
      title: 'Compliance exposed all the hidden assumptions',
      body: "SOC 2 and security work are useful when the controls become real engineering practices instead of audit theater. I led the engineering side of a SOC 2 Type I effort and completed the audit itself in roughly four hours against a three-day window.",
    },
  ],
  proof: [
    {
      tag: 'DELIVERY',
      title: '60 minutes → 6',
      body: 'At Formant, rebuilt the delivery path around reusable Helm foundations and repeatable GitOps workflows, cutting build and deployment feedback from roughly an hour to six minutes.',
    },
    {
      tag: 'PLATFORM',
      title: '1 week → 30 minutes',
      body: 'At FORT Robotics, built 25 reusable Helm charts that turned new-tenant setup from roughly a week into about 30 minutes; platform changes also improved deployment/recovery time by 83% and RTO by 87%.',
    },
    {
      tag: 'SCALE + COST',
      title: '20B logs/week · $4M/year',
      body: 'At Paramount+, operated Elasticsearch on Kubernetes at roughly 20 billion log entries per week and made the cost-versus-reliability call that cut about $4M/year in GCP spend without giving up the observability we needed.',
    },
    {
      tag: 'SAAS',
      title: 'Graylog Cloud through GA',
      body: 'Helped build the AWS platform behind Graylog Cloud through SOC 2, beta, and general availability, including production-scale load testing at roughly 200,000 logging requests per second.',
    },
    {
      tag: 'COMPLIANCE',
      title: 'SOC 2 Type I',
      body: 'At Growth Protocol, led the engineering work behind SOC 2 Type I: technical controls, remediation, evidence, and audit execution. The audit itself completed in roughly four hours against a planned three-day window.',
    },
  ],
  engagement: [
    {
      title: 'Start with the symptoms',
      body: "30 minutes, no charge. Tell me what hurts: deploys, incidents, cloud spend, customer environments, compliance, observability, or the one engineer everybody depends on.",
    },
    {
      title: 'Find the leverage point',
      body: "I look at the architecture, operating history, team boundaries, and actual failure patterns before proposing a fix. The request and the root problem are not always the same thing.",
    },
    {
      title: 'Fix the system, not just the ticket',
      body: "The useful answer is usually a platform capability, a common path, a better boundary, or an operating model the rest of the team can reuse — not another pile of one-off automation.",
    },
    {
      title: 'Stay hands-on',
      body: "I'll write the design, build the reference implementation, debug production, and work alongside the team. Staff-level does not mean PowerPoint-only.",
    },
    {
      title: 'Leave it better than I found it',
      body: "Runbooks, IaC, dashboards, architecture notes, and the reasoning behind the decisions stay with you. The work should become easier to operate after I leave, not harder.",
    },
  ],
  pricing: {
    intro: "Fractional work is priced by the amount of sustained responsibility I am taking on, not by counting individual tickets. The point is to fix the platform problems creating repeated work in the first place. Numbers below are starting points; final scope and price follow the assessment.",
    note: 'Proposed rates — confirm before quoting a client.',
    tiers: [
      {
        title: 'Reliability Audit',
        body: 'One-time architecture and operating review. I map the recurring pain back to platform, ownership, reliability, delivery, and observability problems, then leave you with a prioritized path forward.',
        price: '$8,000–$15,000 · 2–4 weeks',
      },
      {
        title: 'Embedded Retainer',
        body: '1–2 days/week. Hands-on platform work, architecture, delivery, reliability, observability, and incident follow-through as a standing part of the team.',
        price: '$7,500–$12,000/mo',
      },
      {
        title: 'Platform Retainer',
        body: '3+ days/week. Acting platform/SRE technical lead: architecture, roadmap, implementation, incident command, and the work needed to make recurring problems stop recurring.',
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
  heroVisual: '/graphics/local-builder-stack.svg',
  heroVisualAlt: 'Real-world people, equipment, and sensors connected to software, automation, and useful results',
  systemVisual: '/graphics/problem-system-outcome.svg',
  stats: [
    { value: '21 yrs', label: 'building production systems' },
    { value: '8 lanes', label: 'custom control + telemetry' },
    { value: '3 counties', label: 'local service area' },
    { value: '1 builder', label: 'problem to handoff' },
  ],
  eyebrow: 'Nick Hall · Hillsboro, IL',
  heading: "I find the boring stuff eating your time. Then I build my way around it.",
  sub: "I build software, electronics, automation, and practical AI around Macoupin, Montgomery, and Christian counties. Bring me the problem, not a technology shopping list. I'll learn how the work actually happens and build the smallest thing that solves it properly.",
  heroCard: {
    title: 'For businesses, farms, schools, churches & personal projects',
    body: "21 years building systems that have to work outside the demo. Now I use the same skill set closer to home. Not computer repair. Not a help desk. If your router needs rebooted, I'm probably not your guy. If something keeps wasting time, fails in an annoying way, or doesn't exist yet, that's much more interesting.",
  },
  contactCta: 'Tell me what you want to solve or build',
  contactSubject: 'Local project inquiry',
  services: [
    {
      title: "You're still doing it by hand",
      body: "A spreadsheet, notebook, clipboard, whiteboard, or process only one person understands. I look for the repeated part and build around that, instead of turning the whole business into a software project.",
    },
    {
      title: 'You keep solving the same problem over and over',
      body: "If the same mistake, delay, handoff, or workaround keeps coming back, I don't want to patch it for the tenth time. I want to find the common cause and make the next ten instances easier.",
    },
    {
      title: "Nobody answers when you're slammed",
      body: "An AI phone assistant can handle common questions, bookings, and basic intake, then hand the call to a real person when it should. The point isn't AI. The point is fewer missed calls and less time repeating the same answers.",
    },
    {
      title: "You need eyes on something when you're not there",
      body: 'Temperature, water, doors, equipment, pumps, freezers, buildings — whatever matters. Sensors, alerts, dashboards, and automation that tell you something is wrong before it becomes expensive.',
    },
    {
      title: 'It works until something weird happens',
      body: "Power drops. Wi-Fi disappears. A sensor dies. Somebody presses the wrong button. Old equipment does something nobody documented. I try to design that path too, because that's usually when you actually need the system.",
    },
    {
      title: 'You want the house to actually be smart',
      body: 'Home Assistant, dashboards, sensors, automations, lighting, buttons, and weird integrations — built around how you actually live instead of whichever ecosystem a manufacturer is trying to lock you into.',
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
      visual: '/graphics/openlanelink-mini.svg',
      body: 'Built instead of buying a six-figure commercial replacement: a lane-management platform tying modern software to decades-old electromechanical bowling equipment. Per-lane failure boundaries, swappable edge hardware, live telemetry, and a wired fallback when wireless stops being useful.',
    },
    {
      tag: 'WORKFLOW + ANALYTICS',
      title: 'Quarry',
      body: "I got tired of treating a job search like a pile of browser tabs and spreadsheets, so I built the system I wanted: application tracking, funnel analytics, stale-lead detection, and source/category conversion — all kept in the browser without an unnecessary backend.",
      url: 'https://nicholas-a-hall.github.io/quarry',
      linkLabel: 'Open Quarry →',
    },
    {
      tag: 'DATA + VISUALIZATION',
      title: 'Econ Tracker',
      body: "I wanted a better way to inspect long-term economic claims than swapping isolated charts, so I built an interactive timeline that puts decades of U.S. economic indicators, major events, and context in one place.",
      url: 'https://nicholas-a-hall.github.io/econ-tracker',
      linkLabel: 'Explore Econ Tracker →',
    },
    {
      tag: 'DASHBOARD',
      title: 'ScoreDash',
      body: 'Live scores, strikes, player stats, ball speed, and game state pulled from the same event stream already running the lanes. One source of truth instead of another screen somebody has to update by hand.',
    },
    {
      tag: 'AI VOICE',
      title: 'Theia & Rook',
      body: "Theia handled the repetitive phone traffic for a real local business: hours, pricing, common questions, and booking conversations, with clear handoff points where a person should take over. Rook is my personal version of the same pattern.",
    },
    {
      tag: 'COMMUNITY',
      title: 'Backfence',
      body: "A local directory built around a very small-town problem: useful information exists, but it lives in people's heads and Facebook comments. The goal is one town at a time, starting with Hillsboro.",
    },
  ],
  engagement: [
    {
      title: 'Start with the problem',
      body: "For business and organization projects, the first conversation is free. Tell me what is frustrating you, costing you time, or what you wish worked differently. You do not need to know what technology you need.",
    },
    {
      title: 'I learn how it really works',
      body: "I want to see the process where it actually happens — the people, equipment, shortcuts, exceptions, and weird edge cases that never make it into a requirements document.",
    },
    {
      title: 'I find the leverage point',
      body: "The thing you asked for and the thing worth fixing are not always the same. Sometimes the right answer is custom software. Sometimes it's a $40 sensor, an existing product, a changed process, or doing nothing.",
    },
    {
      title: 'I build for real life',
      body: "I think about what happens when the internet drops, hardware dies, somebody uses it wrong, or the old machine does something strange. The happy path is only half the design.",
    },
    {
      title: 'You get a clear price and a way out',
      body: "For defined work, I prefer fixed quotes. You'll know what I'm building, what it costs, what is included, and what happens afterward. I can hand it over, host it, maintain it, make it locally exclusive, or transfer full ownership.",
      ownership: [
        { title: 'Reusable', body: 'Default for most projects. You get the finished solution and documentation; I can reuse general building blocks and ideas elsewhere.' },
        { title: 'Local exclusive', body: "I won't build the same solution for a nearby competitor. Quoted case by case." },
        { title: 'Full ownership', body: 'The custom work is entirely yours and I give up reuse rights. Premium, because you are buying the work itself.' },
      ],
    },
  ],
  pricing: {
    intro: "Small-town projects should have small-business-sized prices. I keep overhead low and try to solve the smallest useful version of the problem instead of selling hours for their own sake. The numbers below are realistic starting points, not promises before I've seen the job. Parts, hardware, hosting, APIs, and other third-party costs are separate and billed at actual cost.",
    note: "If it doesn't fit a box below, that's fine. Tell me what you want it to do and I'll quote the work before I start.",
    groups: [
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
      }
    ],
  },
}

export const faq = [
  {
    track: 'both',
    q: "Who's actually doing the work?",
    a: "Me — Nick Hall. I've spent 21 years walking into systems I didn't design, figuring out how they actually work, and improving the part with the most leverage. Sometimes that is a Kubernetes platform. Sometimes it is a sensor, a phone agent, or a bowling lane.",
    list: [
      'Cut delivery feedback from roughly 60 minutes to 6 at Formant',
      'Operated observability at roughly 20 billion log entries a week and cut about $4M/year in cloud spend at Paramount+',
      'Improved deployment/recovery time 83% and reduced tenant setup from roughly one week to 30 minutes at FORT Robotics',
      'Led the engineering work behind SOC 2 Type I at Growth Protocol; the audit itself completed in roughly four hours',
      'Built and operated an 8-lane bowling center on custom hardware and software',
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
    a: "You are not hiring me to become another ticket queue. I come in at the platform layer, find the recurring problem underneath the symptoms, build the path out, and leave the architecture, code, runbooks, and reasoning with your team. The engagement can scale down when the work does.",
  },
  {
    track: 'enterprise',
    q: 'Do you sign an NDA or go through security review?',
    a: "Yes, standard for this kind of engagement. Background includes cleared military intelligence systems work.",
  },
  {
    track: 'enterprise',
    q: 'What size company is this for?',
    a: 'Usually teams where delivery, reliability, observability, cloud cost, or incident response has become a shared pain but nobody has enough leverage or time to fix the system underneath it. That can be a startup with no platform function yet or a larger team whose platform has outgrown its first design.',
  },
  {
    track: 'local',
    q: 'How does this start?',
    a: "Bring me the problem, not a technology shopping list. Tell me what keeps wasting time, failing, getting repeated, or what you wish existed. I'll learn how it works today, find the part worth fixing, and tell you whether the answer is software, electronics, automation, AI, something off the shelf, a process change, or nothing at all. Business project discovery is free.",
  },
  {
    track: 'local',
    q: 'What counties do you actually cover?',
    a: 'Primarily Macoupin, Montgomery, and Christian counties — Hillsboro, Litchfield, Carlinville, Gillespie, Staunton, Nokomis, Taylorville, Pana, Girard, Virden, and the towns around them. For the right project, I can go farther. Not on this list? Ask anyway.',
  },
  {
    track: 'local',
    q: 'What do you actually build?',
    a: "Useful things that don't fit neatly into a computer-repair shop. One week that might be a sensor and dashboard for a building. The next it might be Home Assistant, an AI phone agent, a custom arcade, or a small app that removes three hours of repeated work.",
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
    q: 'Can I just pay you for advice before I buy or build something?',
    a: "Yes. That's what the technology consultation is for. Bring me the idea, shopping list, system, or project you're considering and I'll help you figure out what actually makes sense. If I end up building the project, I credit the consultation toward the work.",
  },
  {
    track: 'local',
    q: 'Is this computer repair, or general IT support?',
    a: "No. I don't want to be your outsourced help desk, and I'm probably not the person to call for a slow laptop, virus cleanup, printer trouble, password resets, or routine router and Wi-Fi support. Section33 is for building, integrating, automating, and figuring out unusual technology problems.",
  },
  {
    track: 'local',
    q: 'Am I locked into you after you build it?',
    a: "No. I strongly prefer building things that can survive without me. If you want ongoing hosting or maintenance, I can provide it. If you want the keys, wiring diagram, source, and documentation and never want to call me again, that's fine too. Ownership and reuse rights are agreed before work starts.",
  },
]

export const contact = {
  heading: 'Start with the problem',
  sub: "No pitch deck. Tell me what keeps wasting time, breaking, getting repeated, or what you wish existed. I'll help figure out what is actually worth fixing.",
}

export const footer = {
  left: 'Section33 · Hillsboro, IL',
  right: 'Bring me the problem. I’ll build the tool.',
}
