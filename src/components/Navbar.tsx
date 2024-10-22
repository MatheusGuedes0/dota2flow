import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-red-600 p-4 text-white">
      <ul className="flex space-x-4  w-full">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/heroes" className="hover:text-gray-300">
            Heróis
          </Link>
        </li>
        <li>
          <Link to="/items" className="hover:text-gray-300">
            Itens
          </Link>
        </li>
        <li>
          <Link to="/matches" className="hover:text-gray-300">
            Partidas
          </Link>
        </li>
      </ul>
    </nav>
  );
}
