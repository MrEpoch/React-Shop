

export default function Item( { props } ) {
    return (
        <>
            <img src={props.path} />
            <h2>{props.title}</h2>
            <h1>{props.price}</h1>
        </>
    )
}