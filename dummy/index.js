import polygon from "../public/assets/projects/polygon.png";
import BaseMint from "../public/assets/projects/BaseMint.png";
import coingecko from "../public/assets/projects/coingecko.png";
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

  { id: "press_play", name: "Press Play", Img: def },
  { id: "coingecko", name: "Coingecko Bot", Img: coingecko },
];

export default dummyData;
