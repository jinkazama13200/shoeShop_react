import React from "react";
import ShoeShop from "./components/ShoeShop";
import data from "./data/data.json";

export default function MyLayout() {
  return (
    <div className="container">
      <ShoeShop />
    </div>
  );
}
