import React from 'react'

const BestSellers = () => {
    const [liked, setLiked] = useState(false);
    
    const toggleLike = () => {
      setLiked(!liked);
    };
  
  return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img src={imgUrl} alt={name} className="w-full h-64 object-cover" />
            <button
              onClick={toggleLike}
              className={`absolute top-2 right-2 p-2 rounded-full 
                ${liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {liked ? '❤️' : '♡'}
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600">${price}</p>
            <p className="mt-2 text-gray-600 text-sm">{description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      );
    };
    
export default BestSellers
