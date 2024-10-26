"use client";

import { getProvider } from "@/blockchain/wallet-connect";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WalletIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface IHeaderProps {
  navigationOptions: {
    text: string;
    to: string;
  }[];
}

export default function Header({ navigationOptions }: IHeaderProps) {
  const onConnectWallet = async () => {
    const provider = getProvider();
    console.log("provider", provider);
    if (!provider) {
      window.open("https://phantom.app/", "_blank");
      return;
    }
    await provider?.connect();
  };

  const renderDropdownMenu = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <WalletIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onConnectWallet}>
            Connect Wallet
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <div className="flex items-center justify-between px-5">
      <nav className="flex flex-row items-center">
        <p className="font-bold text-3xl mr-6 text-amber-400">toy story</p>
        <ul className="flex justify-center py-7">
          {navigationOptions.map(({ to, text }, index: number) => {
            const isActive = index === 0;
            return (
              <li
                key={text}
                className={`${isActive ? "border-b-2" : undefined}`}
              >
                <Link href={to}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {renderDropdownMenu()}
    </div>
  );
}
