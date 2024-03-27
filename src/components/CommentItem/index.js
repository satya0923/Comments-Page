import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'active-btn' : 'non-active'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-section">
        <div className="initial-comment">
          <p className={`initial ${initialClassName}`}>{initial}</p>
            <div className='name-time-comment'>
                <div className='name-time'>
                    <p className="user-name">{name}</p>
                    <p className="comment-time">{postedTime} ago</p>
                </div>
                <p className="comment">{comment}</p>
            </div>
        </div>
      </div>

      <div className="like-section">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-icon" />
          <button
            type="button"
            className={likeTextClassName}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>

        <button
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
          className="delete-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>

      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
