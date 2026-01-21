import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Routes, Route } from "react-router-dom";

import BlogPage from "@/pages/Blogpage";
import Tools from "@/pages/Tools";
import Practice from "@/pages/Practice";
import Events from "@/pages/Events";
import JobBoard from "@/pages/JobBoard";
import CreateBlogPage from "@/pages/CreateBlogPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/events" element={<Events />} />
          <Route path="/jobs" element={<JobBoard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
