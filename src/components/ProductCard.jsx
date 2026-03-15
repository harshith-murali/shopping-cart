import { FaShoppingCart, FaStar } from "react-icons/fa";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col">

      {/* Product Image */}
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain h-full p-4"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">

        {/* Category */}
        <span className="text-xs uppercase tracking-wide text-gray-500 mb-1">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-700">
          <FaStar className="text-yellow-500" />
          <span>{product.rating}</span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-green-600 mb-4">
          ${product.price}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="mt-auto flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          <FaShoppingCart />
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;