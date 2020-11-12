import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import createIcon from 'blockies'

type AddressIconProps = {
  seed: string
}

const Image = styled.img(props => ({
  borderRadius: props.theme.radii.circle,
  width: 40,
}))

export default function AddressIcon({ seed }: AddressIconProps) {
  const [icon, setIcon] = useState('')

  useEffect(() => {
    const addyIcon = createIcon({
      seed,
    }).toDataURL()

    setIcon(addyIcon)
  }, [seed])

  return <Image src={icon} />
}
