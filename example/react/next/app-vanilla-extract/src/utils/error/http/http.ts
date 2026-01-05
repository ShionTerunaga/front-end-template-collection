import {
    createHttpScheme,
    HttpCustomStatus
} from "@/utils/error/http/http-scheme";
import { CustomError } from "../core/core-error";

export interface HttpError extends CustomError {
    status: HttpCustomStatus;
    message: string;
}

/**ここは仕様に応じて変更する*/
export const createHttpError = (function () {
    const httpErrorScheme = createHttpScheme;

    const createHttpError = ({
        status,
        message
    }: {
        status: HttpCustomStatus;
        message: string;
    }): HttpError => {
        return {
            type: "httpError",
            status,
            message
        };
    };

    const notFoundAPIUrl = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.notFoundAPIUrl,
            message: httpErrorScheme.errorMessage.notFoundAPIUrl
        });
    };

    const returnNotFoundAPIUrl = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.returnNotFoundAPIUrl,
            message: httpErrorScheme.errorMessage.returnNotFoundAPIUrl
        });
    };

    const returnNoPermission = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.returnNoPermission,
            message: httpErrorScheme.errorMessage.returnNoPermission
        });
    };

    const returnBadRequest = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.returnBadRequest,
            message: httpErrorScheme.errorMessage.returnBadRequest
        });
    };

    const returnInternalServerError = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.serverError,
            message: httpErrorScheme.errorMessage.serverError
        });
    };

    const unknownError = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.unknownError,
            message: httpErrorScheme.errorMessage.unknownError
        });
    };

    const schemeError = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.schemeError,
            message: httpErrorScheme.errorMessage.schemeError
        });
    };

    const parseError = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.parseError,
            message: httpErrorScheme.errorMessage.parseError
        });
    };

    const responseError = () => {
        return createHttpError({
            status: httpErrorScheme.httpCustomStatusScheme.responseError,
            message: httpErrorScheme.errorMessage.responseError
        });
    };

    return {
        notFoundAPIUrl,
        unknownError,
        schemeError,
        returnNotFoundAPIUrl,
        returnNoPermission,
        returnBadRequest,
        returnInternalServerError,
        parseError,
        responseError
    };
})();
