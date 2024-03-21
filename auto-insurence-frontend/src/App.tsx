import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import CustomLinearLoader from "./components/custom-linear-loader/customLinearLoader";

const Home = lazy(() => import("./pages/home/Home"));
const CarOwners = lazy(() => import("./pages/car-owners/CarOwners"));
const Cars = lazy(() => import("./pages/cars/Cars"));
const AddCarOwner = lazy(() => import("./pages/car-owners/AddCarOwner"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carOwners">
              <Route index element={<CarOwners />} />
              <Route path="add" element={<AddCarOwner />} />
            </Route>
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
