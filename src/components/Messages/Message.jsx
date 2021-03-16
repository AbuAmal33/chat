import React from 'react'
import { Link, useParams } from 'react-router-dom'
import cx from 'classnames'

function Message (props) {
  const userId = useParams().userId;
  const isOpenedMessage = parseInt(useParams().chatId) === props.message._id;

  return (
    <div className="message">
      <div className={cx('', {
        '' : isOpenedMessage,
      })}>
        <Link to={`/${userId}/${props.message._id}`}>{props.message.content}</Link>
      </div>
    </div>
  )
}

export default Message