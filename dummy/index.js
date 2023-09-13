import polygon from "../public/assets/projects/polygon.png";
import npc from "../public/assets/projects/npc.jpg";
import BaseMint from "../public/assets/projects/BaseMint.png";
import coingecko from "../public/assets/projects/coingecko.png";
import ttw from "../public/assets/projects/ttw.png";
import def from "../public/logo.png";

const dummyData = [
  {
    id: "basemint",
    name: "Base Mint",

    stack: ["Next Js", "Tailswind CSS", "Sanity.io", "Solidity"],
    overwiew:
      "A Web3.0 Block-chain application to discover, collect, and sell extraordinary NFTs. The Decentralized application was built on the Ethereum Blockchain with Nextjs, and Smart contracts written in Solidity.",

    repo: "https://github.com/bouncei/b-blockchain-nft",
    demo: "https://baseminty.com/",
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
    id: "polygon",
    name: "Polygon Dapp",
    stack: ["Next Js", "Tailswind CSS", "Solidity"],
    overwiew:
      "A Web3.0 Block-chain application to create, buy and sell extraordinary NFTs. The Decentralized application was built on the Polygon Chain with Nextjs, and Smart contracts written in Solidity.",

    repo: "https://github.com/bouncei/polygon-dApp",
    demo: "https://polygon-d-2u4ds5k59-bouncei.vercel.app/",
    technologies: [
      "Next Js",
      "Tailswind CSS",
      "Polygon",
      "Infura IPFS",
      "Solidity",
      "Hadhat",
      "MATIC",
      "Metamask",
      "Wallet Connect",
      "Unstoppable Domain",
    ],
    Img: polygon,
  },

  {
    id: "ttw",
    name: "Troc To Work",
    stack: ["Next Js", "Tailswind CSS", "MongoDB"],
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
