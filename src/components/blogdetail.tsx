import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogs";

export default function BlogDetail({ blogId }: { blogId: number | null }) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) return <p>Select a blog to read</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <img
        src={data?.coverImage}
        className="rounded-lg w-full h-64 object-cover"
      />

      <h1 className="text-2xl font-bold">{data?.title}</h1>

      <p className="text-sm text-muted-foreground">
        {data?.category.join(", ")} |{" "}
        {new Date(data!.date).toDateString()}
      </p>

      <p className="text-gray-700">{data?.description}</p>

      <p className="whitespace-pre-line text-gray-800">
        {data?.content}
      </p>
    </div>
  );
}
