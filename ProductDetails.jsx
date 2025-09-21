import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../utils/Constants';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 hover:text-blue-700 flex items-center"
        >
          ← Back
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-2">
                Category: <span className="font-semibold">{product.category}</span>
              </p>
              <p className="text-3xl font-bold text-blue-600 mb-6">
                ${product.price}
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate('/products')}
                  className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;