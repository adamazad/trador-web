// Basic
export const APP_TITLE = process.env.REACT_APP_APP_TITLE || 'Trådor'
export const APP_URL = process.env.REACT_APP_APP_URL || 'http://localhost:3000'

// API and Auth Base
export const APP_API_BASE =
  process.env.REACT_APP_APP_API_BASE || 'http://localhost:4001'
export const APP_AUTH_BASE =
  process.env.REACT_APP_APP_AUTH_BASE || 'http://localhost:4002'

if (
  [APP_TITLE, APP_URL, APP_API_BASE, APP_AUTH_BASE].some(e => e === undefined)
) {
  throw new Error(
    'Missing App variables: APP_TITLE, APP_URL, APP_API_BASE, APP_AUTH_BASE'
  )
}
