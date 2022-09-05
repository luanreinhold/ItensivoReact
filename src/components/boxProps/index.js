import './index.scss'

export default function Box (props) {

    return (
        <main className="formatacaobox">

            <div className="box">
                {props.titulo}
                <div className='container-fb'>

                    <div className='container-texto'>
                       <p>{props.descricao}</p> 
                    </div>
                    <img src={props.imagem} alt="imagemprops" />
                </div>

            </div>

        </main>
    )

}