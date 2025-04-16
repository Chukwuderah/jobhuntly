import HeroSection from "./components/Dashboard/HeroSection";
import CompanyLogo from "./components/Dashboard/CompanyLogo";
import ExploreJobs from "./components/Dashboard/ExploreJobs";

//  px - 4;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-0 w-full bg-white mb-10">
      <HeroSection />
      <CompanyLogo />
      <ExploreJobs />
    </main>
  );
}