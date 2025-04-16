import Image from "next/image";
import Icon from "../../../../public/Icon.svg";
import {
  Briefcase,
  Code2,
  Monitor,
  BarChart2,
  Wallet,
  Megaphone,
  Palette,
  Users,
} from "lucide-react";

const ExploreJobs = () => {
  const categories = [
    { title: "Design", jobs: 235, icon: <Palette /> },
    { title: "Sales", jobs: 756, icon: <BarChart2 /> },
    { title: "Marketing", jobs: 140, icon: <Megaphone />, isActive: true },
    { title: "Finance", jobs: 325, icon: <Wallet /> },
    { title: "Technology", jobs: 436, icon: <Monitor /> },
    { title: "Engineering", jobs: 542, icon: <Code2 /> },
    { title: "Business", jobs: 211, icon: <Briefcase /> },
    { title: "Human Resource", jobs: 346, icon: <Users /> },
  ];

  const showAllJobs = () => {
    return (
      <div className="flex gap-4 cursor-pointer hover:underline decoration-[#4640DE] decoration-2">
        <p className="text-[#4640DE] Epilogue font-bold text-[16px] leading-[160%]">
          Show all jobs
        </p>
        <Image src={Icon} alt="Icon" width={24} height={24} />
      </div>
    );
  };

  return (
    <div className="w-full px-4 md:px-[124px] py-12">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <h3 className="Inter font-semibold text-[#25324B] text-[32px] leading-[120%]">
          Explore by <span className="text-[#26A4FF]">category</span>
        </h3>
        <div className="hidden md:flex">{showAllJobs()}</div>
      </div>

      {/* Categories Flex Container */}
      <div className="flex flex-wrap gap-y-6 gap-x-6 w-full">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`w-full sm:w-[47%] lg:w-[23%] border border-[#D6DDEB] rounded-lg px-6 py-8 cursor-pointer transition duration-300 ${
              cat.isActive
                ? "bg-[#4640DE] text-white"
                : "hover:border-[#4640DE] text-[#25324B] bg-white"
            }`}
          >
            <div className="text-[28px] mb-6">{cat.icon}</div>
            <h4
              className={`font-semibold text-lg mb-2 ${
                cat.isActive ? "text-white" : "text-[#25324B]"
              }`}
            >
              {cat.title}
            </h4>
            <p
              className={`text-sm ${
                cat.isActive ? "text-white" : "text-[#7C8493]"
              }`}
            >
              {cat.jobs} jobs available →
            </p>
          </div>
        ))}
      </div>

      {/* Show all jobs */}
      <div className="md:hidden mt-6">{showAllJobs()}</div>
    </div>
  );
};

export default ExploreJobs;
