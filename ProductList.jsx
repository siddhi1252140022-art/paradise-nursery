import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // ==================== TROPICAL PLANTS ====================
  {
    id: 1,
    name: "Monstera",
    category: "Tropical Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 2,
    name: "Calathea",
    category: "Tropical Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85"
  },
  {
    id: 3,
    name: "Areca Palm",
    category: "Tropical Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
  },
  {
    id: 4,
    name: "Rubber Plant",
    category: "Tropical Plants",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683"
  },
  {
    id: 5,
    name: "Philodendron",
    category: "Tropical Plants",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1614594575662-8c0e3f4b1a20"
  },
  {
    id: 6,
    name: "Bird of Paradise",
    category: "Tropical Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },

  // ==================== SUCCULENTS ====================
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8e1b4f2"
  },
  {
    id: 8,
    name: "Jade Plant",
    category: "Succulents",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 9,
    name: "Echeveria",
    category: "Succulents",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 12,
    name: "String of Pearls",
    category: "Succulents",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },

  // ==================== FLOWERING PLANTS ====================
  {
    id: 13,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 14,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f"
  },
  {
    id: 15,
    name: "African Violet",
    category: "Flowering Plants",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 16,
    name: "Orchid",
    category: "Flowering Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1566907225477-1d3e7e1d7a1e"
  },
  {
    id: 17,
    name: "Begonia",
    category: "Flowering Plants",
    price: 21,
    image:
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9"
  },
  {
    id: 18,
    name: "Kalanchoe",
    category: "Flowering Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1455582916367-25f75b8b8115"
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
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  const categories = [
    "Tropical Plants",
    "Succulents",
    "Flowering Plants"
  ];

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
          Explore our beautiful collection of
          houseplants.
        </p>

        {/* Plant Categories */}
        {categories.map((category) => (
          <section
            key={category}
            className="plant-category"
          >

            <h2>{category}</h2>

            <div className="product-grid">

              {plants
                .filter(
                  (plant) =>
                    plant.category === category
                )
                .map((plant) => (
                  <div
                    className="product-card"
                    key={plant.id}
                  >

                    {/* Plant Image */}
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width="200"
                      height="200"
                    />

                    {/* Plant Name */}
                    <h3>{plant.name}</h3>

                    {/* Plant Price */}
                    <p>
                      Price: ${plant.price}
                    </p>

                    {/* Add To Cart */}
                    <button
                      onClick={() =>
                        handleAddToCart(plant)
                      }
                      disabled={addedItems.includes(
                        plant.id
                      )}
                    >
                      {addedItems.includes(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>

                  </div>
                ))}

            </div>

          </section>
        ))}

      </main>
    </div>
  );
}

export default ProductList;
