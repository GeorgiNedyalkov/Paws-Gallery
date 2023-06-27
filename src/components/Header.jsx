import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="h-16 flex items-center justify-center bg-green-300 mb-5 rounded-b-lg">
        <Link to="/">
          <h1 className="text-3xl font-bold align-bottom">Paws Gallery</h1>
        </Link>
      </nav>
    </header>
  );
}
