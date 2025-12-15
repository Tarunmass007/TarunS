import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Tarun",
  initials: "TG",
  location: "India (Open to Remote)",
  locationLink: "https://www.google.com/maps/place/India",
  about: "Software Developer focused on Python, C, Automation, and Telegram Bots.",
  summary: (
    <>
      Software Developer with hands-on experience in Python and C, specializing
      in automation, API integrations, and Telegram bot development. Actively
      freelancing while pursuing a BCA degree, with a strong focus on building
      real-world systems such as subscription bots, referral workflows, and
      business automation tools. Passionate about scalable backend systems and
      preparing for international master’s studies in Computer Science.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/Tarun937",
  personalWebsiteUrl: "https://github.com/Tarun937",
  contact: {
    email: "tarunmass932007@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Tarun937",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tarun007/",
        icon: "linkedin",
      },
    ],
  },

  education: [
    {
      school: "Jain University (Online)",
      degree: "Bachelor of Computer Applications (BCA)",
      start: "2025",
      end: "2028",
    },
  ],

  work: [
    {
      company: "Freelance",
      link: "",
      badges: ["Remote", "Python", "Automation", "Telegram Bots", "APIs"],
      title: "Software Developer",
      start: "2024",
      end: null,
      description: (
        <>
          Working as a freelance developer building automation tools and Telegram
          bots for businesses and creators.
          <ul className="list-inside list-disc">
            <li>Developed Telegram subscription and verification bots</li>
            <li>Built API-integrated automation workflows</li>
            <li>Designed admin systems, referral logic, and user management</li>
            <li>Delivered clean, maintainable Python code for real clients</li>
          </ul>
        </>
      ),
    },
  ],

  skills: [
    "Python",
    "C Programming",
    "Telegram Bot Development",
    "Automation",
    "REST APIs",
    "PostgreSQL",
    "Playwright",
    "Linux",
    "Git & GitHub",
    "FFmpeg",
    "Google Sheets API",
  ],

  projects: [
    {
      title: "Telegram Subscription Bot",
      techStack: ["Python", "Telegram API", "PostgreSQL"],
      description:
        "A full-featured Telegram bot for subscription management, verification workflows, admin approvals, and automated access control.",
      link: {
        label: "GitHub",
        href: "https://github.com/mass9307/telegram-subscription-bot",
      },
    },
    {
      title: "Automation & API Bot",
      techStack: ["Python", "REST APIs"],
      description:
        "Telegram bot integrated with external APIs to automate workflows, manage users, and trigger business actions.",
      link: {
        label: "GitHub",
        href: "https://github.com/mass9307/telegram-automation-bot",
      },
    },
    {
      title: "Playwright Automation",
      techStack: ["Python", "Playwright"],
      description:
        "Browser automation scripts for dynamic websites, testing flows, and task automation.",
      link: {
        label: "GitHub",
        href: "https://github.com/mass9307/playwright-automation",
      },
    },
    {
      title: "Python Automation Scripts",
      techStack: ["Python"],
      description:
        "Collection of Python scripts for scraping, file processing, and workflow automation.",
      link: {
        label: "GitHub",
        href: "https://github.com/mass9307/python-automation-scripts",
      },
    },
    {
      title: "C Programming Projects",
      techStack: ["C"],
      description:
        "Logic-building and system-level programs demonstrating strong fundamentals in C programming.",
      link: {
        label: "GitHub",
        href: "https://github.com/mass9307/c-programming-practice",
      },
    },
  ],
} as const;
