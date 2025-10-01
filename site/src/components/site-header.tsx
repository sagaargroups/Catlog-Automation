"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/config/nav";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white text-black dark:border-white/10 dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold">Catalog Automation</span>
          <span className="rounded border px-2 py-0.5 text-xs">Made in India</span>
        </div>

        <nav className="hidden gap-2 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "rounded px-2 py-1 text-sm transition-colors " +
                  (active
                    ? "underline underline-offset-4"
                    : "hover:bg-black/5 dark:hover:bg-white/10")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="More">
                ⋮
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {NAV_ITEMS.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" variant="outline" size="icon" aria-label="Menu">
                ☰
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-medium">Menu</span>
                <Separator />
                {NAV_ITEMS.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded px-2 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


