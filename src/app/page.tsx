import Image from "next/image";
import HeroSection from "./components/Dashboard/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-0 w-full">
      <HeroSection />
    </main>
  );
}