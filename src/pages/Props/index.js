import { useEffect, useState } from 'react';
import './index.scss';
import Box from '../../components/boxProps';

function App() {


  //
  //


  const [titulo, setTitulo] = useState('')
  const [imagem, setImagem] = useState('')
  const [descricao, setDescricao] = useState('')

  const [titulo2, setTitulo2] = useState('')
  const [imagem2, setImagem2] = useState('')
  const [descricao2, setDescricao2] = useState('')



  return (
    <div className="App">



      <section className="faixa-props">
          <h1>Estudando ReactJS | Props</h1>
          <div className='fb-row input-box'>
                <div className='fb-column'>   
                    <input type="text" name="titulo" placeholder='titulo 01' onChange={e => setTitulo(e.target.value)}/>
                    <input type="text" name="titulo" placeholder='url'       onChange={e => setImagem(e.target.value)}/>
                    <input type="text" name="titulo" placeholder='descrição' onChange={e => setDescricao(e.target.value)}/>
                </div>

                <div className='fb-column'>
                    <input type="text" name="titulo" placeholder='titulo 02' onChange={e => setTitulo2(e.target.value)}/>
                    <input type="text" name="titulo" placeholder='url 02'       onChange={e => setImagem2(e.target.value)}/>
                    <input type="text" name="titulo" placeholder='descrição 02' onChange={e => setDescricao2(e.target.value)}/>
                </div>

          </div>

         


          <Box titulo={titulo} descricao={descricao} imagem={imagem}/>
          <Box titulo={titulo2} descricao={descricao2} imagem={imagem2}/>

      </section>

     

    </div>
  );
}

export default App;
