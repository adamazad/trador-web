import styled from 'styled-components'
import {
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexProps,
  FlexboxProps,
} from 'styled-system'

export type Props = SpaceProps & LayoutProps & FlexProps & FlexboxProps

const Flex = styled.div<Props>(
  {
    display: 'flex',
  },
  space,
  layout,
  flexbox
)

export default Flex
