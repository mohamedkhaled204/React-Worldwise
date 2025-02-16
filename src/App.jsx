import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useState } from "react";
import CityList from "./components/CityList";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:9000/cities");
        if (!res.ok) throw new Error("Failed to fetch cities");
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, []);
  function handleDelete(cityId) {
    setCities((city) => city.filter((id) => id != cityId));
}


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
        <Route index element={<CityList cities={cities} loading={loading} onHandleDelete={handleDelete} />} />
          <Route path="cities" element={<CityList cities={cities} loading={loading} onHandleDelete={handleDelete} /> } />
          <Route path="countries" element={<p>countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
