import messageEnum from 'enums/messageEnum';
import { UserService } from 'services/usersService';
import { apiResponse } from 'utils/apiResponse';
import { Request, Response } from 'express';

export class UserController {

 static async registerUser(req: Request, res: Response) {
    try {
      const { username, password, email } = req.body;

      await UserService.registerUser( { username, password, email });

      apiResponse(res, 201, messageEnum.user_registered_successfully);
    } catch (error) {
      throw { message: error.response.data, code: error.response.status };
    }
  }
}