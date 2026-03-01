"use client";

import { formatAddress } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SiEthereum } from "react-icons/si";

interface TransactionProps {
  receiver: string;
  sender: string;
  message: string;
  keyword: string;
  timestamp: string;
  amount: string;
}

const TransactionCard = ({
  receiver,
  sender,
  message,
  keyword,
  timestamp,
  amount,
}: TransactionProps) => {
  const [gifUrl, setGifUrl] = useState("");

  useEffect(() => {
    async function fetchGif() {
      const cached = localStorage.getItem(`gif_${keyword}`);
      if (cached) {
        setGifUrl(cached);
        return;
      }

      try {
        const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(
            keyword
          )}&limit=1`
        );
        const data = await res.json();
        const url = data?.data?.[0]?.images?.downsized_medium?.url || "";

        if (url) {
          localStorage.setItem(`gif_${keyword}`, url);
          setGifUrl(url);
        }
      } catch (error) {
        console.error("Giphy error:", error);
      }
    }

    if (keyword) fetchGif();
  }, [keyword]);

  return (
    <div className="glass-dark p-6 rounded-[2rem] border border-white/5 hover:border-primary/40 transition-all group cursor-default w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <SiEthereum className="text-primary" size={16} />
        </div>
        <span className="text-[10px] font-bold text-slate-600 uppercase">{timestamp}</span>
      </div>

      {/* Sender & Amount */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
          <span className="text-slate-600">Sender</span>
          <Link
            href={`https://sepolia.etherscan.io/address/${sender}`}
            target="_blank"
            className="font-mono text-slate-300 hover:underline"
          >
            {formatAddress(sender)}
          </Link>
        </div>
        <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
          <span className="text-slate-600">Value</span>
          <span className="text-primary">{Number(amount)} ETH</span>
        </div>
      </div>

      {/* GIF Image */}
      {gifUrl && (
        <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 bg-slate-900">
          <Image
            src={gifUrl}
            alt={keyword}
            width={600}
            height={600}
            unoptimized={true}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
          />
          {message && (
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black to-transparent">
              <p className="text-xs font-semibold text-white">"{message}"</p>
            </div>
          )}
        </div>
      )}

      {/* Message fallback when no gif */}
      {!gifUrl && message && (
        <p className="text-slate-300 text-sm mb-4 border-l-4 border-primary pl-3 italic">
          "{message}"
        </p>
      )}

      {/* Keyword tag */}
      <div className="flex items-center gap-1 text-[10px] text-primary font-black uppercase tracking-widest">
        <span className="text-xs">#</span> {keyword}
      </div>
    </div>
  );
};

export default TransactionCard;
