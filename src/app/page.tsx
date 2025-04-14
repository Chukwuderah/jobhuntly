import Image from "next/image";
import HeroSection from "./components/Dashboard/HeroSection";
import CompanyLogo from "./components/Dashboard/CompanyLogo";

//  px - 4;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-0 w-full">
      <HeroSection />
      <CompanyLogo />
    </main>
  );
}