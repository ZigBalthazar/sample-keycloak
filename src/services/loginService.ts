import apiClient from '../utils/apiCall'

export class LoginService {
  static async login(userData: Iuser): Promise<string> {
    try {


      const requestBody = {
        username: userData.username,
        password: userData.password,
        grant_type: 'password',
        client_id: process.env.KC_APP_CLIENT,
        client_secret: process.env.KC_ADMIN_CLIENT_SECRET,
      };

      const requestHeader = {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      const data = await apiClient.callApi<any>(
        'POST',
        `${process.env.BASE}/realms/${process.env.REALM}/protocol/openid-connect/token`,
        requestBody,
        requestHeader
      );
      return data.access_token; // return token
    } catch (error) {
      throw error;
    }
  }
}
