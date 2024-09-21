import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2F0020] text-white font-nunito py-8">
      <div className="container mx-auto px-12 sm:px-8 lg:px-11">
        <div className="flex flex-wrap justify-between items-start mb-12">
          {/* Logo Section */}
          <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
            <Image src="/images/TotoSteps_logo.png" alt="TotoSteps Logo" width={120} height={70} />
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/home">Home</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="font-bold">Email:</span> totosteps5@gmail.com</li>
              <li><span className="font-bold">Phone:</span> +250787948672</li>
              <li><span className="font-bold">Address:</span> Nairobi, Kenya</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80">
                <Image src="/images/facebook.svg" alt="Facebook" width={16} height={16} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image src="/images/twitter.png" alt="Twitter" width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="flex justify-center border-t border-[#FFFFFF] pt-4 text-xs">
          <p>&copy; 2024 TotoSteps. With You All The Way</p>
        </div>
      </div>
    </footer>
  );
}
