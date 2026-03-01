"use client";

import TransactionCard from "./TransactionCard";
import { useWalletStore } from "../store/UseWalletStore";
import { getAllTransactions } from "@/utils/Transaction";
import { useEffect, useState } from "react";

interface Transaction {
  receiver: string;
  sender: string;
  message: string;
  keyword: string;
  timestamp: string;
  amount: string;
}

const Transactions = () => {
  const { account } = useWalletStore();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const fetchTransactions = async () => {
    if(!account) return;
    const transactions = await getAllTransactions();
    setTransactions(transactions || []);
  };

  useEffect(() => {
    fetchTransactions();
  }, [account]);
  return (
    <>
      {account && (
        <div className="w-full bg-[#121212] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12 border-l-4 border-primary pl-6">
              <div className="space-y-1">
                <h2 className="text-4xl font-extrabold tracking-tight text-white uppercase italic">Live Feed</h2>
                <p className="text-slate-500 font-medium">Real-time pulse of the Crimson network</p>
              </div>
            </div>

            <div
              className="grid gap-6
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
              place-items-center"
            >
              {[...transactions]
                .reverse()
                .slice(0, visibleCount)
                .map((transaction, i) => (
                  <TransactionCard key={i} {...transaction} />
                ))}
            </div>

            {visibleCount < transactions.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-red-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 uppercase tracking-wider text-sm cursor-pointer"
                >
                  Access Archives →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
