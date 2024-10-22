import polygon from "../public/assets/projects/polygon.png";
import npc from "../public/assets/projects/npc.jpg";
import BaseMint from "../public/assets/projects/BaseMint.png";
import coingecko from "../public/assets/projects/coingecko.png";
import ttw from "../public/assets/projects/ttw.png";
import yarn from "../public/assets/projects/yarn.png";
import leaftree from "../public/assets/projects/leaftree.png";
import fusionAI from "../public/assets/projects/fusionAI.png";

const dummyData = [
  {
    id: "yarn",
    name: "Music Yarn",
    stack: [
      "Next Js",
      "TypeScript",
      "React Native",
      "Supabase",
      "Tailswind CSS",
    ],
    overwiew:
      "Yarn is a music application designed to revolutionize fan engagement and simplify artist discovery. By integrating hierarchical forum-style discussions and robust artist profiles, Yarn connects fans not only with their favorite artists & songs but also with one another, fostering a vibrant community. ",

    repo: "https://github.com/bouncei/yarn-web",
    demo: "https://musicyarns.com",
    technologies: ["Next Js", "React Native", "Supabase", "Tailswind CSS"],
    Img: yarn,
  },
  {
    id: "leaftree",
    name: "LeafTree",
    stack: ["Next Js", "TypeScript", "Tailswind CSS", "Sanity.io", "Framer"],
    overwiew:
      "LeafTree curate ventures based on their: Purpose, Scalability & Sustainability leading to the development of products that stimulate Well Being. ",

    repo: "https://github.com/bouncei/water-tree",
    demo: "https://water-tree.vercel.app",
    technologies: [
      "Next Js",
      "TypeScript",
      "Tailswind CSS",
      "Sanity.io",
      "Framer",
    ],
    Img: leaftree,
  },
  {
    id: "fusion-ai",
    name: "FusionAI",
    technologies: [
      "OpenAI",
      "Replicate",
      "Next Js",
      "TypeScript",
      "Tailswind CSS",
      "Clerk",
      "Stripe",
      "Zustand",
      "Framer",
      "Prisma ORM",
      "MongoDB",
    ],
    overwiew:
      "Yarn is a music application designed to revolutionize fan engagement and simplify artist discovery. By integrating hierarchical forum-style discussions and robust artist profiles, Yarn connects fans not only with their favorite artists & songs but also with one another, fostering a vibrant community. ",

    repo: "https://github.com/bouncei/fusion-ai",
    demo: "https://fusion-ai-iota.vercel.app/",
    stack: ["Next Js", "TypeScript", "MongoDB", "Tailswind CSS", "Zustand"],
    Img: fusionAI,
  },
  {
    id: "leaftree",
    name: "LeafTree",
    stack: ["Next Js", "TypeScript", "Tailswind CSS", "Sanity.io", "Framer"],
    overwiew:
      "LeafTree curate ventures based on their: Purpose, Scalability & Sustainability leading to the development of products that stimulate Well Being. ",

    repo: "https://github.com/bouncei/water-tree",
    demo: "https://water-tree.vercel.app",
    technologies: [
      "Next Js",
      "TypeScript",
      "Tailswind CSS",
      "Sanity.io",
      "Framer",
    ],
    Img: leaftree,
  },

  {
    id: "basemint",
    name: "Base Mint",
    stack: ["Next Js", "Tailswind CSS", "Sanity.io", "Solidity"],
    overwiew:
      "A Web3.0 Block-chain application to discover, collect, and sell extraordinary NFTs. The Decentralized application was built on the Ethereum Blockchain with Nextjs, and Smart contracts written in Solidity.",

    repo: "https://github.com/bouncei/b-blockchain-nft",
    demo: "https://b-blockchain-nft-bouncei.vercel.app/",
    technologies: [
      "Next Js",
      "Tailswind CSS",
      "Sanity.io",
      "Solidity",
      "Hadhat",
      "Ethers",
      "Metamask",
    ],
    Img: BaseMint,
  },

  {
    id: "ttw",
    name: "Troc To Work",
    stack: ["Next Js", "TypeScript", "Tailswind CSS", "MongoDB"],
    overwiew:
      "TrocToWork is a user-friendly platform that facilitates the connection between companies that have goods or skills to share. With TrocToWork, the exchange of goods and services can strengthen ties in the community. By creating this platform, the goal was to contribute to the life of professional community, and to have a positive impact to consumers ",

    demo: "https://troc-to-work.vercel.app/",
    technologies: [
      "Next Js",
      "Tailswind CSS",
      "Sanity.io",
      "GraphQL",
      "Stripe",
      "SendGrid",
      "MongoDB",
      "Headless Ui",
      "Firebase",
      "Cloudinary",
    ],
    Img: ttw,
  },
  {
    id: "npc",
    name: "National Population Commission",
    stack: ["Next Js", "Tailswind CSS", "Sanity.io"],
    overwiew:
      "The National Population Commission (NPC) serves as the authoritative source of data collection, collation, analysis, and publication for the population and economy of Nigeria. Under the purview of the Office of the Presidency, NPC plays a critical role in providing accurate and up-to-date demographic and economic information to inform national policies and planning.    ",

    demo: "https://nationalpopulation.gov.ng/",
    technologies: [
      "Next Js",
      "Tailswind CSS",
      "Sanity.io",
      "GraphQL",
      "Material UI",
    ],
    Img: npc,
  },
  {
    id: "coingecko",
    name: "Coingecko Bot",
    stack: ["Python(Flask)", "SQL"],
    demo: "https://t.me/CG_fastest_alerts",
    repo: "https://github.com/bouncei/coingecko-listing-bot",
    overwiew:
      "A telegram bot for providing price signals for the latest crypto coins listed in Coingecko.",
    technologies: [
      "Flask",
      "telebot",
      "pyTelegramBotAPI",
      "Jinja2",
      "APScheduler",
      "DateTime",
      "python-dotenv",
    ],
    Img: coingecko,
  },
];

export default dummyData;
