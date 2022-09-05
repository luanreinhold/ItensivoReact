
import { useState } from 'react';
import './App.scss';

function VariavelEstado() {

  const [texto, setTexto] = useState('Default Text')

  const [textoDigitado, setTextoDigitado] = useState('')
  const [textoVisualizado, setTextoVisualizado] = useState('Clique no botão para visualizar o texto')


  const [numero, setNumero] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  // formulario //

  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)

  

  const [nomev, setNomev] = useState('')
  const [datav, setDatav] = useState('')
  const [alturav, setAlturav] = useState(0)
  const [pesov, setPesov] = useState(0)

  const [imc, setImc] = useState(0)

  function cliqueRevelar() {
    setNomev(nome)
    setDatav(data)
    setAlturav(altura)
    setPesov(peso)
    calculoImc()
  }

  function calculoImc () {
    const c = peso / (altura * altura)
    setImc(c.toFixed(2))
  }



  function cliqueSomar () {
    return setResultado(numero+numero2)
  }


  function visualizarTexto () {
    setTextoVisualizado(textoDigitado)
  }



  return (
    <div className="main-container">

      <h1>Estudo ReactJS | Variável de Estado</h1>
      
      <section className='container'>
        <h3>{texto}</h3>
        <input type='text' placeholder='digite aqui' onChange={e => setTexto(e.target.value)}/>
      </section>

      <section className='container'>
        <h3>{textoVisualizado}</h3>
        <input type='text' placeholder='digite aqui' onChange={e => setTextoDigitado(e.target.value)}/>
        <button onClick={visualizarTexto}>Atualizar</button>
      </section>

      <section className='container'>
        <h3>Somar dois Numeros</h3>
        <input type='text' className='inputnumber' onChange={e => setNumero(Number(e.target.value))}/>
        <input type='text' className='inputnumber' onChange={e => setNumero2(Number(e.target.value))}/>
        <button onClick={cliqueSomar}>Calcular</button>
        {resultado}

      </section>

      <section className='container-aboutme'>
        <h3>Sobre mim</h3>

        <div>
          <input type='text' placeholder='Informe seu nome' id='nome' onChange={e => setNome(e.target.value)}/>
          <input type='date' id='data' onChange={e => setData(e.target.value)}/>
        </div>

        <div>
          <input type='text' id='cn' placeholder='altura' onChange={e => setAltura(Number(e.target.value))}/>
          <input type='text' id='cn' placeholder='peso'   onChange={e => setPeso(Number(e.target.value))}/>
          <input type='checkbox' />
          <button onClick={cliqueRevelar}>Visualizar</button>
        </div>

        <h3>Ficha</h3>
        nome: {nomev} <br />
        nascimento: {datav} <br />
        peso: {pesov} <br /> 
        altura: {alturav}  <br/>
        imc: {imc}
      </section>

    </div>
  );
}

export default VariavelEstado;
