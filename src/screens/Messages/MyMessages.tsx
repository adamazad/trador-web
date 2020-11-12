import { useDispatch } from 'react-redux'
import React from 'react'

import MyMessageListContainer from './containers/MyMessages'
import { setPageTitle } from 'src/services/redux/page'
import FixedHeader from 'src/layouts/FixedHeader'
import { useMountEffect } from 'src/hooks'

function MyMessageListScreen() {
  const dispatch = useDispatch()

  useMountEffect(() => {
    dispatch(setPageTitle('My Messages'))
  })

  return (
    <FixedHeader>
      <MyMessageListContainer />
    </FixedHeader>
  )
}

export default MyMessageListScreen
