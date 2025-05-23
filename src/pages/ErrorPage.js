import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content px-6 transition-colors duration-300">
      <h1 className="text-9xl font-bold tracking-tight text-error">404</h1>
      <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg mt-2 text-base-content/70">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-8 py-3 text-lg font-medium text-primary-content bg-primary rounded-md transition-all duration-300 hover:bg-primary-focus hover:scale-105">
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
