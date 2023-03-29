import { useLocation } from "react-router-dom";

export default function SelectedItem( ) {
    
    let { state } = useLocation();
    
    return (
        <div className="selected">
            <div className="item-info">
                <img src={state.path} alt={state.title} />
                <h3>{state.title}</h3>
                <p>{state.desc}</p>
            </div>
            <div className="btns-buy">
                <button className="add-and-pay">Add and Buy</button>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    )
}