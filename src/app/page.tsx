"use client"
import { Input } from "@/components/ui/input"
import jedzenie from "../assets/jedzenie.jpg"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image";
import { lazy, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  /*style={{background: /*`url(${lazy(() => import('../assets/jedzenie.jpg'))})`}}*/
  const [address, setAddress] = useState<string>()
  return (
    <>
      <Card className="mx-10 mt-5 p-10 food-image bg-center bg-cover">
        <CardHeader>
          <div className="bg-white rounded w-[25%] mx-auto p-2">
            <CardTitle className="text-center text-4xl">Witaj na FoodFast</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center text-xl bg-white rounded w-[25%] mx-auto p-2">By rozpocząć zamówienie podaj adres ulicy</p>
          <div className="flex w-[25%] flex-row items-center mt-5 mx-auto">
            <Input type="search" placeholder="Podaj nazwę ulicy" onChange={(e) => setAddress(e.target.value)}/>
            {address && (
              <Button asChild>
                <Link href={`/order/${address}`}>Szukaj</Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>     
    </>
  )
}
