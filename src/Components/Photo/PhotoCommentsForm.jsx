import React from 'react';
import { COMMENT_POST } from '../../Api/Api';
import {ReactComponent as Enviar} from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch'
import Error from '../../Helpers/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments, single}) => {
    const [comment, setComment] = React.useState();
    const {error, request} = useFetch()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const token = window.localStorage.getItem('token')
        const {url, options} = COMMENT_POST(id, {comment}, token)
        const {response, json} = await request(url, options)
        if(response.ok){
            setComment('')
            setComments((comments) => [...comments, json])
        }
    }

	return (
		<form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
			<textarea
                className={styles.textarea}
				placeholder='Comente...'
				id='comment'
				name='comment'
				value={comment}
				onChange={({target}) => setComment(target.value)}
			/>
			<button className={styles.button}>
				<Enviar />
			</button>
            <Error error={error}/>
		</form>
	);
};

export default PhotoCommentsForm;
