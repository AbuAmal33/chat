import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMessages } from '../../redux/action'
import { useEffect } from 'react'
import Message from './Message'
import { useParams } from 'react-router-dom'

function Messages () {
  const messages = useSelector((state) => state.messages.items);
  const loadingMessages = useSelector((state) => state.messages.loadingMessages);
  const dispatch = useDispatch();

  const userId = parseInt(useParams().userId);

  const filterMessages = messages.filter((message) => message.userId === userId);

  useEffect(() => {
    if (userId) {
      dispatch(loadMessages(userId));
    }
  }, [dispatch, userId]);

  if(!userId) {
    return <div className="info">
      <h5 >Выберите контакт из списка</h5>
    </div>
  }

  return (
    <div className="col-md-6">
      {loadingMessages ? (
        <h5>loading...</h5>
      ) : (
        <div>
          {filterMessages.map((message) => {
            return <Message key={message.id} message={message}/>;
          })}
        </div>
      )}
    </div>
  )
}

export default Messages