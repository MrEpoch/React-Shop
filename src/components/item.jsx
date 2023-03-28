

export default function Item(props) {
    return (
        <div>
            <img src={props.path} />
            <h2>{props.title}</h2>
        </div>
    )
}