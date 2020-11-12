import React from 'react'
import { useDispatch } from 'react-redux'

import { setPageTitle } from '../../services/redux/page'
import Container from 'src/components/Container'
import { useMountEffect } from 'src/hooks'
import Center from 'src/layouts/Center'
import Link from 'src/components/Link'
import styled from 'styled-components'

import bgImage from 'src/assets/media/arabica-1084.png'

const BackgroundImage = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  > img {
    width: 100%;
    max-width: 400px;
  }
`

const Text = styled.div`
  text-align: center;
`

export default function Error404Screen() {
  const dispatch = useDispatch()

  useMountEffect(() => {
    dispatch(setPageTitle('Page Not Found'))
  })

  return (
    <Center height="100%">
      <Container>
        <BackgroundImage>
          <img alt="Page not found" src={bgImage} />
        </BackgroundImage>
        <Text>
          <h4>
            The animals tried their best.
            <br />
            They could not find what you are looking for <br />
            <Link to="/">Go back</Link>
          </h4>
        </Text>
      </Container>
    </Center>
  )
}
