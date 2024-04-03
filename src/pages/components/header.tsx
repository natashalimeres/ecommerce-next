import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Search,
  ShoppingCart,
  MessageSquareHeartIcon,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white h-36 text-mainGray p-8 flex justify-between">
      <div className="w-72">
        <Image
          src="/transparent-logo2.png"
          alt="Imagem do Banner"
          width={2500}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="relative mx-auto text-mainGreen text-lg">
        <input
          className="border-2 border-secondaryGreen bg-lightGray h-12 pl-14 pr-28 rounded-full text-lg focus:outline-none"
          type="text"
          name="text"
          placeholder="Pesquisar"
        />
        <Search className="absolute cursor-pointer right-4 top-3" size="22" />
      </div>

      <div className="cursor-pointer pr-7 text-mainGreen">
        <MessageSquareHeartIcon size="32" strokeWidth="1" />
      </div>

      <div className="cursor-pointer pr-7 text-mainGreen">
        <ShoppingCart size="32" strokeWidth="1" />
      </div>

      <div className="cursor-pointer text-mainGreen" onClick={toggleMenu}>
        <Menu size="32" strokeWidth="1" />
      </div>

      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="absolute top-16 right-2 mt-2 bg-mainGreen text-white text-xl z-50 w-32 p-2 rounded"
        >
          <a href="#" className="block py-1">
            Inicio
          </a>
          <a href="#" className="block py-1">
            Produtos
          </a>
          <a href="#" className="block py-1">
            Contato
          </a>
          <a href="#" className="block py-1">
            Promoções
          </a>
        </nav>
      )}
    </header>
  );
}
