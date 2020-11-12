import styled from 'styled-components'

const Textarea = styled.textarea(props => ({
  display: 'block',
  width: '100%',
  padding: '.375rem .75rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.5,
  color: '#495057',
  border: '1px solid #ced4da',
  backgroundColor: '#fff',
  borderRadius: props.theme.radii.base,
}))

export default Textarea
