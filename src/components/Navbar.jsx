import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <Link to="/pricing">Pricing</Link>
        <Link to="/product">Produvt</Link>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Navbar;
