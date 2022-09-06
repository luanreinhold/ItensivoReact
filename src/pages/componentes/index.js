import './index.scss'
import Card from '../../components/cardComponente'
import CardCapy from '../../components/cardCapybara'


export default function Componentes () {


    return (


        <main className="pageComponente">
            <div className='titulo'><h1>Estudando ReactJS | Componentes </h1></div>

            <section className="row">
                <div>
                    <Card orientacao='flexboxrow'/>
                    <Card orientacao='flexboxcolumn'/>
                    <Card orientacao='flexboxreverse'/>
                </div>

                <div className='card-capy'>
                    <CardCapy cor='roxo' nome='Jaqueline' hobbie='Gatos' img='https://i.pinimg.com/736x/aa/4c/db/aa4cdb1225357b42b3fa034d78f4f070.jpg' ></CardCapy>
                    <CardCapy/>
                    <CardCapy/>
                    <CardCapy/>

                    
                </div>

            </section>



            
         

        </main>

    )
}