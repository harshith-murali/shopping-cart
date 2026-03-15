import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  // Sync cart across tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        try {
          const updatedCart = event.newValue ? JSON.parse(event.newValue) : [];
          setCart(updatedCart);
        } catch (error) {
          console.error("Error parsing cart from localStorage:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity.toFixed(2),
    0,
  );

  return { cart, total, addToCart, removeFromCart, updateQuantity };
}
