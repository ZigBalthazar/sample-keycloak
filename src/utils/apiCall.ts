import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

class ApiClient {
  private axiosInstance = axios.create();

  async callApi<T>(method: string, url: string, data: any = null, headers: any = {}): Promise<T> {
    try {
      const config: AxiosRequestConfig = {
        method,
        url,
        data,
        headers,
      };

      const response: AxiosResponse<T> = await this.axiosInstance.request<T>(config);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiClient();
