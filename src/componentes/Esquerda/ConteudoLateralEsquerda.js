import React from "react";
import logo from './imagens/images.png';
import Menu from "../../TextMenu";
import "./ConteudoLateralEsquerda.css"
import { IoSearch } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { FaHeart, FaRegPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function ConteudoLateralEsquerda() {
  return (
    <div className="conteudoLateralEsquerda">
      <img src={logo} alt="Logo" />
    
      <ul>
        <Menu
          nome=" Home "
          icone={<IoMdHome />}
        />
        <Menu
          nome=" Buscar "
          icone={<LuSearch/>}
        />
        <Menu
          nome=" Conversas"
          icone={<FiMessageCircle/>}
        />
        <Menu
          nome=" Notificações"
          icone={<FaHeart />}
        />
        <Menu
          nome=" Criar"
          icone={<FaRegPlusSquare />}
        />
        <Menu
         className="Profile" nome=" Perfil" class= "text-menu" icone={<CgProfile />}
        />

        <Menu
          nome=" More" icone={<GiHamburgerMenu />}
          />
      </ul>
    </div>
  );
}
