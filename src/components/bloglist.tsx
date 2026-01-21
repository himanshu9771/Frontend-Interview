import { useBlogs } from "@/hooks/useblogs";
import BlogCard from "@/components/blogdetails";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLists({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading)
    return <Skeleton className="h-[200px] w-full rounded-lg" />;

  if (isError) return <p className="text-red-400">Error loading blogs</p>;

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onClick={onSelect} />
      ))}
    </div>
  );
}
