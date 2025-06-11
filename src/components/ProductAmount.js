const ProductAmount = ({ stock = 0, id, subAmount, manageAmount }) => {
  return (
    <div className="mt-4">
      <button
        name="decrease"
        onClick={(e) => manageAmount(e, id)}
        className="px-4 py-2 text-xl font-bold bg-gray-700 text-white hover:bg-black dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400 rounded-l shadow disabled:opacity-50"
        disabled={subAmount < 1}>
        -
      </button>
      <span className="px-6 py-2 border-t border-b text-lg font-medium bg-white text-gray-900 shadow-inner dark:bg-gray-700 dark:text-white">
        {subAmount}
      </span>
      <button
        name="increase"
        onClick={(e) => manageAmount(e, id)}
        className="px-4 py-2 text-xl font-bold bg-gray-700 text-white hover:bg-black dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400 rounded-r shadow disabled:opacity-50"
        disabled={subAmount >= stock}>
        +
      </button>
    </div>
  );
};

export default ProductAmount;
