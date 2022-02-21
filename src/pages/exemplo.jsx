import Cabecalho from "../components/Cabecalho";

export default function Exemplo(){
    return(
        
        <>
            {/* passando propriedade para instâncias do componente Cabecalho, que
            será acessado pelo objeto props no arquivo Cabecalho.jsx */}
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprende Next prática"/>
        </>
    )
}