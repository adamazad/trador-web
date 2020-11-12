import styled from 'styled-components'
import {
  fontSize,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  SizeProps,
  space,
  variant,
} from 'styled-system'

export type ButtonProps = SizeProps &
  FontStyleProps &
  FontWeightProps & {
    variant?: string
  }

const Button = styled.button<ButtonProps>(
  // Base style
  props => ({
    appearance: 'none',
    padding: '.25rem .75rem',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    userSelect: 'none',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderRadius: props.theme.radii.base,
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'inherit',
    lineHeight: 1.5,
    color: 'black',
    ':disabled': {
      opacity: 0.5,
    },
  }),
  fontSize,
  fontWeight,
  fontStyle,
  space,
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      black: {
        color: 'white',
        bg: 'black',
      },
      link: {
        bg: 'transparent',
      },
      icon: {
        bg: 'transparent',
      },
    },
  })
)

Button.defaultProps = {
  variant: 'primary',
}

export default Button
