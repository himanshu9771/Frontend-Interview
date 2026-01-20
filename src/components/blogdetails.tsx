import type { Blog } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogCard({
  blog,
  onClick,
}: {
  blog: Blog;
  onClick: (id: number) => void;
}) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition"
      onClick={() => onClick(blog.id)}
    >
      <CardContent className="p-4 space-y-1">
        <p className="text-xs text-muted-foreground">
          {blog.category.join(", ")}
        </p>
        <h3 className="font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-600">{blog.description}</p>
      </CardContent>
    </Card>
  );
}
