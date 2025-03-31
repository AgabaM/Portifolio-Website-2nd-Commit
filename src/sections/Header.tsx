import Link from 'next/link'
const Header = () => {
  return (
 
    <div className="fixed flex items-center justify-center top-3 mt-3 z-10 left-1/2 -translate-x-1/2">
  <nav className='flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
    <h2>
      <a href="#Header" className='nav-item'>
        Home
      </a>
    </h2>
    <h2>
      <a href="#projects" className='nav-item'>
        Projects
      </a>
    </h2>
    <h2>
      <a href="#About" className='nav-item'>
        About
      </a>
    </h2>
    <h2>
      <a href="#Contact" className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'>
        Contact
      </a>
    </h2>
  </nav>
</div>
  )
}
export default Header