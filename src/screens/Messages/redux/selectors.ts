import { DefaultRootState } from 'react-redux'
import { createSelector } from 'reselect'

export const messageCommentsSelectorFactory = createSelector(
  (state: DefaultRootState) => state.messages.items,
  items => (messageId: string, sort = true) =>
    items
      .filter(({ parentId }) => parentId === messageId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
)

// const messageCommentsSelector = messageCommentsSelectorFactory(state)

// messageCommentsSelector()
