export function setAuthUser (data: any) {
  return {type: 'SET_AUTH_USER', isAuthUser: data}
}

export function setAuthAdmin (data: any) {
  return {type: 'SET_AUTH_ADMIN', isAuthAdmin: data}
}