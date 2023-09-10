import apiClient from '../utils/apiCall';

export class AdminService {
  static async newToken(): Promise<string> {
    try {
      const requestBody = {
        username: process.env.KC_USERNAME,
        password: process.env.KC_PASS,
        grant_type: 'password',
        client_id: process.env.KC_ADMIN_CLIENT,
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
      return `Bearer ` + data.access_token;
    } catch (error) {
      throw error;
    }
  }
}
