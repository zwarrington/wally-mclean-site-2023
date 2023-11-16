import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Image from 'next/image';
import Logo from '../../public/images/web_development_logo.png';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="https://twentyplussix.com" className="block" aria-label="Cruip">
              <Image className="fit-picture" src={Logo} alt="Twenty Plus Six Web Development Logo" width="300" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">

            <li>
              <a
                href="/#champ-bracket"
                className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Newer Link
              </a>
            </li>

            <li>
            <a
                href="/#hardluck-bracket"
                className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
               New Link
              </a>
            </li>

            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
