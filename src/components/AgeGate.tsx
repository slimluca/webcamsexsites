"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "wss_age_ok";

export default function AgeGate() {
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(true);

  useEffect(() => {
    try {
      const ok = localStorage.getItem(STORAGE_KEY) === "1";
      setAllowed(ok);
    } catch {
      setAllowed(false);
    }
    setReady(true);
  }, []);

  function enter() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setAllowed(true);
  }

  function leave() {
    window.location.href = "https://www.google.com";
  }

  if (!ready || allowed) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="w-full max-w-md rounded-2xl border border-card-border bg-card p-8 text-center shadow-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          18+ Only
        </p>
        <h2 id="age-gate-title" className="mb-3 text-2xl font-bold">
          Adult Content Warning
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted">
          This website contains adult sexual content intended only for adults.
          By entering you confirm you are at least 18 years old (or the age of
          majority where you live) and agree to our terms.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={enter}
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            I am 18 or older — Enter
          </button>
          <button
            type="button"
            onClick={leave}
            className="rounded-xl border border-card-border px-6 py-3 text-sm font-semibold text-muted transition hover:border-zinc-500 hover:text-foreground"
          >
            Exit
          </button>
        </div>
        <p className="mt-6 text-xs text-muted">
          Affiliate disclosure: we may earn commissions from links on this site.
        </p>
      </div>
    </div>
  );
}
