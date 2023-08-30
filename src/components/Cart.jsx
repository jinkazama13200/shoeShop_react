import React from "react";
import "../scss/_cart.scss";
import numberFormat from "../NumberFormat";

export default function Cart({
  cartItems,
  onCloseCart,
  onRemoveItem,
  onSuccessPurchase,
  totalPrice,
}) {
  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-header d-flex justify-content-between align-items-center">
          <p className="cart-title">Your Cart</p>
          <p onClick={() => onCloseCart()} className="cart-icon-close">
            X
          </p>
        </div>
        <div className="cart-body">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((value) => {
                return (
                  <div
                    key={value.id}
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="cart-img">
                      <img
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        src={value.image}
                        alt={value.name}
                      />
                    </div>
                    <div className="cart-info">
                      <p className="name">
                        {value.name}{" "}
                        <span
                          onClick={() => onRemoveItem(value.id)}
                          className="removeBtn"
                        >
                          remove
                        </span>
                      </p>
                      <p className="price text-muted">
                        {numberFormat(value.price)}
                      </p>
                      <p className="quantity">Quantity:{value.quantity}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="empty-text text-muted">Your Cart Is Empty</p>
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className="cart-footer d-flex flex-column p-3">
            <div className="d-flex justify-content-between align-items-center">
              <p className="total-price m-0">Total</p>
              <p className="m-0 text-muted">{numberFormat(totalPrice)}</p>
            </div>
            <button
              onClick={() => onSuccessPurchase()}
              className="btn btn-dark w-100 mt-3"
            >
              Purchase
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
