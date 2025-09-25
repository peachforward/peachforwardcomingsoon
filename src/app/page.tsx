import { TypewriterText } from "@/components/TypeWriterText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Header with Logo */}
      <header className="w-full p-6 animate-[fadeIn_0.8s_ease-out_forwards]">
        <div className="max-w-7xl mx-auto">
          <Image
            src="https://res.cloudinary.com/druohnmyv/image/upload/v1758815196/Screenshot_2025-08-09_at_10.17.00_PM-removebg-preview_hzizkf.png"
            alt="Logo"
            width={160}
            height={48}
            // className="h-12 w-auto"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Hero Section */}
          <div className="space-y-6 animate-[slideUp_0.8s_ease-out_forwards]">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Something{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
                Amazing
              </span>{" "}
              <br />
              <TypewriterText
                text="is Coming Soon"
                delay={1000}
                speed={150}
                className="text-gray-100"
              />
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-[fadeIn_1.2s_ease-out_forwards]">
              We're crafting something extraordinary. Be the first to know when
              we launch.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 animate-[fadeIn_1.2s_ease-out_forwards]">
        <div className="mx-auto flex flex-col md:flex-row  justify-center items-center  gap-4">
          <p className="text-sm text-center text-gray-400">
            © 2024 PeachForward Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
