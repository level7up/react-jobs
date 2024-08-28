/** @format */

import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import Main from './Layouts/Main';
import Home from './Pages/Home';
import JobsIndex from './Pages/Jobs/JobsIndex';
import Page404 from './Pages/Errors/Page404';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Main />} >
			<Route index element={<Home/>} />
			<Route path='/jobs' element={<JobsIndex/>} />
			<Route path='*' element={<Page404/>} />
		</Route>
	)
)
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
