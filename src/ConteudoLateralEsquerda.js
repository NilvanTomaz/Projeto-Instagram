import React from "react";
import logo from "./imagens/images.png";
import Menu from "./TextMenu";
import { IoSearch } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { FaHeart, FaRegPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function ConteudoLateralEsquerda() {
  return (
    <div className="conteudoLateralEsquerda">
      <img src={logo} alt="Logo" />
      <p>Exemplo de conteúdo lateral esquerda</p>

      <ul>
        <Menu
          nome=" Home "
          icone={<IoMdHome style={{ color: "black", fontSize: "20px" }} />}
        />
        <Menu
          nome=" Buscar "
          icone={<LuSearch style={{ color: "black", fontSize: "20px" }} />}
        />
        <Menu
          nome=" Conversas"
          icone={<FiMessageCircle style={{ color: "black", fontSize: "20px" }} />}
        />
        <Menu
          nome=" Notificações"
          icone={<FaHeart style={{ color: "black", fontSize: "20px" }} />}
        />
        <Menu
          nome=" Criar"
          icone={<FaRegPlusSquare style={{ color: "black", fontSize: "20px" }} />}
        />
        <Menu
          nome=" Perfil"
          icone={<CgProfile style={{ color: "black", fontSize: "20px" }} />}
        />
      </ul>
    </div>
  );
}
