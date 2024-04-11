var xicara = {
  nome: "Xícara",
  preco: 10.0,
};

export default function TextMenu(props) {
  return (
    <li className="text-menu">
      <span>{props.icone}</span>
      <span>{props.nome}</span>
    
    </li>
  );
}
