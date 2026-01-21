import { useState } from "react";
import BlogLists from "@/components/bloglist";
import BlogDetail from "@/components/blogdetail";
import HeroBlogSlider from "@/components/HeroBlogSlider";

export default function BlogPage() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* HERO */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <HeroBlogSlider />
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 pb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BLOG LIST */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 md:h-[75vh] overflow-y-auto">
            <BlogLists onSelect={setSelectedBlogId} />
          </div>

          {/* BLOG DETAIL */}
          <div className="md:col-span-2 rounded-xl border border-slate-800 bg-slate-900/40 p-6 md:h-[75vh] overflow-y-auto">
            {selectedBlogId ? (
              <BlogDetail blogId={selectedBlogId} />
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                Select a blog to start reading
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
