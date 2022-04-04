import './styles.css';

import CarImg from 'assets/images/car-red.png';

const CarCard = () => {

    return (

        <div className='base-card product-card'>
            <div className='card-top-container'>
                <img src={CarImg} alt="Imagem de um carro" />
            </div>
            <div className='card-bottom-container'>
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi.</p>
                <div className='button'>
                    <p>COMPRAR</p>
                </div>
            </div>
        </div>

    );
}

export default CarCard;