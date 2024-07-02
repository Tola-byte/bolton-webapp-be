import { Response } from "express";

export interface ResponseQueryType {
    res: Response;
    code?: number | undefined;
    message?: string | undefined;
    data?: any | undefined;

    //   paging?: any | undefined;
}

export interface RequestQueryType {
    id?: string | undefined;
    query?: string | undefined;
    status?: string | undefined;
    key?: string | undefined;
    prod?: string | undefined;
}
