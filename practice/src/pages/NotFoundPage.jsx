import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2 bg-blue-50">
      404 not found
      <Link to="/">Home from link</Link>
    </div>
  );
}

export default NotFoundPage;
