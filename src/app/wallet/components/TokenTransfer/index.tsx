"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import React from "react";

export default function TokenTransfer() {
  return (
    <Card className="w-3/5 max-w-2xl min-w-80">
      <CardHeader>
        <CardTitle>Transfer Tokens</CardTitle>
        <CardDescription>Effortless Transfer Your Assets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-2 mb-4">
          <Label>Recipient Address</Label>
          <Input placeholder="Solana Wallet Address" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Token</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solana">SOL</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Transfer</Button>
      </CardFooter>
    </Card>
  );
}
