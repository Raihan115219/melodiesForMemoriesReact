import { useState } from "react";
import { FiMenu, FiUser, FiX } from "react-icons/fi";
import logo from "../../assets/images/PNG/MforM color.png";
import SignInFrom from "../Registration/SignInFrom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Team", href: "#ourTeam" },
  { name: "Recent Performance", href: "#performance" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const renderLinks = () =>
    navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="text-gray-800 text-md font-medium hover:text-violet-600"
      >
        {link.name}
      </a>
    ));

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-20 h-6" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">{renderLinks()}</div>

        {/* Profile Dropdown */}
        <div className="hidden md:block">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="text-gray-800">
                <FiUser className="w-6 h-6 cursor-pointer" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem
                  className="hover:bg-violet-200"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <span>Sign in</span>
                </MenubarItem>
                {["My Account", "Profile", "Settings", "Logout"].map((item) => (
                  <MenubarItem key={item} className="hover:bg-violet-200">
                    <a href="#" className="block px-4 py-2 text-gray-800">
                      {item}
                    </a>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-md px-4 py-3 space-y-2">
          {renderLinks()}
          <div className="mt-4">
            {["Profile", "Settings", "Logout"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Sign In Dialog */}
      {isDialogOpen && (
        <SignInFrom
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
        />
      )}
    </nav>
  );
};

export default Header;
