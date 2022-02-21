import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Layout(props){

    return(
        <div className={styles.layout}>
        <div className={styles.cabecalho}>
        {/* não achou o titulo ele vai colocar um valor padrão */}
        <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
        <Link href="/">Voltar</Link>

        </div>

        <div className={styles.conteudo}>
        {/* caso tenha sido referenciada dentro de algum componente Layout
        , aparecerá aqui */}
        {props.children}

        </div>

        </div>
    )
}