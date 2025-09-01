import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Paul",
  lastName: "Kim",
  displayName: "Paul Kim",
  username: "paOol",
  bio: "Building the infrastructure for fully autonomous AI Agents.",
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
Hello, World! I am Paul Kim, a Senior Full Stack Engineer with over 15 years of experience in building scalable web applications and services. I'm very capable of shipping products from scratch and wearing all the hats necessary to do it solo.

It's fair to say I'm an expert in web3/blockchain technologies, however I have had an interest in AI/ML for many years as well. I believe the future of technology lies within fully autonomous AI agents that will 100x human productivity. In order to achieve this, it will require a deep understanding of both AI and web3 technologies, which is why I have been focusing my efforts on mastering both fields.
  `,
  avatar: "https://avatars.githubusercontent.com/u/5941389?v=4",
  ogImage: "https://avatars.githubusercontent.com/u/5941389?v=4",

  dateCreated: "2025-08-20", // YYYY-MM-DD
};
