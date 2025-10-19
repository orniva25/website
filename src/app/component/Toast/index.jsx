const Toast = ({ message, type, onClose }) => {
    return (
      <div
        className={`fixed top-5 right-5 z-50 px-6 py-3 rounded shadow-md text-white ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-4 text-white hover:text-gray-200"
          >
            ✖
          </button>
        </div>
      </div>
    );
  };
  