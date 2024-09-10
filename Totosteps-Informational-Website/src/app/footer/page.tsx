import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (

    <footer className="bg-[#2F0020] text-white py-12 px-6">
  <div className="container mx-auto flex flex-wrap justify-between">
    <div className="w-full md:w-1/4 mb-6 md:mb-0">
      <Image src="/Image/TSLogo.png" alt="Totosteps Logo" width={150} height={50} />
    </div>
    <div className="w-full md:w-1/4 mb-6 md:mb-0">
      <h3 className="font-bold mb-4">Quick Links</h3>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
    <div className="w-full md:w-1/4 mb-6 md:mb-0">
      <h3 className="font-bold mb-4">Connect With Us</h3>
      <ul>
        <li>Email: totosteps5@gmail.com</li>
        <li>Phone: +250787948672</li>
        <li>Address: Nairobi, Kenya</li>
      </ul>
    </div>
    <div className="w-full md:w-1/4">
      <h3 className="font-bold mb-4">Follow Us</h3>
      {/* Add social media icons here */}
    </div>
  </div>
  <div className="border-t border-gray-500 mt-8 pt-2 text-center">
    <p>&copy; 2024 TotoSteps. With you all the way.</p>
  </div>
</footer>
  )
} 