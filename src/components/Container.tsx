import styled from 'styled-components'
import { layout, LayoutProps } from 'styled-system'

type ContainerProps = LayoutProps & {
  fluid?: boolean
}

const Container = styled.div<ContainerProps>(
  props =>
    `
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props.theme.breakpoints[1]}) {
    max-width: ${props.fluid ? '90vw' : '800px'};
  }
`,
  layout
)

Container.defaultProps = {
  fluid: false,
}

export default Container
