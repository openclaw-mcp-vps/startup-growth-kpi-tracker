export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Growth
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Track Startup KPIs with{" "}
          <span className="text-[#58a6ff]">Automated Data Collection</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect Stripe, Google Analytics, and your databases to auto-track MRR, CAC, and churn.
          Get real-time alerts and generate investor-ready reports in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Start Tracking — $49/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for trial</span>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "MRR Tracked", value: "$2.4M+" },
            { label: "Startups Using", value: "340+" },
            { label: "Data Sources", value: "12+" },
            { label: "Alerts Sent", value: "18K+" }
          ].map((stat) => (
            <div key={stat.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat.value}</div>
              <div className="text-sm text-[#8b949e] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Auto-Sync Stripe", desc: "Pull MRR, churn, and LTV directly from Stripe with zero manual entry." },
            { title: "Google Analytics", desc: "Track CAC, conversion funnels, and traffic sources in one dashboard." },
            { title: "Investor Reports", desc: "One-click PDF reports formatted for investor updates and board decks." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Growth Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to track and grow</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited KPI dashboards",
              "Stripe + GA + DB integrations",
              "Real-time alerts & notifications",
              "Automated investor reports",
              "Team collaboration (5 seats)",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which data sources can I connect?",
              a: "You can connect Stripe for revenue metrics, Google Analytics for traffic and conversion data, and any PostgreSQL, MySQL, or MongoDB database via secure read-only credentials."
            },
            {
              q: "How are alerts configured?",
              a: "Set threshold-based alerts for any KPI — e.g., churn above 5% or MRR drops more than 10%. Alerts are delivered via email, Slack, or webhook."
            },
            {
              q: "Can I share reports with investors?",
              a: "Yes. Generate branded PDF or shareable link reports with one click. Reports include MRR growth, CAC trends, churn analysis, and runway projections."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} KPI Tracker. All rights reserved.
      </footer>
    </main>
  );
}
