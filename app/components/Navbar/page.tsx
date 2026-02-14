import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-6 bg-white'>
      <Link href="/" className='text-3xl font-bold text-[#3d4a35] transition cursor:pointer'>Lilac-Template</Link>
      <div className="space-x-8 text-2xl  text-[#3d4a35] font-medium">
        <Link href="/pages/Blog" className=' cursor:pointer'>Blog</Link>
        <Link href="/pages/Contact" className='cursor:pointer'>Contact</Link>
      </div>
    </nav>
  )
}
