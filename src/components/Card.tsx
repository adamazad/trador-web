import Styled from 'styled-components'
import {
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  size,
  SizeProps,
  space,
  SpaceProps,
  textAlign,
  typography,
} from 'styled-system'

const CARD_PADDING = '20px'

type CardComponentProps = SpaceProps &
  SizeProps &
  LayoutProps &
  FlexProps &
  FlexboxProps

export type CardProps = CardComponentProps & {
  fluid?: boolean
}

const Card = Styled.div<CardProps>(
  props => ({
    borderRadius: props.theme.radii.base,
    background: '#fff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: ` rgba(0, 0, 0, 0.25) 0px 1px 10px`,
    alignSelf: 'stretch',
    height: props.fluid ? '100%' : 'auto',
  }),
  typography,
  layout,
  space,
  flex,
  size
)

export const CardBody = Styled.div<CardComponentProps>(
  {
    padding: CARD_PADDING,
  },
  textAlign,
  flexbox,
  layout,
  space,
  flex,
  size
)

export const CardLinks = Styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

export const CardTitle = Styled.h3``

export default Card
