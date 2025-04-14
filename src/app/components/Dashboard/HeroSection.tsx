import React from "react";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import Group from "/public/Group.svg";
import Hero from "/public/Hero.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-[23px] pt-4 px-4 pb-8 md:pl-[124px] bg-gray-50 w-full">
      {/* Left Content */}
      <div className="max-w-lg w-full z-10">
        <h1 className="text-5xl font-semibold md:text-[85px] md:font-bold text-gray-900 leading-tight .Inter">
          Discover more than <br />
          <span className="text-[#26A4FF] font-bold">5000+ Jobs</span>
        </h1>

        {/* Image below the text */}
        <Image
          src={Group}
          alt="Group"
          width={533}
          height={289}
          className="mb-4"
        />

        <p className="Epilogue text-[#515B6F] text-[18px] font-normal leading-[160%] opacity-[70%]">
          Great platform for those who are searching for new career heights and
          passionate about startups.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 bg-white shadow-md shadow-[#C0C0C007] p-4 rounded-lg w-full md:w-fit">
          <div className="flex items-center rounded-md px-4 w-full h-[47px]">
            <Search className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 outline-none border-b"
            />
          </div>
          <div className="flex items-center rounded-md px-4 w-[305.5px] md:w-auto">
            <MapPin className="text-gray-400 mr-2" size={20} />
            <select className="outline-none border-b w-full md:w-auto bg-transparent">
              <option>Florence, Italy</option>
              <option>London, UK</option>
              <option>New York, USA</option>
              <option>Paris, France</option>
              <option>Tokyo, Japan</option>
              <option>Sydney, Australia</option>
              <option>Lagos, Nigeria</option>
              <option>Abuja, Nigeria</option>
            </select>
          </div>
          <button className="bg-[#4640DE] text-white text-nowrap py-2 px-6 rounded-md font-medium w-full h-14 md:w-auto">
            Search my job
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-center py-2">
          <span className="Epilogue font-medium text-[#202430] text-[16px] leading-[160%]">
            Popular :
          </span>
          <span className="Epilogue font-medium text-[#202430] text-[16px] leading-[160%]">
            UI Designer, UX Researcher, Android, Admin
          </span>
        </div>
      </div>
      <div className="Pattern flex justify-end h-full">
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
