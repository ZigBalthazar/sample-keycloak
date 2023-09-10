import messageEnum from 'enums/messageEnum';
import { apiResponse } from 'utils/apiResponse';
import { Request, Response } from 'express';
import { LoginService } from 'services/loginService';

export class LoginController {
  static async loginUser(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      const token = await LoginService.login({ username, password });

      res.cookie('jwtToken', token, {
        httpOnly: true
      });

      apiResponse(res, 200, messageEnum.user_login_successfully);
    } catch (error) {
      throw { message: error.response.data, code: error.response.status };
    }
  }
}
