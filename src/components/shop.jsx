import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./item";
import uniqid from "uniqid"

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  async function fetchInfo() {
    const get = await fetch("https://api.storerestapi.com/products?limit=10", {mode: "cors"})
    const load = await get.json();
    setItems(load.data);
    console.log(load.data)
  }

  return (
    <main>
      {
        items.map((item) => (
          <h3 key={uniqid()}>
            {item.title}
          </h3>
        ))
      }
    </main>
  );
}
