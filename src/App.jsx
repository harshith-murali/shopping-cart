import "./App.css";
import { useEffect, useState } from "react";
import { useCart } from "./hooks/useCart.js";
import { fetchProducts } from "./data/products.js";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const { cart, total, addToCart, removeFromCart, updateQuantity } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-black text-white py-6 shadow-md">
        <h1 className="text-3xl font-bold text-center tracking-wide">
          Harshith's Mega Mart
        </h1>
      </header>

      <main className="max-w-7xl mx-auto p-6">

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Products */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Products</h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => addToCart(product)}
                />
              ))}
            </section>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <Cart
              cart={cart}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;