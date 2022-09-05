
import { useEffect, useState } from 'react'
import './index.scss'
import ItemTarefa from '../../components/itemTarefa'


export default function Renderizacao ( ) {

    const [exibir, setExibir] = useState(false)

    function cliqueVer () {
        setExibir(true)
    }

    const [exibirQuiz, setExibirQuiz] = useState(false)
    const [quizInput, setQuizInput] = useState('')
    

    function Acertou () {
        if(quizInput === "Frank" ) {
            setExibirQuiz(true)
        } else {
            setExibirQuiz(false)
        }
    }

    //
    const [tarefa, setTarefa] = useState('');
    const [lista, setLista] = useState([]);

    function addTarefa() {
        let novaLista = [...lista, tarefa];
        setLista(novaLista);
        setTarefa('');
    }

    function removerTarefa(t) {
        let novaLista = lista.filter(item => item !== t);
        setLista(novaLista);
    }


    //

    const [tarefa1, setTarefa1] = useState('');
    const [listaTarefas, setListaTarefas] = useState([])

    function addLista () {
        
        setListaTarefas(tarefa1)
    }


    useEffect( () => {
        Acertou()
    }, [quizInput])

    

    return (
        
        <main className='page'>

            <section className='box-text'>
                <h1>Biscoitinho da Sorte</h1>
                <button onClick={cliqueVer}>Visualizar</button>
                {exibir === true && 
                    <div>
                        <p>O ciclo da vida e da morte continua, nós viveremos, eles morrerão</p>
                    </div>
                }
            </section>

            <section className='box-quiz'>
                <h3>Quiz Donnie Darko</h3>
                <div className='container-row'>
                    {exibirQuiz === false && 
                        <div>
                            <img id='coelho' src='https://darkside.vteximg.com.br/arquivos/ids/167139-1000-1000/89-donnie-darko-8.jpg?v=636802491244430000' alt='coelho'/>
                        </div>
                    } {exibirQuiz === true &&
                        <div>
                            <audio autoPlay><source src='./madworldmp3.mp3' type='audio/mpeg' /> </audio>
                            <img id='coelho' src='https://toppng.com/uploads/preview/donnie-darko-rabbit-easter-11563168279wmjory5kqb.png' alt='coelho'/>
                        </div>
                      }
                    <div className='container-columm'>
                        <p>Qual o nome do coelho fantasiado? </p>
                        <input type='text' placeholder='Digite Aqui' value={quizInput} onChange={e => setQuizInput(e.target.value)} />
                    </div>

                </div>
            </section>

            <section className='pagina-tarefas'>
            <h1> Tarefas </h1> 

            <div>
                Nova Tarefa: <input type='text' value={tarefa} onChange={e => setTarefa(e.target.value)} /> 
                
                <button onClick={addTarefa}> Adicionar </button>
            </div>

            <ul>
                {lista.map(item => 
                    <ItemTarefa
                        key={item}
                        item={item}
                        removerTarefa={removerTarefa} />
                )}
            </ul>

        </section>


        <section>
                Digite uma tarefa
                <input type="text" name="Input Tarefa" id="" value={tarefa1} onChange={e => setTarefa1(e.target.value)} />
                {tarefa1}
                <button onClick={addLista}>Adicionar</button>

                <ul>
                    {listaTarefas.map (tarefa => 
                        <li>{tarefa}</li>
                        
                        )}

                </ul>

        </section>
        </main>
    )


   
  


    
}

