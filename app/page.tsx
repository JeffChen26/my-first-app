"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function NotAScam() {

  const randomNumber = Math.random();

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Free ETH</CardTitle>
        <CardDescription>Get free $$$ in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Wallet Address</Label>
              <Input id="name" placeholder="what are you waiting for?" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="w-full">
      <Button
      variant="secondary"
      onClick={() =>
        toast("Received " + randomNumber + " ETH from Jeff", {
          description: "Click to view: ",
          action: {
            label: "View",
            onClick: () => window.open("https://www.youtube.com/watch?v=Z3J_MCbwaJ0&ab_channel=K%C3%BCrstOtonoye", "_blank"),
          },
        })
      }
    >
      Receive ETH
    </Button>
      </CardFooter>
    </Card>
    </div>
    
  )
}