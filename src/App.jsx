import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {UserStorage} from './Contexts/UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Helpers/ProtectedRoute';

const App = () => {
	return (
		<Router>
			<UserStorage>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='login/*' element={<Login />} />
					<Route
						path='conta/*'
						element={
							<ProtectedRoute>
								<User />
							</ProtectedRoute>
						}
					/>
				</Routes>
				<Footer />
			</UserStorage>
		</Router>
	);
};

export default App;
