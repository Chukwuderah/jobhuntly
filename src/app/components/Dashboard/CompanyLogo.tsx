import Vodafone from "../../../../public/vodafone.png";
import Intel from "../../../../public/intel-3.png";
import Tesla from "../../../../public/tesla-9 1.png";
import Amd from "../../../../public/amd-logo-1.png";
import Talkit from "../../../../public/talkit 1.png";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="flex flex-col gap-8 w-full py-10 px-4 md:px-[124px] bg-white mb-10">
      <h2 className="Epilogue font-normal text-[#202430] text-lg leading-[160%]">
        Companies we helped grow
      </h2>
      <div className="flex items-center justify-between flex-wrap gap-8 h-10">
        <Image src={Vodafone} alt="Vodafone" width={154} height={40} />
        <Image src={Intel} alt="Intel" width={82} height={32} className="object-cover" />
        <Image src={Tesla} alt="Tesla" width={183} height={40} />
        <Image src={Amd} alt="Amd" width={116} height={40} />
        <Image src={Talkit} alt="Talkit" width={102} height={40} />
      </div>
    </div>
  );
};
export default CompanyLogo;
