import './styles.css';
import CarCard from 'components/CarCard';
import SerarchBar from 'components/SearchBar';

import './styles.css';

const Catalogo = () => {
  return (
    <div className='catalogo'>
        <div className='search'>
            <SerarchBar />
        </div>
        <div className='container my-4'>
            <div className='row'>
                <div className='col-sm-6 col-lg-4 col-xl-3'>
                    <CarCard />
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3'>
                    <CarCard />
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3'>
                    <CarCard />
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3'>
                    <CarCard />
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3'>
                    <CarCard />
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3'>
                    <CarCard />
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3'>
                    <CarCard />
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-3'>
                    <CarCard />
                </div>
            </div>
        </div>
    </div>
  );

};

export default Catalogo;  