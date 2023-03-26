

export default function Item(props) {
    return (
        <div>
            <img src={props.path} />
            <h2>{props.name}</h2>
        </div>
    )
}