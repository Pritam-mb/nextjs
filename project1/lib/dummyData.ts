import { TrendingCoin } from '@/types';

export const dummyTrendingCoins: TrendingCoin[] = [
  {
    item: {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      market_cap_rank: 1,
      thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png',
      large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      data: {
        price: 89113.25,
        price_change_percentage_24h: {
          usd: 3.45,
        },
      },
    },
  },
  {
    item: {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      market_cap_rank: 2,
      thumb: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png',
      large: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      data: {
        price: 3382.1,
        price_change_percentage_24h: {
          usd: -1.15,
        },
      },
    },
  },
  {
    item: {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      market_cap_rank: 3,
      thumb: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png',
      large: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
      data: {
        price: 212.45,
        price_change_percentage_24h: {
          usd: 7.82,
        },
      },
    },
  },
  {
    item: {
      id: 'binancecoin',
      name: 'BNB',
      symbol: 'BNB',
      market_cap_rank: 4,
      thumb: 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png',
      large: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
      data: {
        price: 635.8,
        price_change_percentage_24h: {
          usd: 0.65,
        },
      },
    },
  },
  {
    item: {
      id: 'ripple',
      name: 'XRP',
      symbol: 'XRP',
      market_cap_rank: 5,
      thumb: 'https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png',
      large: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
      data: {
        price: 0.624,
        price_change_percentage_24h: {
          usd: -2.31,
        },
      },
    },
  },
  {
    item: {
      id: 'dogecoin',
      name: 'Dogecoin',
      symbol: 'DOGE',
      market_cap_rank: 8,
      thumb: 'https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png',
      large: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
      data: {
        price: 0.165,
        price_change_percentage_24h: {
          usd: 12.4,
        },
      },
    },
  },
  {
    item: {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      market_cap_rank: 9,
      thumb: 'https://assets.coingecko.com/coins/images/975/thumb/cardano.png',
      large: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
      data: {
        price: 0.485,
        price_change_percentage_24h: {
          usd: 5.12,
        },
      },
    },
  },
  {
    item: {
      id: 'avalanche-2',
      name: 'Avalanche',
      symbol: 'AVAX',
      market_cap_rank: 12,
      thumb: 'https://assets.coingecko.com/coins/images/12559/thumb/Avalanche_Circle_RedWhite_Trans.png',
      large: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png',
      data: {
        price: 34.75,
        price_change_percentage_24h: {
          usd: -0.85,
        },
      },
    },
  },
];
