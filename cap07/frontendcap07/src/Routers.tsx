import Navbar from "components/Navbar";
import Catalogo from "pages/Catalogo";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routers = () => {

    return (

        <BrowserRouter>
            <Navbar />            
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route> 
            </Switch>   
            <Switch>
                <Route path="/cars">
                    <Catalogo />
                </Route>
            </Switch>        
        </BrowserRouter>

    );
}

export default Routers;