import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import { ReactComponent as XIcon } from 'src/assets/svg/x.svg'
import { dismissModal } from 'src/services/redux/modal'
import Flex from './Flex'

const Backdrop = styled.div(
  props => `
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background: ${props.theme.colors.background};
  opacity: 0.5;
`
)

const ModalContainer = styled(Flex)`
  padding-right: 20px;
  padding-left: 20px;
  overflow: hidden;
  position: fixed;
  z-index: 1050;
  height: 100vh;
  width: 100vw;
  outline: 0;
  left: 0;
  top: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const ModalBody = styled.div(
  props => `
  position: relative;
  background: #fff;
  max-width: 300px;
  padding: 20px;
  width: 100%;
  border-radius: ${props.theme.radii.base};
  box-shadow: rgba(0,0,0,0.25) 0px 1px 10px;
`
)

const DimissButton = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
`

export default function Modal() {
  const dispatch = useDispatch()
  const { title, content, shown } = useSelector(store => store.modal)

  const dismiss = () => {
    dispatch(dismissModal())
  }

  useEffect(() => {
    const body = document.body
    if (shown) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }
  }, [shown])

  return (
    <>
      {shown &&
        createPortal(
          <>
            <Backdrop />
            <ModalContainer>
              <ModalBody>
                <h3>{title}</h3>
                {content}
                <DimissButton role="button" title="Dismiss" onClick={dismiss}>
                  <XIcon />
                </DimissButton>
              </ModalBody>
            </ModalContainer>
          </>,
          document.getElementById('portal') as HTMLElement
        )}
    </>
  )
}
