interface HttpCustomStatusScheme {
    notFoundAPIUrl: 4040;
    returnNotFoundAPIUrl: 4041;
    returnNoPermission: 4030;
    returnBadRequest: 4000;
    schemeError: 5000;
    serverError: 5001;
    parseError: 8888;
    responseError: 9998;
    unknownError: 9999;
}
interface HttpErrorStatusResponse {
    notFound: 404;
    internalServerError: 500;
    forbidden: 403;
    badRequest: 400;
}

interface ErrorMessage {
    notFoundAPIUrl: string;
    returnNotFoundAPIUrl: string;
    returnNoPermission: string;
    returnBadRequest: string;
    schemeError: string;
    serverError: string;
    parseError: string;
    responseError: string;
    unknownError: string;
}

/**
 * 適宜必要なステータスを追加する
 */
export type HttpStatus = 404 | 500 | 403 | 400;
export type HttpCustomStatus =
    | 4040 //URLが設定されていない
    | 4041 //httpからのレスポンスで404が返ってきた
    | 4030 //権限がない
    | 4000 //不正なリクエスト
    | 5000 //スキームが間違っている
    | 5001 // サーバーエラー
    | 8888 //パースエラー
    | 9998 //レスポンスが不正
    | 9999; //unknown

export interface HttpErrorScheme {
    httpErrorStatusResponse: HttpErrorStatusResponse;
    httpCustomStatusScheme: HttpCustomStatusScheme;
    errorMessage: ErrorMessage;
}

export const createHttpScheme: HttpErrorScheme = (function () {
    /**API仕様で変更 */
    const httpErrorStatusResponse: HttpErrorStatusResponse = {
        notFound: 404,
        internalServerError: 500,
        forbidden: 403,
        badRequest: 400
    };
    /**API仕様で変更 */
    const httpCustomStatusScheme: HttpCustomStatusScheme = {
        notFoundAPIUrl: 4040,
        returnNotFoundAPIUrl: 4041,
        returnNoPermission: 4030,
        returnBadRequest: 4000,
        schemeError: 5000,
        serverError: 5001,
        parseError: 8888,
        responseError: 9998,
        unknownError: 9999
    };

    /**API仕様や画面仕様で変更 */
    const errorMessage: ErrorMessage = {
        notFoundAPIUrl: "APIのURLが設定されていません",
        returnNotFoundAPIUrl: "APIのURLが見つかりません",
        returnNoPermission: "権限がありません",
        returnBadRequest: "不正なリクエストです",
        schemeError: "スキームが間違っています。",
        serverError: "サーバーエラーです",
        parseError: "パースエラーです",
        responseError: "レスポンスが不正です",
        unknownError: "unknown error"
    };

    return {
        httpErrorStatusResponse: httpErrorStatusResponse,
        httpCustomStatusScheme: httpCustomStatusScheme,
        errorMessage: errorMessage
    };
})();
