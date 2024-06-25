import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-12">
      <h1 className="text-2xl text-orange-600">Error occured!</h1>
      <p>can not find page</p>
      <Link to="/" className="text-blue-600 hover:underline">go back</Link>
    </div>
  );
}

export default ErrorPage