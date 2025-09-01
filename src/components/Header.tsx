import { User, Search, Handbag } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition border-1 py-2 px-5 rounded-2xl border-gray-200"
          >
            WHICH MANUKA IS FOR ME?
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition"
          >
            Explore
          </a>
        </nav>
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // replace with your image later
            alt="Logo"
            className=" h-15 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition"
          >
            Rewards
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition mr-1"
          >
            <User />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition mr-1"
          >
            <Search />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium transition"
          >
            <Handbag />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
