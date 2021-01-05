function ProductCard({ name, category, image, onAddWishlist }) {

  const addToWishlist = () => {
    onAddWishlist({name: name, category: category})
  };

  return (
    <button onClick={addToWishlist} className="flex-shrink-0 m-6 relative bg-white overflow-hidden rounded-lg max-w-xs shadow-lg transition duration-200 hover:shadow-2xl focus:outline-none focus:ring focus:border-green-300">
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block w-40 h-40">
          <img
            className="relative mx-auto w-40 h-40 object-fit"
            src={image}
            alt={"image of a " + name + " plant"}
          />
        </div>
      </div>
      <div className="relative px-6 pb-6 mt-6">
        <span className="block text-green-800 opacity-75 -mb-1 capitalize text-left">{category}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl capitalize ">{name}</span>
          <span className="block bg-white rounded-full border border-green-800 text-green-800 text-xs font-bold leading-none flex items-center h-8 w-8 fill-current">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
} //ProductCard

export default ProductCard;
