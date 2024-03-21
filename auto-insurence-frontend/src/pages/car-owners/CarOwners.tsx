import './CarOwners.scss'
import httpModule from "../../helpers/http.module"
import { useEffect, useState } from 'react'
import { ICarOwner } from '../../types/global.typing'

const CarOwners = () => {
    const [carOwners, setCarOwners] = useState<ICarOwner[]>([])
    const [loading, setLoading] = useState<boolean>(false)

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
        <div>CarOwners</div>
    )
}

export default CarOwners