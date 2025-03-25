import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-6">
      <h1 className="text-9xl font-bold tracking-tight">404</h1>
      <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg mt-2 opacity-70">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-8 py-3 text-lg font-medium text-white bg-gray-900 rounded-md transition-all duration-300 hover:bg-gray-700 hover:scale-105">
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
