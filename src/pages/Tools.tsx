export default function Tools() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* HERO */}
      <section className="px-6 py-16 bg-gradient-to-r from-indigo-600/20 to-violet-600/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Financial & Accounting Tools
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Smart tools designed to simplify accounting, taxation,
            compliance, and financial planning for professionals.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "GST Calculator",
              desc: "Quickly calculate GST, margins, and tax liabilities.",
              img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
            },
            {
              title: "Income Tax Planner",
              desc: "Plan taxes efficiently and optimize deductions.",
              img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
            },
            {
              title: "Compliance Checklist",
              desc: "Never miss deadlines with automated reminders.",
              img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
            },
          ].map((tool) => (
            <div
              key={tool.title}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/60 transition"
            >
              <img
                src={tool.img}
                className="h-40 w-full object-cover"
                alt={tool.title}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{tool.title}</h3>
                <p className="text-sm text-slate-400">{tool.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
