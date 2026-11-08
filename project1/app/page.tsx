import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Datatable, ColumnDef } from '@/components/Datatable';
import {DataTableColumn, DataTableProps} from '@/types';
import { TrendingUp } from 'lucide-react';
interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}
const columns:DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      return (
        <Link
          href={`/coins/${item.id}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src={item.large}
            alt={item.name}
            width={32}
            height={32}
            className="rounded-full inline-block"
          />
          <span className="font-semibold text-white">
            {item.name}{' '}
            <span className="text-purple-100/70 text-xs">
              ({item.symbol.toUpperCase()})
            </span>
          </span>
        </Link>
      );
    },
  },
  {
    header: 'Price (BTC)',
    cell: (coin) => {
      const item = coin.item;
      const changeUsd = item.data?.price_change_percentage_24h?.usd ?? 0;
      const isTrendingUp = changeUsd >= 0;

      return (
        <div className="flex items-center gap-2.5">
          <span className="font-medium text-white">
          {isTrendingUp ? (
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <TrendingUp className="w-3.5 h-3.5 text-rose-400 rotate-180" />
        )}
            ${item.data?.price.toFixed(2)}
          </span>
         
        </div>
      );
    },
  },
    
          
        
];

function page() {
  return (
    <main className="main-container">
      <section className="home-grid">
        {/* Coin Overview Hero Card */}
        <div id="coin-overview" className="p-4 sm:p-6">
          <div className="header pt-2 flex items-center gap-4">
            <Image
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              alt="Bitcoin"
              width={56}
              height={56}
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <div className="info">
              <p className="text-purple-100 text-sm font-medium">
                Bitcoin (BTC)
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-0.5">
                $89,113
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Coins Table Section */}
      <section className="mt-8 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Trending Coins</h2>
          <span className="text-xs text-purple-100/70">Powered by CoinGecko</span>
        </div>
        <div className="trending-coins-table rounded-xl overflow-hidden border border-dark-400/40">
          <Datatable columns={columns} data={sampleTrending} />
        </div>
      </section>
    </main>
  );
}

export default page;
