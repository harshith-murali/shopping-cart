import CartItem from "./CartItem.jsx";

function Cart({ cart, onUpdateQuantity, onRemoveFromCart, total }) {

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 text-sm">
          Add some products to your cart to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col h-full">

      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Shopping Cart
      </h2>

      {/* Items */}
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t my-6"></div>

      {/* Total Section */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold text-gray-700">Total</span>
        <span className="text-xl font-bold text-green-600">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-200">
        Checkout
      </button>

    </div>
  );
}

export default Cart;