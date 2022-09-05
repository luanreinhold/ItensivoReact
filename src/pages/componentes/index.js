import './index.scss'
import Card from '../../components/cardComponente'



export default function Componentes () {


    return (


        <main className="page">
            <div className='titulo'><h1>Estudando ReactJS | Componentes </h1></div>

            <Card orientacao='flexboxrow'/>
            <Card orientacao='flexboxcolumn'/>
            <Card orientacao='flexboxrowreverse'/>
            

        </main>

    )
}