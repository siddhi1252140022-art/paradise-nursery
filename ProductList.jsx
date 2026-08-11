import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Low Light",
    price: 18,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Flowering",
    price: 22,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    name: "Monstera",
    category: "Tropical",
    price: 30,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8e1b4f2"
  },
  {
    id: 5,
    name: "Pothos",
    category: "Low Light",
    price: 20,
    image: "https://images.unsplash.com/photo-1614594575662-8c0e3f4b1a20"
  },
  {
    id: 6,
    name: "Calathea",
    category: "Tropical",
    price: 28,
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((previous) => [
      ...previous,
      plant.id
    ]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="/cart">
            Cart 🛒 ({cartCount})
          </a>
        </div>
      </nav>

      {/* Product Listing */}
      <main id="plants">
        <h1>Paradise Nursery Plants</h1>

        <p>
          Explore our beautiful collection of houseplants.
        </p>

        <div className="product-grid">

          {plants.map((plant) => (
            <div
              className="product-card"
              key={plant.id}
            >

              <img
                src={plant.image}
                alt={plant.name}
                width="200"
                height="200"
              />

              <h3>{plant.name}</h3>

              <p>
                Category: {plant.category}
              </p>

              <p>
                Price: ${plant.price}
              </p>

              <button
                onClick={() => handleAddToCart(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id)
                  ? "Added to Cart"
                  : "Add to Cart"}
              </button>

            </div>
          ))}

        </div>
      </main>

    </div>
  );
}

export default ProductList;
