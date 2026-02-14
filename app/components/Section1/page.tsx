"use client"
import Image from "next/image";
export default function Section1(){
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
       imgSrc: "/apple.png", 
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
       imgSrc: "/apple.png",
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
       imgSrc: "/apple.png",
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-[#2D3A25] md:text-5xl font-serif font-semibold text-center pb-20">My Specialties</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
          {specialties.map((item, index) => (
            <div key={index} className="bg-[#E8E4D9] p-8 border border-[#2D3A25] flex flex-col items-center text-left">
              <h3 className="text-xl font-medium text-[#2D3A25] self-start mb-4">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-10">
                {item.description}
              </p>
              
              {/* Circular Image Container */}
              <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-white/20">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  className="object-cover"
                  width={256}
                  height={256}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
