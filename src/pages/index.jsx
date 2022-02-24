import Navegador from "../components/Navegador"

export default function Inicio(){
    return(
        <div style={{
          display:'flex',
          justifyContent: 'center',
          alignItems:'center',
          flaxWrap:'wrap',
          height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
            {/* quando vc criar /navegação/index ele navega para a página principal normalmente */}
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"></Navegador>
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/321" cor="blue"></Navegador>
            
        </div>
    )
}