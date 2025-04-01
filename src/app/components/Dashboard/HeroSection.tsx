import React from "react";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import Group from "/public/Group.svg";
import Hero from "/public/Hero.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between md:pl-[124px] pt-16 bg-gray-50 w-full">
      {/* Left Content */}
      <div className="max-w-lg w-full z-10">
        <h1 className="text-[85px] font-bold text-gray-900 leading-tight .Inter">
          Discover more than <br />
          <span className="text-blue-600">5000+ Jobs</span>
        </h1>

        {/* Image below the text */}
        <Image
          src={Group}
          alt="Gorup"
          width={533}
          height={289}
          //   className="mrounded-lg"
        />

        <p className="Epilogue text-[#515B6F] text-xl font-normal leading-[100%] opacity-[70%]">
          Great platform for those who are searching for new career heights and
          passionate about startups.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 bg-white shadow-md p-4 rounded-lg w-full md:w-fit">
          <div className="flex items-center border rounded-md px-4 w-full">
            <Search className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex items-center border rounded-md px-4 w-full md:w-auto">
            <MapPin className="text-gray-400 mr-2" size={20} />
            <select className="outline-none bg-transparent">
              <option>Florence, Italy</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white text-nowrap py-2 px-6 rounded-md font-medium w-full md:w-auto">
            Search my job
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-center py-2">
          <span className="Epilogue font-medium text-[#202430] text-[16px] leading-[160%]">Popular :</span>
          <span className="Epilogue font-medium text-[#202430] text-[16px] leading-[160%]">UI Designer, UX Researcher, Android, Admin</span>
        </div>
      </div>
      <div className="Pattern flex justify-end">
        <Image
          src={Hero}
          alt="Hero"
          width={501}
          height={707}
          className="mrounded-lg hidden md:block"
        />
      </div>
    </section>
  );
};

export default HeroSection;
