import React, { FormEvent, useState } from 'react'
import isEmpty from 'validator/lib/isEmpty'
import { useDispatch } from 'react-redux'

import {
  Button,
  ErrorMessage,
  FormGroup,
  Spinner,
  Markdown,
} from 'src/components'
import { Message } from 'src/interfaces/Messages'
import { useInput, useUser } from 'src/hooks'
import ApiService from 'src/services/api'

import { messageUpdate } from '../redux'
import Center from 'src/layouts/Center'
import { AppUser } from 'src/interfaces/Auth'

interface UpdateMessageFormProps {
  message: Message
  onSucess?: (message?: Message) => void
}

export default function UpdateAddMessage({
  message,
  onSucess = () => {},
}: UpdateMessageFormProps) {
  const user = useUser()
  const dispatch = useDispatch()
  const [messageContent, setMessageContent, resetMessageContent] = useInput(
    message.message
  )
  // Manage request state internally
  const [error, setError] = useState<Error>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    ApiService.put<Message>(`/messages/${message?.id}`, {
      message: messageContent,
    })
      .then(({ data }) => {
        resetMessageContent()
        console.log(data)

        const appUser = user as AppUser

        dispatch(
          messageUpdate({
            ...message,
            message: messageContent,
            user: {
              id: appUser.id,
              name: appUser.name,
            },
          })
        )
        onSucess(data)
      })
      .catch(setError)
      .finally(() => setIsLoading(false))
  }

  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }

  return (
    <form id="addMessage" onSubmit={onSubmit}>
      <FormGroup>
        <textarea
          maxLength={1000}
          placeholder="Markdown is supported"
          value={messageContent}
          id="message"
          onChange={setMessageContent}
          style={{
            minHeight: 30,
          }}
        />
      </FormGroup>
      <FormGroup>
        {messageContent && <Markdown content={messageContent} />}
      </FormGroup>
      <FormGroup>
        <Button disabled={isEmpty(messageContent)}>Publish</Button>
      </FormGroup>
      {error && <ErrorMessage error={error} />}
    </form>
  )
}
