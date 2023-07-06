import { useEffect, useState } from 'react'
import './Locations.css'
import { useNavigate } from 'react-router-dom'
import { getAllLocations } from '../managers/LocationManager'

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const localStorageUser = localStorage.getItem('kandy_user')
    const KandyUserObject = JSON.parse(localStorageUser)
    const navigate = useNavigate()

    useEffect(
        () => {
            getAllLocations().then((data) => {
                setLocations(data)
            })
        }, []
    )

    return  <>
    <h2>Kandy Korner Locations</h2>
    <div className="locations">
        {
            locations.map((location) => {
                return <section key={location.id} className='location'>
                    <header>{location.name}</header>
                    <div>{location.address}</div>
                    <div>{location.squareFootage}</div>
                </section>
               
            })
        }
    </div>
    
    </>
    
}