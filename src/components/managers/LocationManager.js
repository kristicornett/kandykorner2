const url = "http://localhost:8088"

export const getAllLocations = () => {
    return fetch(`${url}/locations`)
        .then(response => response.json())
        
    }
