import axios from "axios";
import ResultCard from "components/ResultCard";
import ResultCardLink from "components/ResultCardLink";
import { useState } from "react";
import './styles.css';

type FormData = {
  login: string;
}

type User = {
  avatar_url: string,
  html_url: string,
  followers: number,
  location: string,
  name: string
}

const SearchCard = () => {

    const [formData, setFormData] = useState<FormData>({
        login: ''
      })
    
      const [user, setUser] = useState<User>();
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setFormData( { ...formData, [name]: value } );
      }

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.login}`).then(
          response => {
            setUser(response.data);
            console.log(response.data);
          })
        .catch((error) => {
          setUser(undefined);
          console.log(error);
        });
      }

    return(
      <div className="search-container">
          <h3>Encontre um perfil Github</h3>
          <div className="search-input-btn">
            <form onSubmit={handleSubmit}>
              <div className="search-input">
                <input type="text" name='login' value={formData.login} placeholder="Usuário Github" onChange={handleChange} />
              </div>
              <div className="search-btn">
                <button type="submit" className="btn btn-primary search-button">Encontrar</button>
              </div>
            </form>
            {user &&
            <>
                <div className="result-container">
                  <div className="card-image">
                    <img src={user.avatar_url} alt="Imagem do usuario"/>
                  </div>
                  <div>
                    <div className="card-content">
                    <   h4>Informações</h4>
                        <ResultCardLink title="Perfil" description={user.html_url} />
                        <ResultCard title="Seguidores" description={user.followers.toString()} />
                        <ResultCard title="Localidade" description={user.location} />
                        <ResultCard title="Nome" description={user.name} />
                    </div>
                  </div>
                </div>
            </>
            }
          </div>
        </div>
    );
};

export default SearchCard;