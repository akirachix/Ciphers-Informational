import Image from 'next/image';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

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
    <section id="features" className={`py-16 sm:py-24 px-4 sm:px-6 bg-white text-black ${nunito.className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">Empowering Features for Caring Parents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <div className="mb-6">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} className="w-16 h-16"/>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center md:text-left">{feature.title}</h3>
              <p className="text-lg text-center md:text-left max-w-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}