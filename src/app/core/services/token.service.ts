import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  setDataToLocalStorage(data: { admin_id: string, token: string }) {
    localStorage.setItem('admin_id', data.admin_id)
    localStorage.setItem('access_token', data.token)
  }
  getToken() {
    return localStorage.getItem('access_token')
  }
  getAdminId() {
    return localStorage.getItem('admin_id')
  }
  clearLocalStorage() {
    localStorage.clear()
  }
  decode(payload: string) {
    return JSON.parse(atob(payload))
  }
  payload(token: string) {
    const payload = token.split('.')[1]
    return this.decode(payload)
  }
  getAdminIdFromPayload() {
    const token = this.getToken()
    return token ? this.payload(token).id : ''
  }
  isValid() {
    const token = this.getToken()
    const admin_id = this.getAdminId()
    if (token) {
      const payload = this.payload(token)
      if (payload) {
        return admin_id === payload.id
      }
    }
    return false
  }
  loggedIn() {
    return this.isValid()
  }
}
