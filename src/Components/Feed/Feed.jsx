import React from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'
import PropTypes from 'prop-types';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.screenY
        const height = document.body.offsetHeight - window.innerHeight

        if (scroll > height * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map(page => (
        <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />
      ))}
      {!infinite && !user && (
        <p style={{
          textAlign: 'center',
          padding: '2rem 0 4rem 0',
          color: '#888'
        }}>
          Não existe mais postagens.
        </p>
      )}
    </div>
  )
}

Feed.defaultProps = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
}

export default Feed