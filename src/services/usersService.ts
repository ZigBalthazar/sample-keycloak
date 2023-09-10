import apiClient from '../utils/apiCall';
import { AdminService } from './adminService';

export class UserService {
  static async registerUser(userData: Iuser): Promise<string> {
    try {
      const token = await AdminService.newToken();

      const requestBody = {
        username: userData.username,
        credentials: [
          {
            type: 'password',
            value: userData.password,
          },
        ],
        enabled: true,
      };

      const requestHeader = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token.toString(),
      };

      await apiClient.callApi<any>('POST', `${process.env.BASE}/admin/realms/${process.env.REALM}/users`, requestBody, requestHeader);

      return;
    } catch (error) {
      throw error;
    }
  }
}
