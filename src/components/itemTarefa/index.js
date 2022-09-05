export default function ItemTarefa(props) {

    return (
        <li>
            <span> {props.item} </span>                        
            <span onClick={e => props.removerTarefa(props.item)}> (x) </span>
        </li>
    )
}