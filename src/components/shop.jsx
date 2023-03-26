import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./item";

export default function Shop() {

    const [items, setItems] = useState([])

    useEffect(() => {
        const addItems = () => {
            function Datas(name, imgPath) {
                this.name = name;
                this.imgPath = imgPath
            }
            const list = items;
            while(items.length < 16) {
                list.push(new Datas("apple", "./applepath"));
                setItems(list)
            }
        }
        addItems();
        console.log(items)
    }, [items])

    return (
        <main>
            {items.map((item) => {
                return <Item props={item}/>
            })}
        </main>
    )
}