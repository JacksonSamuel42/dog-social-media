import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Helpers/Error';
import Loading from '../../Helpers/Loading';
import {PHOTOS_GET} from '../../Api/Api';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({setModalPhoto}) => {
	const {data, loading, error, request} = useFetch();

	React.useEffect(() => {
		const fetchPhotos = async () => {
			const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
			request(url, options);
		};
		fetchPhotos();
	}, [request]);

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
