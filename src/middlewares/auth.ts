import messageEnum from 'enums/messageEnum';
import { Request, Response, NextFunction } from 'express';
import apiClient from '../utils/apiCall';
import { apiResponse } from 'utils/apiResponse';

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const jwtToken = req.cookies.jwtToken;

    if (!jwtToken) {
      return apiResponse(res, 401, messageEnum.unAuth);
    }

    const requestBody = {
      token: jwtToken,
      client_id: process.env.KC_APP_CLIENT,
      client_secret: process.env.KC_ADMIN_CLIENT_SECRET,
    };

    const requestHeader = {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const data = await apiClient.callApi<any>(
      'POST',
      `${process.env.BASE}/realms/${process.env.REALM}/protocol/openid-connect/token/introspect`,
      requestBody,
      requestHeader
    );

    if (data.active) {
      next();
    } else {
      apiResponse(res, 401, messageEnum.unAuth);
    }
  } catch (err) {
    next(err);
  }
}
