import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {UserContext} from '../../Contexts/UserContext';
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
	const [mobileMenu, setMobileMenu] = React.useState(false);
	const {userLogout} = React.useContext(UserContext);
	const mobile = useMedia('(max-width: 40rem)');

	const {pathname} = useLocation()
	React.useEffect(() => {
		setMobileMenu(false)
	}, [pathname])
	return (
		<>
			{mobile && (
				<button
					aria-label='Menu'
					className={`${styles.buttonMenu} ${
						mobileMenu && styles.mobileButtonActive
					}`}
					onClick={() => setMobileMenu(!mobileMenu)}></button>
			)}
			<nav
				className={`${mobile ? styles.navMobile : styles.nav} ${
					mobileMenu && styles.navMobileActive
				}`}>
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
		</>
	);
};

export default UserHeaderNav;
