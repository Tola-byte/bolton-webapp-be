import { Response } from "express";
import { ResponseQueryType } from "../interfaces/query.interface";

export const handleSuccess = (responseObject: ResponseQueryType) => {
    const { res, code, message, data } = responseObject;
    const dataFound = data !== null || data?.length;
    return res.status(code || 200).json({
        success: dataFound ? true : false,
        message: dataFound ? message || "Success" : message || "No data",
        data,
    });
};

export const handleError = (res: Response, error: any) => {

    // logger.error(error?.message || "Unexpected error");

    return res.status(400).json({
        success: false,
        message: "Unexpected error",
    });
};

export const handleBadRequest = (responseObject: ResponseQueryType) => {
    const { res, code, message, data } = responseObject;

    // logger.error(message || "Unexpected error");
    return res.status(Number(code) || 400).json({
        success: false,
        message: message || "Failed",
        data,
    });
};