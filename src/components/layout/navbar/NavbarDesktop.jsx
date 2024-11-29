import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import MovieSearch from "@/components/movies/moviesSearch/MovieSearch";

const NavbarDesktop = () => {
  return (
    <header className="bg-background-header p-5 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <p className="text-text-primary">CineScope</p>
        </div>

        {/* Navigation */}
        <div className="w-1/2">
          <nav className="w-full flex justify-end">
            <ul className="nav flex gap-4 text-text-secondary">
              <Link href={"/series"}>Series</Link>
              <Link href={"/movies"}>Films</Link>
            </ul>
          </nav>
        </div>

        {/* Recherche */}
        <div className="relative z-10 flex-grow max-w-xs">
          <MovieSearch />
        </div>

        {/* Profil */}
        <div>
          <FaUserCircle className="text-text-secondary" />
        </div>
      </div>
    </header>
  );
};

export default NavbarDesktop;
