const stats = [
  { label: "Active users", value: "1,248", delta: "+12% vs last week" },
  { label: "Projects shipped", value: "32", delta: "4 in progress" },
  { label: "Avg. response time", value: "420 ms", delta: "-30 ms" },
  { label: "Budget used", value: "$18.2k", delta: "72% of quarterly" },
];

const updates = [
  {
    title: "Marketing campaign dashboard",
    status: "deployed",
    detail: "New channels added to the KPI mix and the UI is live for stakeholders",
  },
  {
    title: "User onboarding experiment",
    status: "ready",
    detail: "Tracking scripts are live; waiting on qualitative feedback",
  },
  {
    title: "Operational alerts",
    status: "monitoring",
    detail: "Latency spikes have normalized; continuing observation",
  },
];

const alerts = [
  "Payments queue is still processing a backlog of 42 items",
  "Remember to rotate credentials for the reporting database this week",
  "Next QA sweep scheduled for Friday 11:00 AM",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <header className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800/60 p-6 shadow-lg shadow-slate-900/60">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Weekly pulse</p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Dummy Dashboard
              </h1>
              <p className="text-sm text-slate-400">
                Quick snapshot of how the product line is performing right now.
              </p>
            </div>
            <div className="rounded-full border border-white/20 px-3 py-1 text-xs text-emerald-300">
              07:21 AM • <span className="font-medium text-white">Sync complete</span>
            </div>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-white/5 bg-white/5 px-5 py-6 shadow-xl shadow-slate-900/40 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.delta}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800/60 p-6 shadow-lg shadow-black/70">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">Operational insights</h2>
                <p className="text-sm text-slate-300">Response time, conversions, and pipeline health.</p>
              </div>
              <button className="rounded-full border border-slate-700 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
                Export
              </button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Conversion rate</p>
                <p className="text-2xl font-semibold text-emerald-300">18.3%</p>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-emerald-400" style={{ width: "73%" }}></div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Customer happiness</p>
                <p className="text-2xl font-semibold text-blue-300">4.8/5</p>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-blue-400" style={{ width: "96%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Average latency</p>
                <p className="text-2xl font-semibold text-yellow-300">420 ms</p>
                <p className="text-xs text-slate-500">-30 ms vs yesterday</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Errors per min</p>
                <p className="text-2xl font-semibold text-rose-300">2.1</p>
                <p className="text-xs text-slate-500">Steady for 3 hours</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/60">
              <h3 className="text-sm uppercase tracking-[0.4em] text-slate-400">Activity log</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {updates.map((update) => (
                  <li key={update.title} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white">{update.title}</p>
                      <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-slate-400">
                        {update.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{update.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-5">
              <h3 className="text-lg font-semibold text-amber-200">Alerts</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-amber-100">
                {alerts.map((alert) => (
                  <li key={alert}>{alert}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
