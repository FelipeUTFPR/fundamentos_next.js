import { useRouter } from "next/router"
import Layout from "../../../components/Layout"

//[codigo] é transformado em valores dinâmicos, ex: localhost:3000/cliente/(qualquervaloraqui)
//cairá na pagina [codigo].jsx

//acessa dinamicamente dois valores [codigo] e [filial]
export default function ClienteProCodigo(){
    const router = useRouter()
    return(
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {Router.query.codigo}</div>
            <div>Filial = {Router.query.filial}</div>
        </Layout>
    )
}