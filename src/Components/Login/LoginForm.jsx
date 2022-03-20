import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';

const LoginForm = () => {
	const username = useForm();
	const password = useForm();
	const {userLogin, error, loading} = React.useContext(UserContext)

	const handleSubmit = async(e) => {
		e.preventDefault();

		if(username.validate() && password.validate()){
			userLogin(username, password)
		}
	};

	return (
		<section className="animeLeft">
			<h1 className="title">Login</h1>
			<form onSubmit={handleSubmit}>
				<Input label='Usuário' type='text' name='username' {...username} />
				<Input label='Senha' type='password' name='password' {...password} />

				{loading ? <Button disabled>carrengendo...</Button> : <Button>Entrar</Button>}

				{error && <p>{error}</p>}
			</form>
			<Link to='/login/criar'>Cadastro</Link>
		</section>
	);
};

export default LoginForm;
