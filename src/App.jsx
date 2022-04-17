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
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
	return (
		<Router>
			<UserStorage>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='login/*' element={<Login />} />
					<Route path='foto/:id' element={<Photo />} />
					<Route path='perfil/:user' element={<UserProfile />} />
					<Route
						path='conta/*'
						element={
							<ProtectedRoute>
								<User />
							</ProtectedRoute>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</UserStorage>
		</Router>
	);
};

export default App;
