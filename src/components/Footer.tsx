'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <Link href="/" className="text-7xl font-bold mb-6 block hover:opacity-80 transition">
              Praxis
            </Link>
            <p className="text-gray-400 text-lg mb-6">
              Transforming special education through innovative, accessible learning experiences.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Help
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2026 Praxis. All rights reserved.</p>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <span className="cursor-pointer hover:text-white transition">Status</span>
            <a href="/contact" className="cursor-pointer hover:text-white transition">Support</a>
            <span className="cursor-pointer hover:text-white transition">Updates</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
