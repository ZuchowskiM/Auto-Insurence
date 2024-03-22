import "./Cars.scss";
import httpModule from "../../helpers/http.module";
import { useEffect, useState } from "react";
import { ICar } from "../../types/global.typing";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import CarGrid from "../../components/cars/CarGrid";

const Cars = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ICar[]>("/Car/Get")
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content cars">
      <div className="heading">
        <h2>Cars</h2>
        <Button variant="outlined" onClick={() => redirect("/Cars/add")}>
          <Add />
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : cars.length === 0 ? (
        <h1>No cars</h1>
      ) : (
        <CarGrid data={cars} />
      )}
    </div>
  );
};

export default Cars;
