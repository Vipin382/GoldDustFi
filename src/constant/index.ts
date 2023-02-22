interface MarketStaticDataInterface {
  Amount: string;
  Footer: string;
}

const MarketStaticData: MarketStaticDataInterface[] = [
  {
    Amount: "$20M",
    Footer: "APY Paid",
  },
  {
    Amount: "$132K",
    Footer: "7 Day Yield",
  },
  {
    Amount: "$187M",
    Footer: "Total Volume",
  },
  {
    Amount: "$800k",
    Footer: "24 hrs Volume",
  },
  {
    Amount: "$17K",
    Footer: "24 hr Yield",
  },
];

interface MarketTrendDataInterface {
  Icon: string;
  Coin: string;
  Value: string;
  Percentage: string;
  Sort: string;
}

const MarketTrendData: MarketTrendDataInterface[] = [
  {
    Icon: "./Icons/Bitcoin.svg",
    Sort: "BTC",
    Coin: "BITCOIN",
    Percentage: "1.41%",
    Value: "$56,623.54",
  },
  {
    Icon: "./Icons/Ethereum.svg",
    Sort: "ETH",
    Coin: "ETHEREUM",
    Percentage: "2.22%",
    Value: "$4,267.90",
  },
  {
    Icon: "./Icons/Binance.svg",
    Sort: "BNB",
    Coin: "BINANCE",
    Percentage: "0.82%",
    Value: "$587.74",
  },
  {
    Icon: "./Icons/Tether.svg",
    Sort: "USDT",
    Coin: "TETHER",
    Percentage: "0.03%",
    Value: "$0.9998",
  },
];

interface FeatureInterface {
  Header: string;
  Content: string;
}

const FeatureData: FeatureInterface[] = [
  {
    Header: "Manage Portfolio",
    Content:
      "Buy and sell popular digital currencies,keep track of them in the one place.",
  },
  {
    Header: "Protected Securely",
    Content:
      "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
  },
  {
    Header: "Cryptocurrency Variety",
    Content:
      "Supports a variety of the most popular digital curriencies and always up to date.",
  },
  {
    Header: "Learn Best Practice",
    Content: "Easy to know how to cryptocurrency works and friendly to newbie",
  },
];

type NAME_DATA = {
  IMG_SRC: string;
  ICON_NAME: string;
  SORT_NAME: string;
};
type MARKET_DATA = {
  label: string;
  uv: number;
};

type TabsType = Partial<{
  POPULAR: boolean;
  METAVERSE: boolean;
  ENTERTAINMENT: boolean;
  ENERGY: boolean;
  GAMING: boolean;
  MUSIC: boolean;
}>;

export type Person = {
  NO: number;
  NAME: NAME_DATA;
  LAST_PRICE: string;
  CHANGE: string;
  MARKET_STATS: MARKET_DATA[];
  TRADE: string;
  CATEGORY?: TabsType;
};

