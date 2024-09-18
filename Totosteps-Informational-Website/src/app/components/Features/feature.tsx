import Image from 'next/image';

const features = [
  {
    title: "Milestone Tracking",
    description: "Log and celebrate your child's developmental achievements with our intuitive interface.",
    icon: "/images/milestone.png"
  },
  {
    title: "AI-Powered Insights",
    description: "Learn about Autism. Test for autism. Stay informed about your child's health",
    icon: "/images/ai.png"
  },
  {
    title: "Early Detection Alerts",
    description: "Stay informed about potential delays with our advanced monitoring system.",
    icon: "/images/notifications.png"
  },
  {
    title: "Resource Library",
    description: "Access a wealth of expert-curated content to support your parenting journey.",
    icon: "/images/resources.png"
  }
];

export default function Features() {
  return (
    <section className="py-10 bg-white text-black">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold text-center mb-10">
          Empowering Features for Caring Parents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 ">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="mb-4 flex justify-center sm:justify-start">
                <Image src={feature.icon} alt={feature.title} width={58} height={58} />
              </div>
              <h3 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}