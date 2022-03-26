import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';

const UserPhotoPost = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleImgChange = () => {};
	return (
		<section className={` animeLeft ${styles.photoPost}`}>
			<form onSubmit={handleSubmit}>
				<Input label='Nome' type='text' name='nome' />
				<Input label='peso' type='text' name='peso' />
				<Input label='idade' type='text' name='idade' />
				<input type='file' name='img' id='img' onChange={handleImgChange} />
				<Button>Enviar</Button>
			</form>
		</section>
	);
};

export default UserPhotoPost;
