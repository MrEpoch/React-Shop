import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./item";
import uniqid from "uniqid";
import GPU from "./graphicCard.jpg";
import Charger from "./charger.jpg";
import Motherboard from "./motherboard.jpg";
import Laptop from "./laptop.jpg";

export default function Shop() {

  const [items, setItems] = useState([{ title: "High-quality GPU", path: GPU }, { title: "New fast laptop", path: Laptop }, { title: "Stable Motherboard", path: Motherboard }, { title: "Smart charger", path: Charger }]) 

  return (
    <main>
      <Item props={items[0]} />
      <Item props={items[0]} />
      <Item props={items[0]} />
      <Item props={items[0]} />
      <Item props={items[1]} />
      <Item props={items[1]} />
      <Item props={items[1]} />
      <Item props={items[1]} />
      <Item props={items[2]} />
      <Item props={items[2]} />
      <Item props={items[2]} />
      <Item props={items[2]} />
      <Item props={items[3]} />
      <Item props={items[3]} />
      <Item props={items[3]} />
      <Item props={items[3]} />
    </main>
  );
}
