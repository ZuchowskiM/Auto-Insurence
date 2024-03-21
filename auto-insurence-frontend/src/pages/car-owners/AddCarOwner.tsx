import { useState } from "react";
import { ICreateCarOwnerDto } from "../../types/global.typing";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";
import "./CarOwners.scss";

const AddCarOwner = () => {
  const [carOwner, setCarOwner] = useState<ICreateCarOwnerDto>({
    name: "",
    surname: "",
  });
  const redirect = useNavigate();

  const handleClickSaveBtn = () => {
    if (carOwner.name === "" || carOwner.surname === "") {
      alert("Fill all fields");
      return;
    }
    httpModule
      .post("/CarOwner/create", carOwner)
      .then((response) => redirect("/CarOwners"))
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };
  const handleClickBackBtn = () => {
    redirect("/CarOwners");
  };

  return (
    <div className="content">
      <div className="add-car-owner">
        <h2>Add car owner</h2>
        <TextField
          autoComplete="off"
          label="Name"
          variant="outlined"
          value={carOwner.name}
          onChange={(e) => setCarOwner({ ...carOwner, name: e.target.value })}
        />
        <TextField
          autoComplete="off"
          label="Surname"
          variant="outlined"
          value={carOwner.surname}
          onChange={(e) =>
            setCarOwner({ ...carOwner, surname: e.target.value })
          }
        />
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

export default AddCarOwner;
