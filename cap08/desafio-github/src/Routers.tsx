import Navbar from "components/Navbar";
import Home from "pages/Home";
import SearchCard from "pages/SearchCard";
import { BrowserRouter, Route, Routes} from "react-router-dom";

const Routers = () => {

    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="search" element={<SearchCard />} />
            </Routes>          
        </BrowserRouter>

    );
}

export default Routers;