import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: (item.quantity || 1) + 1
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: (item.quantity || 1) - 1
      })
    );
  };

  const deleteItem = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      {/* Shopping Cart Page */}
      <main className="cart-container">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty</h2>

            <a href="/plants">
              <button>Continue Shopping</button>
            </a>
          </div>
        ) : (
          <div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >

                {/* Plant Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  width="120"
                  height="120"
                />

                <div className="cart-item-details">

                  {/* Plant Name */}
                  <h2>{item.name}</h2>

                  {/* Unit Price */}
                  <p>
                    Unit Price: ${item.price}
                  </p>

                  {/* Quantity */}
                  <p>
                    Quantity: {item.quantity || 1}
                  </p>

                  {/* Total Cost for This Plant */}
                  <p>
                    Total: $
                    {item.price * (item.quantity || 1)}
                  </p>

                  {/* Decrease Quantity */}
                  <button
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>

                  <span>
                    {" "}
                    {item.quantity || 1}
                    {" "}
                  </span>

                  {/* Increase Quantity */}
                  <button
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>

                  {/* Delete Plant */}
                  <button
                    onClick={() => deleteItem(item)}
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="cart-summary">

              {/* Total Cart Amount */}
              <h2>
                Total Cart Amount: ${totalAmount}
              </h2>

              {/* Checkout */}
              <button
                onClick={() => alert("Coming Soon")}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <a href="/plants">
                <button>Continue Shopping</button>
              </a>

            </div>

          </div>
        )}

      </main>
    </div>
  );
}

export default CartItem;
