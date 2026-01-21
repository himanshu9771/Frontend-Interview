import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* BRAND */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                CA
              </div>
              <span className="text-lg font-semibold text-white">
                CA MONK
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering the next generation of financial leaders
              with tools, community, and knowledge.
            </p>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              RESOURCES
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><span className="hover:text-white cursor-pointer">Webinars</span></li>
              <li><span className="hover:text-white cursor-pointer">Case Studies</span></li>
            </ul>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              PLATFORM
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/jobs" className="hover:text-white">Job Board</Link></li>
              <li><span className="hover:text-white cursor-pointer">Practice Tests</span></li>
              <li><span className="hover:text-white cursor-pointer">Mentorship</span></li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              CONNECT
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 my-8" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">

          <p>© 2024 CA Monk. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
