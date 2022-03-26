import React from 'react'
import { PHOTO_GET } from '../../Api/Api'
import Error from '../../Helpers/Error'
import Loading from '../../Helpers/Loading'
import useFetch from '../../Hooks/useFetch'
import styles from './FeedModal.module.css'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch() 

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options);
  }, [photo, request])

  const handleOutsideClick = (e) => {
    if(e.target === e.currentTarget) setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}

export default FeedModal