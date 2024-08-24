import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Atoms/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-yellow-600 text-white p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-white">
          <h1 className="text-2xl font-bold logo-pokemon cursor-pointer">
            Poképet
          </h1>
        </Link>

        <Button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-white"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </Button>

        <nav className={`button-nav ${isOpen ? "block" : "hidden"}`}>
          <Link
            to="/my-pokemon"
            className="my-pokemon"
            onClick={() => setIsOpen(false)}
          >
            My Pokemon
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
