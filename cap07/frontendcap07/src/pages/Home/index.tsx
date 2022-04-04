import  MainImage from 'assets/images/car-header.png';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho.
            </p>
          </div>
        </div>
        <div className="home-image-container">
            <img className='home-image-container' src={MainImage} alt="Imagem de um carro" />
        </div>
      </div>
      <div className='home-button-container'>
        <Link to="cars" className='btn col-md-2'>VER CATÁLAGO</Link>
        <p className='col-md-4'>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
