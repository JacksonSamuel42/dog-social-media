import React, { useEffect, useState } from 'react'
import {UserContext} from '../../Contexts/UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
  const [comments,  setComments] = useState(() => props.comments)
  const commentSection = React.useRef()
  const {login} = React.useContext(UserContext)

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map(comment => (
          <li className={styles.commentsList} key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm single={props.single} setComments={setComments} id={props.id}/>}
    </>
  )
}

export default PhotoComments