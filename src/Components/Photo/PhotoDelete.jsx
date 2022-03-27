import React from 'react';
import {POST_DELETE} from '../../Api/Api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({id}) => {
	const {loading, request} = useFetch();

	const handleClick = async () => {
		const confirm = window.confirm('Tem certeza que deseja deletar?');
		if (confirm) {
			const token = window.localStorage.getItem('token');
			const {url, options} = POST_DELETE(id, token);
			const {response} = await request(url, options);
			if (response.ok) window.location.reload();
		}
	};

	return (
		<>
			{loading ? (
				<button disabled className={styles.delete}>
					Deletar
				</button>
			) : (
				<button onClick={handleClick} className={styles.delete}>
					Deletar
				</button>
			)}
		</>
	);
};

export default PhotoDelete;
