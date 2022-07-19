import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <div>
            <h1>Desafio Guthub API</h1>
            <p>
              Bootcamp Spring React - DevSuperior
            </p>            
            <Link to="search" className='btn col-md-2'>Começar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;