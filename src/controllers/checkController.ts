import messageEnum from 'enums/messageEnum';
import { apiResponse } from 'utils/apiResponse';
import { Request, Response } from 'express';

export class CheckController {
  static async publicRoute(req: Request, res: Response) {
    apiResponse(res, 200, messageEnum.public_route);
  }
  static async securedRoute(req: Request, res: Response) {
    apiResponse(res, 200, messageEnum.secured_route);
  }
}
