import Story from "./Story"
import './Stories.css'

var listaUsuarios = [
    {
        nome: "Bosak",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Quitts",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Dourado",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Petta",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Guga",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
                })
            }

        </div>
    )
}