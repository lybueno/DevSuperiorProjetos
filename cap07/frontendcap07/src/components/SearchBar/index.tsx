import './styles.css';

const SerarchBar = () => {

    return (
        <div className='search-container'>
            <div className="search-container-content">
                <input placeholder="Digite sua busca"></input>
                <button>BUSCAR</button>
            </div>
        </div>
    );
}

export default SerarchBar;