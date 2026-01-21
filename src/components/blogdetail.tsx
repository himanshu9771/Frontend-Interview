import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogs";

export default function BlogDetail({ blogId }: { blogId: number }) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
  });

  if (isLoading) return <p className="text-slate-400">Loading...</p>;

  return (
    <div className="space-y-6 text-slate-200">

      {/* COVER IMAGE */}
      <img
        src={data?.coverImage}
        alt="cover"
        className="w-full h-52 md:h-64 object-cover rounded-xl border border-slate-800"
      />

      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold text-slate-100">
        {data?.title}
      </h1>

      {/* META */}
      <div className="text-sm flex flex-wrap gap-2 items-center">
        <span className="text-indigo-400">
          {data?.category.join(", ")}
        </span>
        <span className="text-slate-500">|</span>
        <span className="text-slate-400">
          {new Date(data!.date).toDateString()}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-slate-300 leading-relaxed">
        {data?.description}
      </p>

      {/* CONTENT */}
      <div className="text-slate-300 whitespace-pre-line leading-loose text-sm md:text-base">
        {data?.content}
      </div>

      {/* TAGS */}
      <div className="flex gap-2 flex-wrap pt-2">
        {data?.category.map((tag: string) => (
          <span
            key={tag}
            className="
              px-3 py-1
              text-xs
              rounded-full
              bg-slate-800
              border border-slate-700
              text-slate-300
              hover:border-indigo-500/50
              transition
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
