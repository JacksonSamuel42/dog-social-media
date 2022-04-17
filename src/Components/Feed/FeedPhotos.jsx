import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Helpers/Error';
import Loading from '../../Helpers/Loading';
import {PHOTOS_GET} from '../../Api/Api';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({user, page, setModalPhoto, setInfinite}) => {
	const {data, loading, error, request} = useFetch();

	React.useEffect(() => {
		const fetchPhotos = async () => {
			const total = 3
			const {url, options} = PHOTOS_GET({page, total, user});
			const {json, response} = await request(url, options);
			if(response && response.ok && json.length < total){
				setInfinite(false)
			}
		};
		fetchPhotos();
	}, [request, user, page, setInfinite]);

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	if (data)
		return (
			<ul className={`animeLeft ${styles.feed}`}>
				{data.map((photo) => (
					<FeedPhotosItem
						photo={photo}
						key={photo.id}
						setModalPhoto={setModalPhoto}
					/>
				))}
			</ul>
		);
	else return null;
};

export default FeedPhotos;
