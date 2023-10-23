import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate()
	const [token, setToken] = useState(false)

	const checkToken = async () => {
		try {
			if (token) { navigate('/home') } else { navigate('/login') }
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		checkToken()
	}, [token])


	return children

}

export default PrivateRoute