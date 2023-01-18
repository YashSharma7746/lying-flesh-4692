import { Route, Routes } from "react-router-dom";
import {Beauty} from "../pages/Products/Beauty/Beauty";
import {Electronics}from "../pages/Products/Electronics/Electronics";
import {Fashion} from "../pages/Products/Fashion/Fashion";
import {Flights} from "../pages/Products/Flights/Flights";
import {Grocery} from "../pages/Products/Grocery/Grocery";
import {HomeFurniture} from "../pages/Products/HomeFurniture/HomeFurniture";
import {MobilesTablets} from "../pages/Products/MobilesTablets/MobilesTablets.jsx";




// eslint-disable-next-line import/no-anonymous-default-export
const AllRoutes= () => {
  return (
    <Routes>
    <Route path="/beauty" element={<Beauty/>}/>
    <Route path="/electronics" element={<Electronics/>}/>
    <Route path="/fashion" element={<Fashion/>}/>
    <Route path="/flights" element={<Flights/>}/>
    <Route path="/grocery" element={<Grocery/>}/>
    <Route path="/homefurniture" element={<HomeFurniture/>}/>
    <Route path="/mobiletablets" element={<MobilesTablets/>}/>
    </Routes>
  );
};
export default AllRoutes;