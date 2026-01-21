import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Input } from "@/components/ui/input";
// Textarea component not found; use native <textarea> elements instead
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/blog"); // ✅ go back to blog page
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
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-3"
    >
      <h2 className="text-xl font-semibold text-slate-100">
        Create New Blog
      </h2>

      <Input name="title" placeholder="Title" required />
      <Input name="category" placeholder="Category (comma separated)" required />
      <Input name="coverImage" placeholder="Cover image URL" required />
      <textarea
        name="description"
        placeholder="Description"
        required
        className="w-full rounded-md bg-slate-800 border border-slate-700 text-slate-100 p-2"
      />
      <textarea
        name="content"
        placeholder="Content"
        required
        className="w-full h-40 rounded-md bg-slate-800 border border-slate-700 text-slate-100 p-2"
      />

      <Button type="submit" className="w-full">
        Publish Blog
      </Button>
    </form>
  );
}
