import { useState } from "react";
import BlogLists from "./components/bloglist";
import BlogDetail from "./components/blogdetail";
import CreateBlogForm from "./components/createblogform";

export default function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        CA Monk Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          <BlogLists onSelect={setSelectedBlogId} />
          <CreateBlogForm />
        </div>

        {/* RIGHT PANEL */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <BlogDetail blogId={selectedBlogId} />
        </div>
      </div>
    </div>
  );
}
