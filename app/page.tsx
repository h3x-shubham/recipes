// "use client";
import List from "@/components/List";
import Image from "next/image";
import { NextRequest } from "next/server";

type prop = {
  count: number;
  results: string[];
};
type food = {
  name:string;
};
export async function getrecipes() {
  try {
    const recipes = await fetch("http://localhost:3000/api/recipes");
    // const rec: prop = recipes;
    const dat: prop = await recipes.json();
    const res = dat.results;
    // console.log("hello",dat.results);
    return res;
  } catch (error) {
    console.log("Failed to fetch data");
  }
}

export default async function Home() {
  const items = await getrecipes();
  // console.log(recipe)
  const ar = ["item1", "item2", "item3", "item4", "Item5", "Item6", "Item7"];
  return (
    <div className="bg-[#fdf2cc] text-[#03383f] flex min-h-screen flex-col items-center justify-between p-24 ">
      <List items={items} />
    </div>
  );
}
