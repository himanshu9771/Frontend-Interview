export default function Events() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* HERO */}
      <section className="px-6 py-16 bg-gradient-to-r from-indigo-600/20 to-violet-600/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Events & Webinars
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Learn from industry experts through live webinars,
            workshops, and professional events.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-6">

          {[
            {
              title: "Future of FinTech",
              date: "12 Oct 2024",
              img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
            },
            {
              title: "GST & Compliance Update",
              date: "22 Oct 2024",
              img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
            },
          ].map((event) => (
            <div
              key={event.title}
              className="flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
            >
              <img
                src={event.img}
                className="md:w-64 h-48 object-cover"
                alt={event.title}
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl">
                  {event.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {event.date}
                </p>
                <p className="text-slate-300 text-sm mt-3">
                  Join our expert-led session to gain practical insights
                  and real-world knowledge.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
