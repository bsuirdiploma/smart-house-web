export class AuthService {

  static storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

}
