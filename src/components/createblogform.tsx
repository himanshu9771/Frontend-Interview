import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    mutation.mutate({
      title: (form.title as any).value,
      category: (form.category as any).value.split(","),
      description: (form.description as any).value,
      content: (form.content as any).value,
      coverImage: (form.coverImage as any).value,
      date: new Date().toISOString(),
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input name="title" placeholder="Title" />
      <Input name="category" placeholder="Category (comma separated)" />
      <Input name="coverImage" placeholder="Cover image URL" />
      <Textarea name="description" placeholder="Description" />
      <Textarea name="content" placeholder="Content" />
      <Button type="submit">Create Blog</Button>
    </form>
  );
}
