import Image from 'next/image';

export default function CTA() {
  return (
    <section className="bg-[#4C0033] text-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-10 xl:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[24px] font-semibold mb-8 sm:mb-10 md:mb-12">
          Start Tracking Your Child&apos;s Journey Today
        </h2>
        <div className="flex justify-center items-center space-x-8 sm:space-x-10 md:space-x-12">
          <button className="bg-white text-black px-3 py-1.5 rounded-full flex items-center space-x-2 text-sm sm:text-base transition-colors duration-300 hover:bg-[#b46fb1]">
            <Image src="/images/appstore.svg" alt="App Store" width={24} height={24} />
            <span>App Store</span>
          </button>
          <button className="bg-white text-black px-3 py-1.5 rounded-full flex items-center space-x-2 text-sm sm:text-base transition-colors duration-300 hover:bg-[#b46fb1]">
            <Image src="/images/playstore.svg" alt="Google Play" width={24} height={24} />
            <span>Google Play</span>
          </button>
        </div>
      </div>
    </section>
  );
}
