import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F5F2EA] text-[#2D3A25] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Contact Info */}
        <div className="space-y-2 ">
          <h3 className="text-bold text-4xl">Lilac Template</h3>
          <br />
          <br />
          <p>123 Example Road</p>
          <p>Minneapolis, MN</p>
          <p>email@example.com</p>
          <p>(555) 555-5555</p>
        </div>

        {/* Business Hours */}
        <div className="space-y-2 pl-80">
          <h4 className="text-4xl text-bold pb-15">Hours</h4>
          <p className="font-medium">Monday – Friday</p>
          <p>10am – 6pm</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 pl-70">
          <h4 className="text-4xl text-bold">Find</h4>
          <br />
          <br />
          <p>
          <a href="/" className="hover:underline">Home</a><br />
          <a href="/pages/Contact" className="hover:underline">Contact</a><br />
          <a href="/pages/Blog" className="hover:underline">Blog</a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 pt-6 space-y-4 text-sm text-gray-700">
        <div className='flex justify-center'>
          <div className="flex flex-wrap gap-6">
          <a href="/privacy" className="hover:underline">Privacy & Cookies Policy</a>
          <a href="/estimate" className="hover:underline">Good Faith Estimate</a>
          <a href="/terms" className="hover:underline">Website Terms & Conditions</a>
          <a href="/disclaimer" className="hover:underline">Disclaimer</a>
        </div>

        <p className="text-gray-600">
          Website Template Credits: <a href="./" className="hover:underline">Go Bloom Creative</a>
        </p>

        <p className="text-gray-600">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
        </div>
      </div>
    </footer>
  );
}