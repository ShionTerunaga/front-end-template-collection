import { describe, expect, it } from "vitest";
import { fetcherErrorScheme } from "../../../utils/error/fetcher/fetcher-scheme";
import { createHttpScheme } from "../../../utils/error/http/http-scheme";

describe("fetcherErrorScheme の検証", () => {
    it("基本プロパティが存在する", () => {
        expect(fetcherErrorScheme).toBeDefined();
        expect(fetcherErrorScheme.httpErrorStatusResponse).toBeDefined();
        expect(fetcherErrorScheme.fetcherErrorStatusScheme).toBeDefined();
        expect(fetcherErrorScheme.fetchErrorMessage).toBeDefined();
    });

    it("fetcher 用のカスタムステータスコードが期待どおり", () => {
        const s = fetcherErrorScheme.fetcherErrorStatusScheme;
        expect(s.returnNotSetAPIUrl).toBe(4040);
        expect(s.returnSchemeError).toBe(5000);
        expect(s.returnParseError).toBe(8000);
        expect(s.returnFetchFunctionError).toBe(9000);
        expect(s.returnUnknownError).toBe(9999);
    });

    it("fetcher 用のエラーメッセージが期待どおり", () => {
        const m = fetcherErrorScheme.fetchErrorMessage;
        expect(m.returnNotSetAPIUrl).toBe("APIのURLが設定されていません");
        expect(m.returnSchemeError).toBe("スキームエラーが発生しました");
        expect(m.returnParseError).toBe("データのパースに失敗しました");
        expect(m.returnFetchFunctionError).toBe(
            "フェッチ関数でエラーが発生しました"
        );
        expect(m.returnUnknownError).toBe("不明なエラーが発生しました");
    });

    it("httpErrorStatusResponse は createHttpScheme と一致する", () => {
        expect(fetcherErrorScheme.httpErrorStatusResponse).toEqual(
            createHttpScheme.httpErrorStatusResponse
        );
    });
});
