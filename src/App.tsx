import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Events from "./components/events/Events";
import Activities from "./components/activities/Activities";
import Products from "./components/products/Products";
import DonateNow from "./components/donations/Donations";
import PariharaPooja from "./components/pariharapooja/PariharaPooja";
import Adyatmikam from "./components/adyatmikam/Adyatmikam";
import SamaajaSeva from "./components/samajaseva/SamaajaSeva";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/events"} element={<Events />} />
        <Route path={"/activities"} element={<Activities />}>
          <Route path="parihara" element={<PariharaPooja />} />
          <Route path="adyatmikam" element={<Adyatmikam />} />
          <Route path="samajaseva" element={<SamaajaSeva />} />
        </Route>
        <Route path={"/products"} element={<Products />} />
        <Route path={"/donate"} element={<DonateNow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
