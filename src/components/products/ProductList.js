import { useEffect, useState } from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom'
import { getAllProducts, getAllProductTypes } from '../managers/ProductsManager'

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [productTypes, setProductTypes] = useState([])
    const [filteredCandy, setFilteredCandy] = useState([])
    const [topPriced, setTopPriced] = (useState(false))

    const localStorageUser = localStorage.getItem('kandy_user')
    const KandyUserObject = JSON.parse(localStorageUser)
    const navigate = useNavigate()

    useEffect(
        () => {
            getAllProducts().then((data) => {
                setProducts(data)
            })
        }, []
    )

    useEffect(
        () => {
            if (KandyUserObject.staff){
                setFilteredCandy(products)
            }
        }, [topPriced, products]
    )

    useEffect(
        () => {
            getAllProductTypes().then((data) => {
                setProductTypes(data)
            })
        }, []
    )

    useEffect(() => {
        const topPricedCandy = products.filter((product) => product.pricePerUnit > 2)
            if (topPricedCandy) {setFilteredCandy(topPricedCandy)}
            else {
                setFilteredCandy(products)
            }
       }, [topPriced])


   const productTypeName = (productTypeId) => {
       const productName = productTypes.find(productType => productType.id == productTypeId)
       return productName?.type
   }

   const togglePrice = () => {
    setTopPriced(!topPriced)
   }

   return <>
   {
       
       KandyUserObject.staff ?
       <> 
       <button onClick={togglePrice}>Top Priced</button>
       </> : <>
        
       </>

       
   }


    <h2>Kandy Korner Products</h2>
    <div className="products">
        {
            products.map((product) => {
                return <section key={product.id} className='product'>
                    <header><div style={{fontWeight: 'bold', display: 'inline'}}>Candy:</div>{product.name}</header>
                    <div>Category:{productTypeName(product.productTypeId)}</div>
                    <div>Price per unit:{product.pricePerUnit}</div>
                </section>
               
            })
        }
    </div>
    
    </>
    
}