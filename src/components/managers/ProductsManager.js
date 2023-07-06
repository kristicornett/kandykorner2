const url = "http://localhost:8088"

export const getAllProducts = () => {
    return fetch(`${url}/products`)
        .then(response => response.json())
        
    }

export const getAllProductTypes = () => {
    return fetch(`${url}/productTypes`)
        .then(response => response.json())
}