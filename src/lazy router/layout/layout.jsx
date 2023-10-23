import React, { useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Login from '../../login/login';
import PrivateRoute from '../routes/privateRoute';
import { Outlet, NavLink } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


const AppLayout = () => {

	return (
		<PrivateRoute>
			<div className="root-layout">
				<header>
					<nav>
						<h1>Welcome from React Router Dom v6.4 Testing.</h1>
						<NavLink to="home">Home</NavLink>
						<NavLink to="about">About</NavLink>
						<NavLink to="help">Help</NavLink>
						<NavLink to="careers">Careers</NavLink>
					</nav>

				</header>
				<main>
					<Outlet />
				</main>
			</div>
		</PrivateRoute>
	);
};
export default AppLayout;