import Layout from "../components/Layout";

//Para gerar conteúdo estático uma unica vez no lado do servidor.
export async function getStaticProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
}


export default function Estatico(props){
    return( 
        <Layout titulo="Conteúdo Estático">
            <div>{Math.random()}</div>
        </Layout>
    )
}