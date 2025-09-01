import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "datnoid",
    companyName: "Datnoid",
    positions: [
      {
        id: "datnoid-founder",
        title: "Founder & Full Stack Developer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Leading the development of a revolutionary **Decentralized Exchange (DEX)** with innovative features that are reshaping DeFi trading:

**Technical Architecture & Innovation:**
- Architected and built a cutting-edge **Token Launchpad** platform enabling seamless token creation and deployment
- Engineered a **unified liquidity pool** system that maximizes capital efficiency and reduces slippage for traders
- Implemented advanced smart contract architecture using **Solidity** with comprehensive security measures and gas optimizations
- Developed a responsive, high-performance frontend using **React.js** and **TypeScript** that handles real-time blockchain data

**Key Achievements:**
- Single-handedly built the entire full-stack application from concept to production
- Integrated complex Web3 functionalities including wallet connections, transaction signing, and real-time price feeds
- Optimized smart contracts resulting in 40% lower gas costs compared to competitor platforms
- Created comprehensive testing suite with 95%+ code coverage using Hardhat and Foundry`,
        skills: [
          "Solidity",
          "React.js",
          "Node.js",
          "TypeScript",
          "Web3.js",
          "Ethers.js",
          "Smart Contracts",
          "DeFi",
          "Hardhat",
          "Foundry",
          "Full Stack Development",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "dimo",
    companyName: "DIMO",
    positions: [
      {
        id: "dimo-solidity",
        title: "Solidity Developer",
        employmentPeriod: {
          start: "2022",
          end: "2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Engineered critical blockchain infrastructure for DIMO's decentralized vehicle data network, contributing to a platform managing millions of connected vehicles:

**Smart Contract Development:**
- Architected and deployed a **Soulbound Token (SBT)** system for immutable driver identity verification, ensuring secure and permanent on-chain credentials
- Built sophisticated **staking contracts** managing over $2M in total value locked (TVL), implementing time-weighted rewards and anti-gaming mechanisms
- Developed innovative **rewards/airdrop distribution contracts** that efficiently handled batch processing for 10,000+ recipients while minimizing gas costs

**Frontend Integration & User Experience:**
- Seamlessly integrated smart contracts with React.js frontend using **WAGMI** hooks and **ethers.js** for optimal user experience
- Created intuitive UI components for complex DeFi operations, abstracting blockchain complexity for mainstream users
- Implemented real-time transaction monitoring and error handling for robust user interactions

**Testing & Security:**
- Wrote comprehensive test suites using **Hardhat** and **Foundry** achieving 98% code coverage
- Conducted gas optimization reducing transaction costs by 35%
- Participated in security audits and implemented best practices for secure smart contract development`,
        skills: [
          "Solidity",
          "Smart Contracts",
          "Hardhat",
          "Foundry",
          "React.js",
          "WAGMI",
          "Ethers.js",
          "DeFi",
          "Testing",
          "Gas Optimization",
        ],
      },
    ],
  },
  {
    id: "ava-labs",
    companyName: "Ava Labs",
    positions: [
      {
        id: "ava-senior-frontend",
        title: "Senior Front End Developer IV",
        employmentPeriod: {
          start: "2021",
          end: "2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Played a pivotal role in building Avalanche's ecosystem tools, contributing to a blockchain platform processing millions of transactions daily:

**Core Wallet Development:**
- Led development of **Core Browser Extension Wallet**, Avalanche's flagship wallet supporting multiple blockchains and millions of users
- Maintained and enhanced the **Avalanche Web Wallet**, implementing features like cross-chain swaps and NFT support
- Contributed to **Avalanche.js** SDK, the primary JavaScript library used by thousands of developers building on Avalanche

**Cross-Platform Development:**
- Built features across **React.js**, **React Native**, and **TypeScript** ensuring consistent experience across web and mobile platforms
- Implemented complex state management for handling multiple blockchain networks simultaneously
- Optimized performance for handling high-frequency blockchain data updates

**Enterprise Support & DevOps:**
- Provided technical support and integration assistance to partnering businesses including major DeFi protocols
- Implemented CI/CD pipelines using **Circle CI** and **Docker** for automated testing and deployment
- Contributed to smart contract development in **Solidity** for wallet-specific features

**Impact & Achievements:**
- Reduced wallet loading time by 60% through code splitting and lazy loading optimizations
- Mentored junior developers and conducted code reviews to maintain high code quality standards
- Published technical documentation and guides used by 5,000+ developers monthly`,
        skills: [
          "React.js",
          "React Native",
          "TypeScript",
          "Node.js",
          "Browser Extensions",
          "Web3",
          "Avalanche.js",
          "Circle CI",
          "Docker",
          "Solidity",
        ],
      },
    ],
  },
  {
    id: "bitcoin-com",
    companyName: "Bitcoin.com",
    positions: [
      {
        id: "bitcoin-developer",
        title: "Bitcoin Developer",
        employmentPeriod: {
          start: "2019",
          end: "2020",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Spearheaded critical infrastructure development for the Bitcoin ecosystem, supporting thousands of developers and millions of users:

**Library & SDK Development:**
- Created multiple open-source **JavaScript libraries** for Bitcoin development, collectively downloaded 100,000+ times
- Lead maintainer of **Badger Wallet**, a popular Bitcoin wallet with 50,000+ active users
- Developed REST APIs processing millions of requests daily for blockchain data queries

**Infrastructure & DevOps:**
- Implemented auto-scaling solutions handling traffic spikes during market volatility
- Maintained backend APIs and server infrastructure supporting the entire Bitcoin developer ecosystem

**Database & Performance:**
- Optimized **MySQL** databases handling terabytes of blockchain data
- Implemented caching strategies reducing API response times by 70%
- Built real-time WebSocket services for instant transaction notifications

**Mobile Development:**
- Contributed to **React Native** mobile wallet (Badger) for iOS and Android
- Implemented secure key management and transaction signing on mobile devices
- Created unit and integration tests using **Jest** ensuring 90%+ code coverage`,
        skills: [
          "Node.js",
          "React.js",
          "React Native",
          "TypeScript",
          "Bitcoin",
          "Blockchain",
          "Docker",
          "Amazon EKS",
          "MySQL",
          "Jest",
          "REST APIs",
        ],
      },
    ],
  },
  {
    id: "swishlabs",
    companyName: "SwishLabs",
    positions: [
      {
        id: "swish-backend",
        title: "Backend Developer",
        employmentPeriod: {
          start: "2018",
          end: "2019",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Delivered critical backend solutions for e-commerce modernization, enhancing mobile shopping experiences:

**API Development & Integration:**
- Architected RESTful **Node.js APIs** serving as the backbone for iOS mobile application
- Successfully integrated complex **Magento** e-commerce platform with modern mobile architecture
- Implemented robust authentication and authorization systems ensuring secure data access

**Mobile Commerce Innovation:**
- Collaborated with small agile team to transform traditional web commerce into seamless mobile experience
- Built real-time inventory synchronization between Magento backend and mobile app
- Developed push notification system for order updates and promotional campaigns

**Database & Performance:**
- Optimized **MySQL** queries reducing page load times by 50%
- Implemented efficient caching strategies using Redis for frequently accessed data
- Containerized applications using **Docker** for consistent development and deployment environments`,
        skills: [
          "Node.js",
          "MySQL",
          "Docker",
          "REST APIs",
          "Magento",
          "Backend Development",
          "iOS Integration",
        ],
      },
    ],
  },
  {
    id: "powersportsupport",
    companyName: "Powersportsupport",
    positions: [
      {
        id: "powersport-fullstack",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "2015",
          end: "2018",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `e-commerce operations through innovative integrations and custom solutions:

**E-Commerce Platform Development:**
- Created seamless integrations with **BigCommerce** and other third-party platforms
- Built **custom shopping cart** system with advanced features including wishlist, comparison, and bulk ordering
- Developed comprehensive **order automation** system reducing manual processing time by 80%

**Full Stack Implementation:**
- Designed and implemented responsive frontend interfaces using modern JavaScript frameworks
- Built robust backend services handling inventory management, order processing, and customer data
- Created admin dashboard for real-time analytics and business intelligence

**Business Impact:**
- Increased online sales conversion rate by 35% through UX improvements
- Reduced cart abandonment rate by 25% with streamlined checkout process
- Automated repetitive tasks saving 20+ hours of manual work weekly`,
        skills: [
          "Full Stack Development",
          "BigCommerce",
          "E-commerce",
          "JavaScript",
          "PHP",
          "MySQL",
          "Order Automation",
          "API Integration",
        ],
      },
    ],
  },
  {
    id: "sm-sold",
    companyName: "SM Sold",
    positions: [
      {
        id: "sm-web-dev",
        title: "Web Developer",
        employmentPeriod: {
          start: "2013",
          end: "2015",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Built comprehensive web platform from ground up, establishing strong foundation in full-stack development:

**Custom Platform Development:**
- Developed custom backend using **CakePHP** framework implementing MVC architecture
- Created sophisticated client listing management system with advanced search and filtering
- Built secure authentication system with role-based access control

**Feature Implementation:**
- Designed intuitive admin dashboard for content management and analytics
- Implemented dynamic contact forms with email notifications and CRM integration
- Developed media upload system supporting multiple file formats with automatic optimization

**Technical Achievements:**
- Reduced page load times by 40% through query optimization and caching
- Implemented SEO best practices resulting in 150% increase in organic traffic
- Created responsive design ensuring seamless experience across all devices`,
        skills: [
          "CakePHP",
          "PHP",
          "MySQL",
          "JavaScript",
          "HTML/CSS",
          "Authentication",
          "Media Upload",
          "MVC Architecture",
        ],
      },
    ],
  },
];
