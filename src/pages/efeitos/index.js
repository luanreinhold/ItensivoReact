
import { useEffect, useState } from 'react'
import './index.scss'
import Box from '../../components/boxProps'


export default function Efeito ( ) {

    //


    const [situacaoFarol, setSituacaoFarol] = useState('')

    const [farolVerde, setFarolVerde] = useState('default')
    const [farolAmarelo, setFarolAmarelo] = useState('default')
    const [farolVermelho, setFarolVermelho] = useState('default')
    
    function mudarfarol () {

        if(farolVerde === 'verde') {
            setSituacaoFarol('Pode passar')
        } if(farolAmarelo === 'amarelo') {
            setSituacaoFarol('Aguarde')
        } if (farolVermelho ==='vermelho') {
            setSituacaoFarol('Não ultrapasse')
        }
    }

    useEffect(() => {
        mudarfarol()
    }, [farolVerde, farolAmarelo, farolVermelho])


    //

    const [nota, setNota] = useState(0)
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)

    const [situacao, setSituacao] = useState('situação')

    function verificarTodas() {
        let calc = (nota1+nota2+nota3) / 3 
        if (calc >= 5) {
            setSituacao('Passou')
        } else if(calc >= 3 && calc <= 5) {
            setSituacao('Recuperação')
        } else {setSituacao('Aluno Reprovado')}
    }

    function verificarNota() {
        if (nota >= 5) {
            setSituacao('Passou')
        } else if(nota >= 3 && nota <= 5) {
            setSituacao('Recuperação')
        } else {setSituacao('Aluno Reprovado')}
    }


    useEffect(( ) => {
        verificarNota()
    }, [nota])

    useEffect(() => {
        verificarTodas()
    }, [nota1, nota2, nota3])

    return (
        
        <main className='page'>

            <section className='box-text'>
                <h3>Situação do Aluno</h3>
                <div>
                    <input type='text' placeholder='nota' onChange={e => setNota(Number(e.target.value))}/>
                    <div className='resp'>{situacao}</div>
                </div>
            </section>

            <section className='box-text'>

                <h3>Situação do Aluno</h3>
            <div className='container-column'>
                <input type='text' placeholder='nota' onChange={e => setNota1(Number(e.target.value))}/> <br></br>
                <input type='text' placeholder='nota' onChange={e => setNota2(Number(e.target.value))}/> <br></br>
                <input type='text' placeholder='nota' onChange={e => setNota3(Number(e.target.value))}/>
                        <div className='resp'>{situacao}</div>
            </div>

            </section>

            <section className='container-semaforo'>
                <div>
                    <h3>Semáforo</h3>
                    {situacaoFarol}
                </div>
               <div>
                    <div className='box-cores'>
                        <div className={farolVerde}     onClick={() => setFarolVerde('verde')}></div>
                        <div className={farolAmarelo}   onClick={() => setFarolAmarelo('amarelo')}></div>
                        <div className={farolVermelho}  onClick={() => setFarolVermelho('vermelho')}></div>
                    </div>
               </div>

            </section>




        </main>
    )


   
  


    
}

