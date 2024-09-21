'use client';

import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="home" id="landingpage">
      <div className="bg-[#4C0033] xs:px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center border">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl ipad-air:text-5xl surface-pro-7:text-6xl text-white font-bold mb-4 sm:mb-6 2xl:mb-[50px]">
            Nurturing Little Wonders,<br className="hidden lg:inline" />
            One Step at a Time
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl ipad-air:text-2xl surface-pro-7:text-3xl text-white mb-6 sm:mb-8 2xl:mt-[80px]">
            TotoSteps: Your magical companion in your child&apos;s growth journey from 0-3 years.
          </p>

          <button className="bg-[#F58220] hover:bg-orange-600 text-white font-bold py-2 px-4 xs:py-3 xs:px-6 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 xl:py-6 xl:px-12 2xl:py-7 2xl:px-14 ipad-air:py-5 ipad-air:px-10 surface-pro-7:py-6 surface-pro-7:px-12 rounded-full text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl ipad-air:text-2xl surface-pro-7:text-3xl transition duration-300 2xl:mt-[80px]">
            Start the journey
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <div className="relative w-full aspect-square xs:max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] ipad-air:max-w-[65%] surface-pro-7:max-w-[70%]">
            <Image
              src="/Images/Mother.png"
              alt="Mother and child"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
