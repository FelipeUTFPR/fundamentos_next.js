import Layout from "../components/Layout"

export default function Jsx(){
    //Nesse espaço posso colocar pedaços de javascript
    const titulo = <h1> JSX é um Conceito Central</h1>

function subtitulo(){
    return <h2>{"muito legal".toLocaleUpperCase()}</h2>

}

return(
    <Layout titulo="Entendendo o JSX">
        <div>
        {/* posso mesclar javascript dentro de jsx utilizando chaves */}
            {titulo}
            {subtitulo()}
        <p>
            {JSON.stringify({nome: 'João', idade:30})}
        </p>
        </div>
    </Layout>
)

}