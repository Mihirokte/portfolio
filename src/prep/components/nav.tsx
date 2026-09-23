const HOME = import.meta.env.VITE_HOME_URL ?? import.meta.env.BASE_URL

export function TopBar() {
  return (
    <header className="flex items-baseline justify-between gap-6 pb-4 mb-12 border-b border-foreground">
      <a href="#/" className="text-[0.9375rem] font-medium uppercase tracking-[0.16em] no-underline">
        prep
      </a>
      <span className="ml-auto mr-6 hidden sm:flex gap-[3px]" aria-hidden="true">
        <kbd className="font-mono text-[0.6875rem] leading-none px-[5px] py-1 text-muted-foreground border border-border">⌘</kbd>
        <kbd className="font-mono text-[0.6875rem] leading-none px-[5px] py-1 text-muted-foreground border border-border">K</kbd>
      </span>
      <a href={HOME} className="text-sm text-muted-foreground no-underline hover:text-brand">
        site
      </a>
    </header>
  )
}

export function NotFound() {
  return (
    <div className="max-w-3xl">
      <h1>Not found</h1>
      <a href="#/" className="text-sm text-muted-foreground no-underline hover:text-brand">
        Home
      </a>
    </div>
  )
}

/** Back link used at the top of detail pages. */
export function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-block mb-8 text-sm text-muted-foreground no-underline hover:text-brand">
      {children}
    </a>
  )
}
