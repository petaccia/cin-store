import { FaUserCircle, FaSearch } from "react-icons/fa";
import Link from "next/link";
import MovieSearch from "@/components/movies/moviesSearch/MovieSearch";

const NavbarDesktop = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background-header/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo avec effet */}
            <Link href="/" className="group relative">
              <span className="text-3xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                CineScope
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Navigation avec effet hover */}
            <nav className="hidden md:flex space-x-12">
              <Link 
                href="/series" 
                className="relative text-lg text-text-secondary hover:text-text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-primary hover:after:w-full after:transition-all after:duration-300"
              >
                Séries
              </Link>
              <Link 
                href="/movies"
                className="relative text-lg text-text-secondary hover:text-text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-primary hover:after:w-full after:transition-all after:duration-300"
              >
                Films
              </Link>
            </nav>

            {/* Recherche avec animation */}
            <div className="flex-1 max-w-xs mx-8 relative group">
              <div className="transform transition-all duration-300 group-hover:scale-105">
                <MovieSearch />
              </div>
            </div>

            {/* Profil avec effet */}
            <div className="flex items-center">
              <FaUserCircle className="h-8 w-8 text-text-secondary hover:text-accent-primary transform hover:scale-110 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarDesktop;
