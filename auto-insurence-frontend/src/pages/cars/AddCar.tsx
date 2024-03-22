import { useState, useEffect } from "react";
import { ICreateCar, ICarOwner } from "../../types/global.typing";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";
import "./Cars.scss";

const AddCar = () => {
  const [car, setCar] = useState<ICreateCar>({
    brand: "",
    model: "",
    productionYear: 0,
    carOwnerId: -1,
  });
  const [carOwners, setCarOwners] = useState<ICarOwner[]>([]);
  const redirect = useNavigate();

  useEffect(() => {
    httpModule
      .get<ICarOwner[]>("/CarOwner/Get")
      .then((response) => {
        setCarOwners(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);

  const handleClickSaveBtn = () => {
    if (car.brand === "" || car.model === "" || car.carOwnerId === -1) {
      alert("Fill all fields");
      return;
    }
    if (car.productionYear < 1900) {
      alert("Please fill out proper production year");
      return;
    }
    httpModule
      .post("/Car/create", car)
      .then((response) => redirect("/Cars"))
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };
  const handleClickBackBtn = () => {
    redirect("/Cars");
  };

  return (
    <div className="content">
      <div className="add-car">
        <h2>Add Car</h2>
        <TextField
          autoComplete="off"
          label="Brand"
          variant="outlined"
          value={car.brand}
          onChange={(e) => setCar({ ...car, brand: e.target.value })}
        />
        <TextField
          autoComplete="off"
          label="Model"
          variant="outlined"
          value={car.model}
          onChange={(e) => setCar({ ...car, model: e.target.value })}
        />
        <TextField
          autoComplete="off"
          label="Production year"
          variant="outlined"
          //value={car.productionYear}
          inputProps={{ pattern: "[0-9]" }}
          onChange={(e) => {
            if (!isNaN(parseInt(e.target.value))) {
              setCar({ ...car, productionYear: parseInt(e.target.value, 10) });
            }
          }}
        />
        <FormControl fullWidth>
          <InputLabel>Car owner</InputLabel>
          <Select
            value={car.carOwnerId}
            label="Owner"
            onChange={(e) => setCar({ ...car, carOwnerId: +e.target.value })}
          >
            {carOwners.map((owner) => (
              <MenuItem key={owner.id} value={owner.id}>
                {owner.name + owner.surname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="btns">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickSaveBtn}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickBackBtn}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
