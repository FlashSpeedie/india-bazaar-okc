import { ArrowRightIcon, MapPinIcon, PhoneIcon, StoreIcon } from "lucide-react";
import { heroSectionData, storeInfo } from "../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[540px] mb-10 rounded-3xl flex items-center">
      <img
        src={heroSectionData.hero_image}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-app-green via-app-green/65 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-xl xl:pl-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-orange-300 bg-orange-300/10 rounded-full mb-5">
            <StoreIcon className="size-3" /> Indian Grocery Store in Oklahoma City
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
            India Bazaar OKC
            <span className="block text-orange-300">authentic groceries for every kitchen</span>
          </h1>

          <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md">
            {heroSectionData.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8 text-sm text-white/85">
            <a href={storeInfo.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <MapPinIcon className="size-4 text-orange-300" />
              <span>{storeInfo.address}</span>
            </a>
            <a href={storeInfo.phoneHref} className="flex items-center gap-2">
              <PhoneIcon className="size-4 text-orange-300" />
              <span>{storeInfo.phone}</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to={"/products"}
              className="px-7 py-3 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-500 transition-all flex-center gap-2 active:scale-[0.98]"
            >
              Shop Now <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              to={"/contact"}
              className="px-7 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              Hours & Location
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
