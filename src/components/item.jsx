

export default function Item(props) {
    return (
        <>
            <img src={props.props.path} />
            <h2>{props.props.title}</h2>
        </>
    )
}