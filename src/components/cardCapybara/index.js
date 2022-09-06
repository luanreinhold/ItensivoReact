import { useState } from 'react'
import './index.scss'

export default function CardCapy (props) {

    const [visualizarCor, setVisualizarCor] = useState(false)

    function onClick () {
        setVisualizarCor(true)
    }


    return (

        <main className="pagec">
            <section className="boxc">
                <img src={props.img} alt="" />
                <p>Nome: {props.nome}</p>
                <p>Hobbie: {props.hobbie}</p>
                <button onClick={onClick} className="capy">Cor Fav.</button>
                {visualizarCor === true && <div>{props.cor}</div>}
            </section>
        </main>

    )


}