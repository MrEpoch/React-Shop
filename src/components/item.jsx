

export default function Item(props) {
    return (
        <div>
            <img src={props.props.path} />
            <h2>{props.props.title}</h2>
        </div>
    )
}