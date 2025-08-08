// app/layout.tsx (Refactored layout with separate client Dropdown component)
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";

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
              <Image
                src="/Practologo.png"
                alt="Logo"
                width={120}         // 👈 adjust to your image size
                height={24}         // 👈 adjust as needed
                className="h-6 w-auto"
              />

            </div>

            {/* Center - Navigation */}
            <nav className="nav-links">
              <Link href="/" className="hover:text-blue-600">Find Doctors</Link>
              <Link href="#" className="hover:text-blue-600">Video Consult</Link>
              <Link href="#" className="hover:text-blue-600">Surgeries</Link>
            </nav>

            {/* Right - Auth + Dropdown */}
            <div className="marg">
              <div className="dropdown">
                <button className="dropbtn">For Corporate<i className="arrow down"></i></button>
                <div className="dropdown-content">
                  <Link href="#">Home</Link>
                  <Link href="#">About</Link>
                  <Link href="#">Contact</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">For Provider<i className="arrow down"></i></button>
                <div className="dropdown-content">
                  <Link href="#">Home</Link>
                  <Link href="#">About</Link>
                  <Link href="#">Contact</Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Security & Help<i className="arrow down"></i></button>
                <div className="dropdown-content">
                  <Link href="#">Home</Link>
                  <Link href="#">About</Link>
                  <Link href="#">Contact</Link>
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
