import { size, SizeProps, space, variant } from 'styled-system'
import { Link as LinkBase } from 'react-router-dom'
import styled from 'styled-components'

type LinkProps = SizeProps & {
  variant?: string
}

const Link = styled(LinkBase)<LinkProps>(
  props => ({
    color: props.theme.colors.primary,
    ':hover': {
      color: props.theme.colors.secondary,
    },
  }),
  size,
  space,
  variant({
    variants: {
      secondary: {
        color: 'black',
        ':hover': {
          color: 'black',
        },
      },
      navlink: {
        color: 'white',
        ':hover': {
          color: 'white',
        },
      },
    },
  })
)

Link.defaultProps = {
  variant: undefined,
}

export default Link
