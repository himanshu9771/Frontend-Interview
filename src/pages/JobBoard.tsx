export default function JobBoard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* HERO */}
      <section className="px-6 py-16 bg-gradient-to-r from-indigo-600/20 to-violet-600/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Job Board
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Explore curated opportunities in accounting, finance,
            audit, taxation, and consulting.
          </p>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-4">

          {[
            "Audit Associate – Big 4 Firm",
            "Tax Consultant – CA Firm",
            "Financial Analyst – FinTech Startup",
            "Accounts Executive – MNC",
          ].map((job) => (
            <div
              key={job}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/60 transition"
            >
              <h3 className="font-semibold text-lg">{job}</h3>
              <p className="text-slate-400 text-sm mt-1">
                Location: India · Experience: 0–3 Years
              </p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
