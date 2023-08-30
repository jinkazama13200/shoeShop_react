import React from "react";
import ShoeItem from "./ShoeItem";

export default function ShoeList({
  products,
  onAddToCart,
  getItemQuantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onSelectedItem,
}) {
  const handleSelectedItem = (item) => {
    onSelectedItem(item);
  };
  return (
    <div className="row">
      {products.map((value) => {
        return (
          <div key={value.id} className="col-4">
            <ShoeItem
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
              getItemQuantity={getItemQuantity}
              item={value}
              onAddToCart={onAddToCart}
              onSelectedItem={handleSelectedItem}
            />
          </div>
        );
      })}
    </div>
  );
}
