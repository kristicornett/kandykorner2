import { Outlet, Route, Routes } from 'react-router-dom'
import { LocationList } from '../locations/LocationList'
import { ProductList } from '../products/ProductList'

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path='/' element={
				<>
				<h1>Kandy Korner</h1>
				<div>Where kandy meets your craving</div>
				<Outlet />
				</>
			}/>
			<Route path='locations' element={<LocationList />} />
			<Route path='products' element={<ProductList />} />
		</Routes>
	)
}

