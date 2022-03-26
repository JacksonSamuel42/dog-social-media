import React from 'react';
import {useNavigate} from 'react-router-dom'
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Helpers/Error'
import {PHOTOS_POST} from '../../Api/Api';

const UserPhotoPost = () => {
	const nome = useForm('');
	const peso = useForm('number');
	const idade = useForm('number');
	const [img, setImg] = React.useState({});
	const {data, error, loading, request} = useFetch();
  const navigate = useNavigate()

  React.useEffect(() => {
    if(data) navigate('/conta')
  }, [data, navigate])

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('img', img.raw);
		formData.append('nome', nome.value);
		formData.append('peso', peso.value);
		formData.append('idade', idade.value);

		const token = window.localStorage.getItem('token');
		const {url, options} = PHOTOS_POST(formData, token);
		request(url, options);
	};

	const handleImgChange = ({target}) => {
		setImg({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0],
		});
	};

	return (
		<section className={` animeLeft ${styles.photoPost}`}>
			<form onSubmit={handleSubmit}>
				<Input label='Nome' type='text' name='nome' {...nome} />
				<Input label='peso' type='number' name='peso' {...peso} />
				<Input label='idade' type='number' name='idade' {...idade} />
				<input className={styles.file} type='file' name='img' id='img' onChange={handleImgChange} />
				{loading ? (
					<Button disabled>Enviando...</Button>
				) : (
					<Button>Enviar</Button>
				)}
        <Error error={error}/>
			</form>
			<div>
				{img.preview && (
					<div
						className={styles.preview}
						style={{backgroundImage: `url('${img.preview}')`}}></div>
				)}
			</div>
		</section>
	);
};

export default UserPhotoPost;
