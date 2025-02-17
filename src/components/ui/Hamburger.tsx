// src/components/ui/Hamburger.tsx
import React, { useState, useEffect, useRef } from 'react';

interface MenuItem {
  label: string;
  href: string;
}

interface Props {
  menuItems: MenuItem[];
  currentPath: string;
}

const HamburgerMenu: React.FC<Props> = ({ menuItems, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Click outside the menu
        setIsOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or the menu is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Re-run the effect when isOpen changes

  return (
    <div>
      <button onClick={toggleMenu} className="focus:outline-none p-2">
        {/* Hamburger Icon */}
        <img
          src="/Hamburger.png" // Path to your hamburger icon in the public directory
          alt="Menu"
          className="w-10 h-10 sm:h-12 sm:w-12 text-gray-700"
        />
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef} // Attach the ref to the menu div
        className={`fixed top-0 right-0 w-64 h-screen bg-gray-100 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 shadow-lg' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-end">
            <button onClick={toggleMenu} className="focus:outline-none">
              {/* Close Icon */}
              <img
                src="/Close.png" // Path to your cross icon in the public directory
                alt="Close"
                className="w-6 h-6 text-gray-700"
              />
            </button>
          </div>

          <nav className="flex flex-col flex-grow justify-start">
            {menuItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block py-3 px-6 text-gray-700 hover:bg-sky-100 ${
                    isActive ? 'bg-sky-100 font-medium' : ''
                  }`}
                  onClick={toggleMenu} // Close menu on click
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="p-4 mt-auto">
            {/* Optional: Add some content at the bottom of the menu */}
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} VS Pharmatech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
