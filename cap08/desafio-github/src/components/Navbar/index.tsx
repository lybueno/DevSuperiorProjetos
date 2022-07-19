import './styles.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4 className='navbar-h4'>Github API</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;