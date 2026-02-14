 import Image from "next/image";


 // replace with your actual image
export default function Homepage() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="m-2.5 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Left side - Image */}
      <div className="flex justify-center items-center">
        <Image
          src="/maya.png"
          alt="Apple"
          className="rounded-t-[200] object-cover"
          width={500}
          height={600}
        />
      </div>


        {/* Right side - Text */}
        <div className="flex flex-col text-[#3d4a35] items-center text-center">
              <h2 className="text-6xl md:text-7xl font-serif font-semibold leading-tight">
                Live your life <br /> in full bloom <br />
              </h2>
              <p className="text-[#3d4a35] text-lg mt-4">
                  Therapy for Adults in Minneapolis, MN.
              </p>
              <a
                href="./"
                className="mt-6 px-6 py-3 text-center text-[#3d4a35] bg-[#ffffff] border-2 border-[#3d4a35] hover:text-[#ffffff] hover:bg-[#3d4a35] transition"
              >
                CONNECT WITH ME →
              </a>
        </div>

      </div>
    </section>
  );
}