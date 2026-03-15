import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function CartItem({ item, onUpdateQuantity, onRemoveFromCart }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-gray-800">{item.title}</h4>
        <p className="text-green-600 font-medium">${item.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            <FaMinus size={12} />
          </button>

          <span className="font-semibold text-gray-700">
            {item.quantity}
          </span>

          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemoveFromCart(item.id)}
        className="text-red-500 hover:text-red-700 transition text-lg"
      >
        <FaTrash />
      </button>

    </div>
  );
}

export default CartItem;