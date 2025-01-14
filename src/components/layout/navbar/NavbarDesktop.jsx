import { FaUserCircle } from "react-icons/fa";

const NavbarDesktop = () => {
  return (
    <header className="bg-background-header p-5 shadow-lg">
      <div className="flex justify-around items-center">
        <div>
          <p className="text-text-primary">CineScope</p>
        </div>
        <div className="w-1/2">
          <nav className="w-full flex justify-end">
            <ul className="nav flex gap-4 text-text-secondary">
              <li className="nav-item active">Series</li>
              <li className="nav-item">Films</li>
            </ul>
          </nav>
        </div>
        <div>
          <input type="text" placeholder="Recherche un titre" className="text-text-secondary bg-transparent border-none" />
        </div>
        <div>
          <FaUserCircle className="text-text-secondary" />
        </div>
      </div>
    </header>
  );
};

export default NavbarDesktop;
