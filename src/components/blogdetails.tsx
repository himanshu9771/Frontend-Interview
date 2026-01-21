import type { Blog } from "@/types/blog";
import { Card } from "@/components/ui/card";

export default function BlogCard({
  blog,
  onClick,
}: {
  blog: Blog;
  onClick: (id: number) => void;
}) {
  return (
    <Card
      onClick={() => onClick(blog.id)}
      className="
        cursor-pointer
        bg-slate-900
        border border-slate-800
        rounded-xl
        p-4
        transition-all
        hover:border-indigo-500/60
        hover:shadow-[0_0_0_1px_rgba(99,102,241,0.4)]
        active:scale-[0.99]
      "
    >
      {/* CATEGORY + DATE */}
      <div className="flex justify-between text-xs mb-1">
        <span className="uppercase text-indigo-400 tracking-wide">
          {blog.category.join(", ")}
        </span>
        <span className="text-slate-500">
          {new Date(blog.date).toDateString()}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-slate-100 font-semibold text-sm mb-1 line-clamp-2">
        {blog.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-slate-400 text-xs line-clamp-2">
        {blog.description}
      </p>
    </Card>
  );
}
