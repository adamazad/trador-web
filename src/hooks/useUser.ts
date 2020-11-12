import { useSelector } from 'react-redux'

export default function useUser() {
  const user = useSelector(store => store.auth.user)
  return user
}
