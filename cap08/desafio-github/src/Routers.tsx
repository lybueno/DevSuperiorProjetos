import Navbar from "components/Navbar";
import Home from "pages/Home";
import SearchCard from "pages/SearchCard";
import { BrowserRouter, Route, Switch} from "react-router-dom";

const Routers = () => {

    return (

        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search">
                    <SearchCard />
                </Route>
            </Switch>          
        </BrowserRouter>

    );
}

export default Routers;