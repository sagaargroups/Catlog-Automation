import Link from "next/link";
import { NAV_ITEMS } from "@/config/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white text-black dark:border-white/10 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="text-2xl font-semibold">Catalog Automation</div>
        <p className="opacity-70">by cloudfetch.tech</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm underline-offset-4 hover:underline">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 text-sm opacity-60">© {new Date().getFullYear()} cloudfetch.tech</div>
      </div>
    </footer>
  );
}


