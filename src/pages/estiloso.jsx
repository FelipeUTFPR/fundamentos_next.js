import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso(){
    return(
        <div className={styles.roxo}>
        {/* Cria um link de retorno par ao index */}
        <Link href="/">voltar</Link>
        <h1>Estilo usando CSS Módulos</h1>

        </div>
    )
}