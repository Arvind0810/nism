"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ExamTab {
  href: string;
  label: string;
}

export default function ExamTabs({ tabs }: { tabs: ExamTab[] }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Exam sections" className="-mb-px flex gap-1 overflow-x-auto text-sm">
      {tabs.map((tab, index) => {
        const isOverview = index === 0;
        const isActive = isOverview ? pathname === tab.href : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={`whitespace-nowrap border-b-2 px-3 py-2.5 transition-colors ${
              isActive
                ? "border-accent font-medium text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
