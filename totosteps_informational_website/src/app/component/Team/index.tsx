import Image from 'next/image'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

const teamMembers = [
  { name: "Wanja Kayago", image: "/Image/WanjaKayago.jpg" },
  { name: "Nancy Shimwe", image: "/Image/Nancy Shimwe.jpg" },
  { name: "Eyvone Oyella", image: "/Image/Eyvonne.jpg" },
  { name: "Laura Nyaaga", image: "/Image/Laura Nyaaga.jpg" },
  { name: "Faith Yiamat", image: "/Image/Yiamat Faith.jpg" },
]

export default function Team() {
  return (
    <section id="team" className={`py-6 px-20 bg-gray-100 ${nunito.className}`}>
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={250} 
                  height={200} 
                  className="rounded-full mx-auto mb-4 text-black" 
                />
              </div>
              <h3 className="font-bold text-black">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}