const defaultData: Person[] = [
  {
    NO: 1,
    NAME: {
      IMG_SRC: "./Icons/Bitcoin.svg",
      ICON_NAME: "Bitcoin",
      SORT_NAME: "BTC",
    },
    LAST_PRICE: "$56,623.54",
    CHANGE: "1.41%",
    MARKET_STATS: [
      {
        label: "Page A",
        uv: 1000,
      },
      {
        label: "Page B",
        uv: 1500,
      },
      {
        label: "Page C",
        uv: 1800,
      },
      {
        label: "Page D",
        uv: 9780,
      },
      {
        label: "Page E",
        uv: 7890,
      },
      {
        label: "Page F",
        uv: 6390,
      },
      {
        label: "Page G",
        uv: 8490,
      },
    ],
    TRADE: "trade",
  },
  {
    NO: 2,
    NAME: {
      IMG_SRC: "./Icons/Ethereum.svg",
      ICON_NAME: "Ethereum",
      SORT_NAME: "ETH",
    },
    LAST_PRICE: "$56,623.54",
    CHANGE: "1.41%",
    MARKET_STATS: [
      {
        label: "Page A",
        uv: 1000,
      },
      {
        label: "Page B",
        uv: 1500,
      },
      {
        label: "Page C",
        uv: 1800,
      },
      {
        label: "Page D",
        uv: 9780,
      },
      {
        label: "Page E",
        uv: 7890,
      },
      {
        label: "Page F",
        uv: 6390,
      },
      {
        label: "Page G",
        uv: 8490,
      },
    ],
    TRADE: "trade",
  },
  {
    NO: 3,
    NAME: {
      IMG_SRC: "./Icons/Binance.svg",
      ICON_NAME: "Binance",
      SORT_NAME: "BNB",
    },
    LAST_PRICE: "$56,623.54",
    CHANGE: "1.41%",
    MARKET_STATS: [
      {
        label: "Page A",
        uv: 1000,
      },
      {
        label: "Page B",
        uv: 1500,
      },
      {
        label: "Page C",
        uv: 1800,
      },
      {
        label: "Page D",
        uv: 9780,
      },
      {
        label: "Page E",
        uv: 7890,
      },
      {
        label: "Page F",
        uv: 6390,
      },
      {
        label: "Page G",
        uv: 8490,
      },
    ],
    TRADE: "trade",
  },
  {
    NO: 4,
    NAME: {
      IMG_SRC: "./Icons/Tether.svg",
      ICON_NAME: "Tether",
      SORT_NAME: "USDT",
    },
    LAST_PRICE: "$56,623.54",
    CHANGE: "1.41%",
    MARKET_STATS: [
      {
        label: "Page A",
        uv: 1000,
      },
      {
        label: "Page B",
        uv: 1500,
      },
      {
        label: "Page C",
        uv: 1800,
      },
      {
        label: "Page D",
        uv: 9780,
      },
      {
        label: "Page E",
        uv: 7890,
      },
      {
        label: "Page F",
        uv: 6390,
      },
      {
        label: "Page G",
        uv: 8490,
      },
    ],
    TRADE: "trade",
  },
  {
    NO: 5,
    NAME: {
      IMG_SRC: "./Icons/Solana.svg",
      ICON_NAME: "Solana",
      SORT_NAME: "SOL",
    },
    LAST_PRICE: "$56,623.54",
    CHANGE: "1.41%",
    MARKET_STATS: [
      {
        label: "Page A",
        uv: 1000,
      },
      {
        label: "Page B",
        uv: 1500,
      },
      {
        label: "Page C",
        uv: 1800,
      },
      {
        label: "Page D",
        uv: 9780,
      },
      {
        label: "Page E",
        uv: 7890,
      },
      {
        label: "Page F",
        uv: 6390,
      },
      {
        label: "Page G",
        uv: 8490,
      },
    ],
    TRADE: "trade",
  },
  {
    NO: 6,
    NAME: {
      IMG_SRC: "./Icons/XRP.svg",
      ICON_NAME: "XRP",
      SORT_NAME: "XRP",
    },
    LAST_PRICE: "$56,623.54",
    CHANGE: "1.41%",
    MARKET_STATS: [
      {
        label: "Page A",
        uv: 1000,
      },
      {
        label: "Page B",
        uv: 1500,
      },
      {
        label: "Page C",
        uv: 1800,
      },
      {
        label: "Page D",
        uv: 9780,
      },
      {
        label: "Page E",
        uv: 7890,
      },
      {
        label: "Page F",
        uv: 6390,
      },
      {
        label: "Page G",
        uv: 8490,
      },
    ],
    TRADE: "trade",
  },
  {
    NO: 7,
    NAME: {
      IMG_SRC: "./Icons/USDCoin.svg",
      ICON_NAME: "USD Coin",
      SORT_NAME: "USDC",
    },
    LAST_PRICE: "$56,623.54",
    CHANGE: "1.41%",
    MARKET_STATS: [
      {
        label: "Page A",
        uv: 1000,
      },
      {
        label: "Page B",
        uv: 1500,
      },
      {
        label: "Page C",
        uv: 1800,
      },
      {
        label: "Page D",
        uv: 9780,
      },
      {
        label: "Page E",
        uv: 7890,
      },
      {
        label: "Page F",
        uv: 6390,
      },
      {
        label: "Page G",
        uv: 8490,
      },
    ],
    TRADE: "trade",
  },
];

enum CardTag {
  GREEN = "CRYPTO BASIC",
  PURPLE = "TIPS & TRICKS",
}

interface CardDataInterface {
  TAG: CardTag;
  Heading: string;
  CONTENT: string;
  IMG: string;
}

const GridData: CardDataInterface[] = [
  {
    TAG: CardTag.GREEN,
    Heading: "What is cryptocurrency? all you need to know",
    CONTENT:
      "Cryptocurrencies are basically digital assets. It is secured by cryptography...",
    IMG: "coin.jpg",
  },
  {
    TAG: CardTag.GREEN,
    Heading: "Can crypto really replace your bank button",
    CONTENT:
      " From direct deposit to earning yield,key ways crypto can help you take control",
    IMG: "banking.jpg",
  },
  {
    TAG: CardTag.PURPLE,
    Heading: "How to setup crypto wallet in your account",
    CONTENT:
      "A crypto wallet is a place where you can securely keep your crypto...",
    IMG: "coin.jpg",
  },
  {
    TAG: CardTag.GREEN,
    Heading: "The fact about bitcoin must you know",
    CONTENT:
      " Bitcoin is the world's first widelky adopted cryptocurrency, it allows for secure...",
    IMG: "gamble.jpg",
  },
  {
    TAG: CardTag.PURPLE,
    Heading: "When is the best time to invest in crypto?",
    CONTENT: " when prices are fluctuating ,how do you know when to buy?",
    IMG: "phone.jfif",
  },
  {
    TAG: CardTag.PURPLE,
    Heading: "What Is DeFi? Inside the Wild West of Cryptocurrency",
    CONTENT:
      "welcome to decentralized finance or DeFi, the new frontier of crypto that will...",
    IMG: "money.jpg",
  },
];

export {
  MarketStaticData,
  MarketTrendData,
  FeatureData,
  defaultData,
  GridData,
  CardTag,
};
