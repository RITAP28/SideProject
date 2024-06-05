import { NextFunction } from "express";
type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any> | any;

const catchAsyncErrors = (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default catchAsyncErrors;