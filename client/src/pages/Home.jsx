import { Link } from "react-router";
import "../App.css";

export default function Home() {
  return (
    <>
      <h1>This is the home page!</h1>
      <Link to="/Shop">
        <div className="inline-block text-indigo-600 font-[600] italic group">
          See Catalogue!
        </div>
      </Link>
    </>
  );
}
