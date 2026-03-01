"use client";

import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Input, Loader } from "@/components/index";
import { useTransferStore } from "@/store/useTransferStore";
import { useWalletStore } from "@/store/UseWalletStore";
import { formatAddress } from "@/utils/utils";
import { useEffect} from "react";
import {
  checkIfWalletConnected,
  connectWallet,
  sendTransaction,
  disconnectWallet,
  checkNetwork,
} from "@/utils/Transaction";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import { showErrorToast } from "@/utils/utils";

const Welcome = () => {
  const {
    recipient,
    amount,
    keyword,
    message,
    isLoading,
    setRecipient,
    setAmount,
    setKeyword,
    setMessage,
  } = useTransferStore();

  const { account } = useWalletStore();

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const handleSubmit = async () => {
    const isValid = !recipient || !amount || !keyword || !message;
    if (isValid) return showErrorToast("Please fill all the fields");
    await sendTransaction();
  };

  return (
    <div className="min-h-screen hero-gradient bg-[#121212] flex justify-center items-center px-6 lg:px-20 pt-32 pb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-16">
        {/* Left side - Hero text */}
        <div className="flex flex-1 flex-col items-start space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Pro Web3 Social Protocol
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            Send Crypto <br />
            <span className="crimson-to-white">with Personality.</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
            Experience the next evolution of Ethereum transactions on Noted. Express yourself with custom GIF messages and personalized metadata on every transfer. Bold. Professional. Distinct.
          </p>

          {!account ? (
            <button
              type="button"
              onClick={connectWallet}
              className="px-6 py-2.5 bg-primary text-white rounded-full font-bold hover:bg-red-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              <AiFillPlayCircle className="text-xl" />
              Connect Wallet
            </button>
          ) : (
            <button
              type="button"
              onClick={disconnectWallet}
              className="px-6 py-2.5 bg-primary text-white rounded-full font-bold hover:bg-red-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              <MdLogout className="text-xl" />
              Disconnect ({formatAddress(account)})
            </button>
          )}

          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <div className="text-[10px] text-slate-500 mb-1 uppercase tracking-widest font-bold">Reliability</div>
              <div className="text-lg font-bold text-white">99.99%</div>
            </div>
            <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <div className="text-[10px] text-slate-500 mb-1 uppercase tracking-widest font-bold">Network</div>
              <div className="text-lg font-bold text-white">Sepolia</div>
            </div>
            <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <div className="text-[10px] text-slate-500 mb-1 uppercase tracking-widest font-bold">Gas Flow</div>
              <div className="text-lg font-bold text-white">Optimized</div>
            </div>
          </div>
        </div>

        {/* Right side - Wallet card + Form */}
        <div className="flex flex-col flex-1 items-center justify-start w-full relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-crimson-deep rounded-[2rem] blur-xl opacity-20"></div>
          <div className="relative glass-dark p-8 rounded-[2rem] shadow-2xl space-y-6 w-full sm:w-96">
            {/* Wallet header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-crimson-deep flex items-center justify-center">
                  <SiEthereum size={20} color="#fff" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Wallet</p>
                  {account ? (
                    <Link
                      href={`https://etherscan.io/address/${account}`}
                      target="_blank"
                    >
                      <p className="font-mono text-sm text-slate-200 cursor-pointer hover:underline">
                        {formatAddress(account)}
                      </p>
                    </Link>
                  ) : (
                    <p className="font-mono text-sm text-slate-600">Not connected</p>
                  )}
                </div>
              </div>
              <BsInfoCircle size={18} className="text-slate-500" />
            </div>

            {/* Form inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Recipient Address</label>
                <Input
                  placeholder="0x..."
                  name="addressTo"
                  type="text"
                  handleChange={(e) => setRecipient(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Amount (ETH)</label>
                  <Input
                    placeholder="0.00"
                    name="amount"
                    type="number"
                    handleChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">GIF Keyword</label>
                  <Input
                    placeholder="e.g. speed"
                    name="keyword"
                    type="text"
                    handleChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Personal Message</label>
                <Input
                  placeholder="Enter transaction note..."
                  name="message"
                  type="text"
                  handleChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!account}
                className={`w-full py-5 text-white rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${
                  account
                    ? "bg-primary hover:bg-red-600 shadow-primary/20 active:scale-[0.98] cursor-pointer"
                    : "bg-slate-700 cursor-not-allowed opacity-50"
                }`}
              >
                Execute Transaction
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
