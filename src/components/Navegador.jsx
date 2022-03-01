import styles from '../styles/Navegador.module.css'
import Link from "next/link"

export default function Navegador(props){
    return(
        //passHref para retirar o Warning
        <Link href={props.destino} passHref>
        {/* aplicando um estilo de forma dinâmica */}
        <div className={styles.navegador} style={{
            backgroundColor: props.cor ?? 'dodgerblue'
        }}>
        {props.texto}
        </div>
            
        </Link>
    )
}