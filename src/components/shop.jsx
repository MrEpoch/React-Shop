import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./item";
import uniqid from "uniqid";
import GPU from "./graphicCard.jpg";
import Charger from "./charger.jpg";
import Motherboard from "./motherboard.jpg";
import Laptop from "./laptop.jpg";

export default function Shop() {

  const items = [{ key: uniqid(), price: "599$" , title: "High-quality GPU", path: GPU, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quasi harum repellat expedita explicabo alias, tempore sit fuga amet dolorem. Odio error magnam facere commodi dignissimos, explicabo culpa cumque." }, { key: uniqid(), price: "1699$" , title: "New fast laptop", path: Laptop, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quasi harum repellat expedita explicabo alias, tempore sit fuga amet dolorem. Odio error magnam facere commodi dignissimos, explicabo culpa cumque." }, { key: uniqid(), price: "400$" , title: "Stable Motherboard", path: Motherboard, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quasi harum repellat expedita explicabo alias, tempore sit fuga amet dolorem. Odio error magnam facere commodi dignissimos, explicabo culpa cumque." }, { key: uniqid(), price: "29$" , title: "Smart charger", path: Charger, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione quasi harum repellat expedita explicabo alias, tempore sit fuga amet dolorem. Odio error magnam facere commodi dignissimos, explicabo culpa cumque." }]
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
          <Link key={uniqid()} state={ArrItem} to={`/shop/${ArrItem.key}`}><Item props={ArrItem} /> </Link>
        ))
      }
    </main>
  )
}