import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold">
              Virtual Classroom
            </Link>

          <div className="flex flex-wrap gap-3 text-sm sm:gap-6 sm:text-base">
  <Link href="/">Home</Link>
  <Link href="/dashboard">Dashboard</Link>
  <Link href="/courses">Courses</Link>
  <Link href="/assignments">Assignments</Link>
  <Link href="/schedule">Schedule</Link>
  <Link href="/health">Health</Link>
</div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}