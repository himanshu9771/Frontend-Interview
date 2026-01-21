import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
            CA
          </div>
          <span className="font-semibold text-lg">CA MONK</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link to="/tools" className="hover:text-black">Tools</Link>
          <Link to="/practice" className="hover:text-black">Practice</Link>
          <Link to="/events" className="hover:text-black">Events</Link>
          <Link to="/jobs" className="hover:text-black">Job Board</Link>
          <Link to="/blog" className="hover:text-black">Blog</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/create-blog">
          <Button variant="outline" className="ml-2">
            Create Blogs
          </Button>
            </Link>
        </div>
        

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 py-4 space-y-3">
          <Link to="/tools">Tools</Link>
          <Link to="/practice">Practice</Link>
          <Link to="/events">Events</Link>
          <Link to="/jobs">Job Board</Link>
          <Link to="/blog">Blog</Link>
        </div>
      )}
    </header>
  );
}
