import { NextFunction, Response } from "express";
import { LexioRequest } from "../index";
/**
 * Populates the request by setting the user.
 * This user can be retrieved from the next middlewares or the remote methods
 *
 */
export declare function accessControl(req: LexioRequest, res: Response, next: NextFunction): void;
