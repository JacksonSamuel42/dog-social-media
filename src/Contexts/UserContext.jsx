import React from 'react';
import { useNavigate } from 'react-router-dom';
import {GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST} from '../Api/Api';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
	const [data, setData] = React.useState(null);
	const [login, setLogin] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(false);
	const navigate = useNavigate()

	const userLogout = React.useCallback(() => {
		setData(null)
		setError(null)
		setLoading(false)
		setLogin(false)
		window.localStorage.removeItem('token')
		navigate('/login')
	}, [navigate])

	const getUser = async (token) => {
		const {url, options} = GET_USER(token);
		const response = await fetch(url, options);
		const data = await response.json();
		setData(data);
		setLogin(true);
	};

	const userLogin = async (username, password) => {
		try{
			setError(null)
			setLoading(true)
			const {url, options} = TOKEN_POST({username, password});
			const response = await fetch(url, options);
			if(!response.ok) throw new Error('Error :' + response.statusText)
			const {token} = await response.json();
			window.localStorage.setItem('token', data.token);
			await getUser(token);
			navigate('/conta')
		}catch(error){
			setError(error.message)
			setLogin(false)
		}finally{
			setLoading(false)
		}
	};

	React.useEffect(() => {
		const autoLogin = async() => {
			const token = window.localStorage.getItem('token');
			if (token){
				try{
					setError(null)
					setLoading(true)
					const {url, options} = TOKEN_VALIDATE_POST(token);
					const response = await fetch(url, options)
					if(!response.ok) throw new Error('Token inválido')
					await getUser(token)
				}catch(error){
					userLogout()
				}finally{
					setLoading(false)
				}
			}
		}
		autoLogin()
	}, [userLogout]);

	return (
		<UserContext.Provider value={{userLogin, data, userLogout, loading, error}}>
			{children}
		</UserContext.Provider>
	);
};
