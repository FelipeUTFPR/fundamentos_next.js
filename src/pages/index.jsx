import Link from 'next/link'

export default function Início(){
  
  return (
    <div>
    {/* cria um link de navegação para a página estiloso */}
      <Link href="/estiloso">
        Estilo
      </Link>
    </div>

  )
}