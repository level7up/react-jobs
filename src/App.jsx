/** @format */

import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import Home from './Pages/Home';
import Main from './Layouts/Main';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Main />} >
			<Route index element={<Home/>} />
		</Route>
	)
)
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
