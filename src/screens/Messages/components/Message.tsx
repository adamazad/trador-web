import { useDispatch, useSelector } from 'react-redux'
import TrashIcon from 'react-useanimations/lib/trash2'
import UseAnimations from 'react-useanimations'
import React, { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as ReplyIcon } from 'src/assets/svg/message-reply.svg'
import { ReactComponent as EditIcon } from 'src/assets/svg/message-edit.svg'
import { showModal } from 'src/services/redux/modal'
import UpdateAddMessage from './UpdateMessageForm'
import { Message } from 'src/interfaces/Messages'
import { CardBody } from 'src/components/Card'
import AddMessageForm from './AddMessageForm'
import MessageHeader from './MessageHeader'
import { Markdown } from 'src/components'
import { deleteMessage } from '../redux'
import { useUser } from 'src/hooks'

interface MessageProps {
  message: Message
}

const Comments = styled.div({
  marginLeft: 20,
  borderLeft: '1px solid #ddd',
})

export default function SingleMessage({ message }: MessageProps) {
  const user = useUser()
  const dispatch = useDispatch()
  const [isEditMode, setIsEditMode] = useState(false)
  const [isReplyMode, setIsReplyMode] = useState(false)

  const isPost = message.parentId == null
  const isAuthor = message.user.id === user?.id

  // Select the replies/comments
  // @TODO: create a reselect function for this
  const comments = useSelector(store => store.messages.items.filter(({ parentId }) => parentId === message.id))

  const toggleReplyMode = () => {
    if (user) {
      setIsReplyMode(prevState => !prevState)
    } else {
      dispatch(
        showModal({
          title: 'You need to login',
          content: 'You need to login to post a reply',
        })
      )
    }
  }

  return (
    <>
      <MessageHeader authorName={message.user.name} date={message.createdAt} iconticonSeed={message.user.id} />
      <CardBody>
        {isEditMode ? (
          <UpdateAddMessage message={message} onSucess={() => setIsEditMode(false)} />
        ) : (
          <Markdown content={message.message} />
        )}
      </CardBody>
      <CardBody display="flex" alignItems="center" justifyContent="space-between" pt={0}>
        {isPost && (
          <span role="button" onClick={toggleReplyMode} title="Reply to post">
            <ReplyIcon />
          </span>
        )}
        {isAuthor && (
          <>
            <span role="button" title="Edit Message" onClick={() => setIsEditMode(prevState => !prevState)}>
              <EditIcon width={20} />
            </span>
            <span role="button" title="Delete Message" onClick={() => dispatch(deleteMessage(message.id))}>
              <UseAnimations animation={TrashIcon} />
            </span>
          </>
        )}
      </CardBody>
      {isReplyMode && (
        <CardBody>
          <AddMessageForm
            parentId={message.id}
            onSucess={reply => {
              toggleReplyMode()
            }}
          />
        </CardBody>
      )}
      <Comments>
        {comments.length > 0 && comments.map(comment => <SingleMessage message={comment} key={comment.id} />)}
      </Comments>
    </>
  )
}
