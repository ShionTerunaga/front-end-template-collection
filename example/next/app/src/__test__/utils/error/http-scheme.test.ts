import { createHttpScheme } from "@/utils/error/http/http-scheme";
import { describe, expect, it } from "vitest";

describe("http-scheme", () => {
    it("createHttpSchemeにおいてhttpErrorStatusResponseの正常な値が返ってくる", () => {
        const httpErrorScheme = createHttpScheme;

        expect(httpErrorScheme.httpErrorStatusResponse.notFound).toEqual(404);
        expect(
            httpErrorScheme.httpErrorStatusResponse.internalServerError
        ).toEqual(500);
        expect(httpErrorScheme.httpErrorStatusResponse.badRequest).toEqual(400);
        expect(httpErrorScheme.httpErrorStatusResponse.forbidden).toEqual(403);
    });

    it("createHttpSchemeにおいてhttpCustomStatusScheme", () => {
        const httpErrorScheme = createHttpScheme;

        expect(httpErrorScheme.httpCustomStatusScheme.notFoundAPIUrl).toEqual(
            4040
        );
        expect(
            httpErrorScheme.httpCustomStatusScheme.returnNotFoundAPIUrl
        ).toEqual(4041);
        expect(
            httpErrorScheme.httpCustomStatusScheme.returnNoPermission
        ).toEqual(4030);
        expect(httpErrorScheme.httpCustomStatusScheme.returnBadRequest).toEqual(
            4000
        );
        expect(httpErrorScheme.httpCustomStatusScheme.schemeError).toEqual(
            5000
        );
        expect(httpErrorScheme.httpCustomStatusScheme.serverError).toEqual(
            5001
        );
        expect(httpErrorScheme.httpCustomStatusScheme.parseError).toEqual(8888);
        expect(httpErrorScheme.httpCustomStatusScheme.unknownError).toEqual(
            9999
        );
    });

    it("createHttpSchemeにおいてerrorMessage", () => {
        const httpErrorScheme = createHttpScheme;

        expect(httpErrorScheme.errorMessage.notFoundAPIUrl).toEqual(
            "APIのURLが設定されていません"
        );
        expect(httpErrorScheme.errorMessage.returnNotFoundAPIUrl).toEqual(
            "APIのURLが見つかりません"
        );
        expect(httpErrorScheme.errorMessage.returnNoPermission).toEqual(
            "権限がありません"
        );
        expect(httpErrorScheme.errorMessage.returnBadRequest).toEqual(
            "不正なリクエストです"
        );
        expect(httpErrorScheme.errorMessage.schemeError).toEqual(
            "スキームが間違っています。"
        );
        expect(httpErrorScheme.errorMessage.serverError).toEqual(
            "サーバーエラーです"
        );
        expect(httpErrorScheme.errorMessage.parseError).toEqual(
            "パースエラーです"
        );
        expect(httpErrorScheme.errorMessage.unknownError).toEqual(
            "unknown error"
        );
    });
});
