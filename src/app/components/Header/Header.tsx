import Image from "next/image";
import Menu from "/public/Menu.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 md:px-[124px] h-[60px] md:h-[78px] w-full shadow shadow-[#D6DDEB]">
      <div className="flex items-center gap-12 w-[452px]">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
        <div className="hidden md:flex gap-4">
          <span className="text-[16px] text-nowrap text-[#515B6F] font-[500] leading-[160%] Epilogue">
            Find Jobs
          </span>
          <span className="text-[16px] text-nowrap text-[#515B6F] font-[500] leading-[160%] Epilogue">
            Browse Companies
          </span>
        </div>
      </div>
      <div className="hidden md:flex gap-4 w-[232px]">
        <button type="button" className="py-3 px-6 rounded-sm w-[92px] h-[50px] text-[16px] text-[#4640DE] font-bold leading-[160%] Epilogue cursor-pointer" >Login</button>
        {/* <span className="border border-[#D6DDEB] w-0.5 rotate-[90deg] bg-[#D6DDEB]"></span> */}
        <button type="button" className="py-3 px-6 rounded-sm w-[108px] h-[50px] bg-[#4640DE] text-nowrap text-[16px] text-white font-bold leading-[160%] Epilogue cursor-pointer" >Sign Up</button>
      </div>
      <Image src={Menu} alt="Menu" width={50} height={50} className="md:hidden" />
    </header>
  );
};

export default Header;
