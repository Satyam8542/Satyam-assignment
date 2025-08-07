// app/layout.tsx (Refactored layout with separate client Dropdown component)
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Dropdown from '@/components/Dropdown';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Practo Clone',
  description: 'Search doctors, clinics, hospitals',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="header-container">
            {/* Left - Logo */}
            <div className="flex items-center gap-2">
              <img src="/Practologo.png" alt="Logo" className="h-6 w-auto" />
            </div>

            {/* Center - Navigation */}
            <nav className="nav-links">
              <a href="/" className="hover:text-blue-600">Find Doctors</a>
              <a href="#" className="hover:text-blue-600">Video Consult</a>
              <a href="#" className="hover:text-blue-600">Surgeries</a>
            </nav>

            {/* Right - Auth + Dropdown */}
            <div className="marg">
              <div className="dropdown">
                <button className="dropbtn">For Corporate<i className="arrow down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">For Provider<i className="arrow down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Security & Help<i className="arrow down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
            <div className="log">
              <button className="text-sm hover:text-blue-600">Login/</button>
              <button className="text-sm hover:text-blue-700">Sign up</button>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
