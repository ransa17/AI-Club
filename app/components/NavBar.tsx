"use client";

import * as React from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
          AI Verse
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="hidden sm:flex space-x-6">
            <NavigationMenuItem>
              <Link href="#about" className="hover:text-indigo-600 transition-colors">About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#events" className="hover:text-indigo-600 transition-colors">Events</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#join" className="hover:text-indigo-600 transition-colors">Join</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button asChild variant="default" className="ml-4 hidden sm:flex">
          <Link href="#join">Join Now</Link>
        </Button>
      </div>
    </nav>
  );
}
