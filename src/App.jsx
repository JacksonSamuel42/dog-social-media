import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {UserStorage} from './Contexts/UserContext';

const App = () => {
	return (
		<div>
			<Router>
				<UserStorage>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login/*' element={<Login />} />
					</Routes>
					<Footer />
				</UserStorage>
			</Router>
		</div>
	);
};

export default App;
