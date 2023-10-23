import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../../login/login'
import AppLayout from '../layout/layout'
import Home from "../pages/Home"
import About from "../pages/About"
import Help from "../pages/Help"
import NotFound from "../pages/NotFound"
import Faq from "../sub_pages/Faq.jsx"
import ContactUs, { contactAction } from "../sub_pages/ContactUs";
import CarriersLayout from "../layout/CarriersLayout"
import Careers from "../pages/careers/Careers"
import CareerError from "../pages/careers/CareerError"
import CareerDetail from "../pages/careers/CareerDetail"
import { careersLoader } from "../pages/careers/Careers";
import { careerDetailLoader } from "../pages/careers/CareerDetail";

import PrivateRoute from './privateRoute'

const routerConfig = createBrowserRouter([
	{
		path: "/*",
		element: <NotFound />
	},
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "help",
				element: <Help />,
				children: [
					{ path: "faq", element: <Faq /> },
					{
						path: "contact",
						action: contactAction,
						element: <ContactUs />,
					},
				],
			},
			{
				path: "careers",
				element: <CarriersLayout />,
				errorElement: <CareerError />,
				children: [
					{
						index: true,
						loader: careersLoader,
						element: <Careers />,
					},
					{
						path: ":id",
						loader: careerDetailLoader,
						element: <CareerDetail />,
					},
				],
			},
			{
				path: "/*",
				element: <NotFound />,
			},
		],
	},
	{
		path: "/login",
		element: (
			<PrivateRoute>
				<Login />
			</PrivateRoute>
		)
	},

])

export default routerConfig