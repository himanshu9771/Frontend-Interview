export default function Practice() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* HERO */}
      <section className="px-6 py-16 bg-gradient-to-r from-indigo-600/20 to-violet-600/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Practice & Mock Tests
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Strengthen your preparation with curated practice tests,
            mock exams, and performance insights.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            {
              title: "CA Foundation Mocks",
              desc: "Exam-level mock tests with detailed solutions.",
            },
            {
              title: "CA Intermediate Practice",
              desc: "Subject-wise questions to boost confidence.",
            },
            {
              title: "Final Revision Tests",
              desc: "Timed tests designed for final exam revision.",
            },
            {
              title: "Performance Analytics",
              desc: "Track accuracy, speed, and improvement areas.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/60 transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
