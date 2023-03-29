import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./item";
import uniqid from "uniqid";
import GPU from "./graphicCard.jpg";
import Charger from "./charger.jpg";
import Motherboard from "./motherboard.jpg";
import Laptop from "./laptop.jpg";

export default function Shop() {

  const [items, setItems] = useState([{ key: uniqid(), title: "High-quality GPU", path: GPU }, { key: uniqid(), title: "New fast laptop", path: Laptop }, { key: uniqid(), title: "Stable Motherboard", path: Motherboard }, { key: uniqid(), title: "Smart charger", path: Charger }]) 
  const Arr = [];

  function loadIt() {
    if (Arr.length < 16) {
      for (let i = 0; i < 16; i++) {
        Arr.push(items[i % 4])
      }
    }
  };
  loadIt();

  return (
    <main>
      {
        Arr.map(ArrItem => (
          <Link state={ArrItem} to={`/shop/${ArrItem.key}`}><Item props={ArrItem} /> </Link>
        ))
      }
    </main>
  )
}