"use client";

import Students from "@/components/Students";

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-20 row-start-2 items-center">
        <Students />
      </main>
    </div>
  );
}
