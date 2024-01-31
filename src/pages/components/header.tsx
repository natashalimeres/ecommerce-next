import React, { useState } from "react";
import {
  Menu,
  Search,
  ShoppingCart,
  MessageSquareHeartIcon,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white h-36 text-mainGray p-8 flex justify-between">
      <div className="text-3xl">Jóias de Jade</div>

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
        <nav className="absolute top-16 right-2 mt-2 bg-mainGreen text-white text-xl z-50 w-32 p-2 rounded">
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
