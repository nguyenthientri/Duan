import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/Register', body)
  },
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  },
  logout() {
    return http.post('/logout')
  }
}
// export const registerAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body)
// export const login = (body: { email: string; password: string }) => http.post<AuthResponse>('/login', body)
// export const logout = () => http.post<AuthResponse>('/logout')

export default authApi
