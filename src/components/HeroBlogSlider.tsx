import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBlogs } from "@/hooks/useblogs";

export default function HeroBlogSlider() {
  const { data: blogs, isLoading } = useBlogs();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!blogs || blogs.length === 0) return;
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % blogs.length),
      4000
    );
    return () => clearInterval(interval);
  }, [blogs]);

  if (isLoading || !blogs?.length) return null;

  const blog = blogs[index];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-violet-600/20 p-8 md:p-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-xs md:text-sm text-indigo-300 uppercase tracking-wide">
            {blog.category.join(", ")}
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-slate-100">
            {blog.title}
          </h2>

          <p className="max-w-2xl text-sm md:text-base text-slate-300">
            {blog.description}
          </p>

          <p className="text-xs text-slate-400">
            {new Date(blog.date).toDateString()}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
