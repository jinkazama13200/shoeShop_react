import React, { useState } from "react";
import ShoeList from "./ShoeList";
import Cart from "./Cart";
import data from "../data/data.json";
import ShoeDetails from "./ShoeDetails";
export default function ShoeShop() {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
    setIsOpenModal(true);
    console.log(item);
  };

  const totalCount = cartItems.reduce((result, value) => {
    return result + value.quantity;
  }, 0);
  const totalPrice = cartItems.reduce((result, value) => {
    return result + value.quantity * value.price;
  }, 0);

  const getItemQuantity = (item) => {
    return cartItems.find((value) => value.id === item.id)?.quantity || 0;
  };

  const handleAddToCart = (item) => {
    const findItemById = cartItems.find((value) => value.id === item.id);
    if (!findItemById) {
      const getItemQuantity = { ...item, quantity: 1 };
      setCartItems([...cartItems, getItemQuantity]);
    } else {
      const newItem = cartItems.map((value) => {
        if (value.id === item.id) {
          return { ...value, quantity: value.quantity + 1 };
        }
        return value;
      });
      setCartItems(newItem);
    }
  };
  const handleIncreaseQuantity = (item) => {
    const findItemById = cartItems.find((value) => {
      return value.id === item.id;
    });
    if (findItemById) {
      const increaseQuantity = cartItems.map((value) => {
        if (value.id === item.id) {
          return { ...value, quantity: value.quantity + 1 };
        }
        return value;
      });
      setCartItems(increaseQuantity);
    }
  };
  const handleDecreaseQuantity = (item) => {
    const findItemById = cartItems.find((value) => {
      return value.id === item.id;
    });
    if (findItemById?.quantity === 1) {
      const removeItem = cartItems.filter((value) => {
        return value.id !== item.id;
      });
      setCartItems(removeItem);
    } else {
      const DecreaseQuantity = cartItems.map((value) => {
        if (value.id === item.id) {
          return { ...value, quantity: value.quantity - 1 };
        }
        return value;
      });
      setCartItems(DecreaseQuantity);
    }
  };
  const handleRemoveItem = (item) => {
    const removeItem = cartItems.filter((value) => {
      return value.id !== item;
    });
    setCartItems(removeItem);
  };
  const handleSuccessPurchase = () => {
    const randomOrderNumber = Math.floor(Math.random() * 1e6);
    alert(
      `Purchase Successfully.\nYour Order Is #${randomOrderNumber}.\nThanks For Shopping!!!`
    );
    setCartItems([]);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <div className="header d-flex align-items-center justify-content-between">
        <h1 className="header-title mt-3">
          My{" "}
          <span
            style={{
              padding: "5px 10px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Shoe
          </span>{" "}
          Shop
        </h1>
        <button onClick={() => setIsOpen(true)} className="btn btn-dark px-5">
          Cart({totalCount})
        </button>
      </div>
      <ShoeList
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        getItemQuantity={getItemQuantity}
        onAddToCart={handleAddToCart}
        products={data}
        cartItems={cartItems}
        onSelectedItem={handleSelectedItem}
      />
      {isOpen && (
        <Cart
          totalPrice={totalPrice}
          onRemoveItem={handleRemoveItem}
          onCloseCart={handleCloseCart}
          onSuccessPurchase={handleSuccessPurchase}
          cartItems={cartItems}
        />
      )}
      {isOpenModal && (
        <ShoeDetails
          onCloseModal={handleCloseModal}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
}
