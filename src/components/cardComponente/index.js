import './index.scss'

export default function Card (props) {


    return (


        <div className="main">

            <div className="box">
                <h3>Seção 01</h3>

                <div className={props.orientacao}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.</p>
                    <img src="./imagemQuadradoBranco.png" alt="" />
                </div>

            </div>

        </div>

    )
}