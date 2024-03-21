import './CarOwners.scss'
import httpModule from "../../helpers/http.module"
import { useEffect, useState } from 'react'
import { ICarOwner } from '../../types/global.typing'
import { Button, CircularProgress } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { Add } from '@mui/icons-material'
import CarOwnersGrid from '../../components/car-owners/CarOwnersGrid'

const CarOwners = () => {
    const [carOwners, setCarOwners] = useState<ICarOwner[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const redirect = useNavigate();

    useEffect(() => {
        setLoading(true)
        httpModule.get<ICarOwner[]>("/CarOwner/Get")
            .then(response => {
                setCarOwners(response.data);
                setLoading(false);
            })
            .catch(error => {
                alert("Error");
                console.log(error);
                setLoading(false);
            })
    }, [])

    return (
        <div className='content car-owners'>
            <div className='heading'>
                <h2>Car Owners</h2>
                <Button variant="outlined" onClick={() => redirect("/CarOwners/add")}>
                    <Add />
                </Button>
            </div>
            {
                loading ?
                    <CircularProgress size={100} /> : carOwners.length === 0 ?
                        <h1>No car owners</h1> : <CarOwnersGrid data={carOwners} />
            }
        </div>
    )
}

export default CarOwners