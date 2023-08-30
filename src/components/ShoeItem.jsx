import React, { useRef } from "react";
import "../scss/_shoeItem.scss";
import numberFormat from "../NumberFormat";

export default function ShoeItem({
  item,
  onAddToCart,
  getItemQuantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onSelectedItem,
}) {
  const quantity = getItemQuantity(item);
  const imgRef = useRef();
  return (
    <>
      <div className="card mt-4">
        <div className="card-header">
          <div onClick={() => imgRef.current.click()} className="card-overlay">
            <p>Click on the image to show details</p>
            <button
              hidden
              ref={imgRef}
              className="detailsBtn"
              onClick={() => onSelectedItem(item)}
            >
              More Details
            </button>
          </div>
          <img className="card-img" src={item.image} alt={item.name} />
        </div>
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <p className="card-name">{item.name}</p>
            <p className="card-price text-muted">{numberFormat(item.price)}</p>
          </div>

          <div className="mt-auto">
            {quantity === 0 ? (
              <button
                onClick={() => onAddToCart(item)}
                className="btn btn-dark w-100"
              >
                Add To Cart
              </button>
            ) : (
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    onClick={() => onDecreaseQuantity(item)}
                    className="btn btn-dark"
                  >
                    -
                  </button>
                  <span className="mx-4">{quantity}</span>
                  <button
                    onClick={() => onIncreaseQuantity(item)}
                    className="btn btn-dark"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
