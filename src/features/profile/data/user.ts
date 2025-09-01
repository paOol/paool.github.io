import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Paul",
  lastName: "Kim",
  displayName: "Paul Kim",
  username: "paOol",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Full Stack Engineer.",
    "Web3 Engineer",
    "AI Engineer",
    "CTO",
  ],
  email: "cGFvb2xraW1AZ21haWwuY29t",
  jobTitle: "Full Stack Engineer",
  jobs: [
    {
      title: "Founder",
      company: "Agentis",
      website: "https://agentis.team",
    },
    {
      title: "Founder",
      company: "Datnoid",
      website: "https://datnoid.com",
    },
  ],
  about: `
Hello, World! I am Paul Kim — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

One of my key projects, [ZaDark](https://zadark.com), enhances the Zalo experience on PC and Web, surpassing 80,000 downloads on [SourceForge](https://sourceforge.net/projects/zadark) and 15,000 active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) since 2022.

I'm also the creator of [React Wheel Picker](https://react-wheel-picker.paul.agentis.solutions) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 300+ stars on [GitHub](https://github.com/ncdai/react-wheel-picker) and was selected for [Vercel Open Source Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

Let's connect and collaborate!
  `,
  avatar: "https://avatars.githubusercontent.com/u/5941389?v=4",
  ogImage: "https://avatars.githubusercontent.com/u/5941389?v=4",

  dateCreated: "2025-08-20", // YYYY-MM-DD
};
