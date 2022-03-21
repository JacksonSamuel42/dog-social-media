import React from 'react';
import {NavLink} from 'react-router-dom';
import {UserContext} from '../../Contexts/UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
	const [mobile, setMobile] = React.useState(null);
	const {userLogout} = React.useContext(UserContext);
	return (
		<nav className={styles.nav}>
			<NavLink
				to='/conta'
				className={({isActive}) => (isActive ? styles.active : '')}
				end>
				<MinhasFotos />
				{mobile && 'Minhas Fotos'}
			</NavLink>
			<NavLink
				to='/conta/estatisticas'
				className={({isActive}) => (isActive ? styles.active : '')}>
				<Estatisticas />
				{mobile && 'Estatísticas'}
			</NavLink>
			<NavLink
				to='/conta/postar'
				className={({isActive}) => (isActive ? styles.active : '')}>
				<AdicionarFoto />
				{mobile && 'Adicionar Foto'}
			</NavLink>

			<button onClick={userLogout}>
				<Sair />
				{mobile && 'Sair'}
			</button>
		</nav>
	);
};

export default UserHeaderNav;
