/**
 * Checks if cookies are enabled
 * @returns {Boolean}
 */
export const isCookiesEnabled = (): Boolean => {
  try {
    document.cookie = 'cookietest=1'
    var cookiesEnabled = document.cookie.indexOf('cookietest=') !== -1
    document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT'
    return cookiesEnabled
  } catch (e) {
    return false
  }
}
