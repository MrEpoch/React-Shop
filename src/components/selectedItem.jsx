import { useEffect } from "react"
import { useLocation } from "react-router-dom";

export default function SelectedItem( ) {
    
    let { state } = useLocation();

    useEffect(() => {
        console.log(state);
    })
    
    return (
        <div className="selected">
            <img src={state.path} alt={state.title} />
            <h3>{state.title}</h3>
        </div>
    )
}